// state
let quizQuestions = [
    {
        question: "Who was the Queen of Soul?",
        options: ["Aretha Franklin", "Billie Holiday"],
        answer: "Aretha Franklin"
    },
    {
        question: "What is the biggest hit of Bing Crosby?",
        options: ["White Christmas", "Hotline Bling"],
        answer: "White Christmas"
    },
    {
        question: "In which city was John Lennon killed?",
        options: ["New York", "Gilmer"],
        answer: "New York"
    },
    {
        question: "Whos is the greatest rapper of all time?",
        options: ["Tupac", "Playboi Carti"],
        answer: "Playboi Carti"
    }
] 

//constant variables

let currentIdx = 0
let currentAnsIdx = 0
let pointsScored = 0;

//cached elements

const QuestionEl = document.getElementById('current-question')
const FirstOptionEL = document.getElementById('option-1');
const SecondOptionEL = document.getElementById('option-2');
const NextEl = document.getElementById('next');
const ScoreEL = document.getElementById('score');
//event listeners

NextEl.addEventListener('click', setNextQuestion);
FirstOptionEL.addEventListener('click', selectOption);
SecondOptionEL.addEventListener('click', selectOption);

//functions

function setNextQuestion() {
    NextEl.style.display = "none";
    if(currentIdx < quizQuestions.length - 1) {
        currentIdx += 1;
        currentAnsIdx += 1
        QuestionEl.innerHTML = quizQuestions[currentIdx].question
        FirstOptionEL.innerText = quizQuestions[currentIdx].options[0]
        SecondOptionEL.innerText = quizQuestions[currentIdx].options[1]
    } else {
        endGame();
    } 
} 

function startGame() {
    NextEl.style.display = "none";
    QuestionEl.innerHTML = quizQuestions[0].question
    FirstOptionEL.innerText = quizQuestions[0].options[0]
    SecondOptionEL.innerText = quizQuestions[0].options[1]  
}

function score() {
    if (pointsScored < 75) {
        ScoreEL.innerHTML = 'You failed! You scored a ' + pointsScored + ' points out of 100.'
    } else {
        ScoreEL.innerHTML = 'You passed! You scored a ' + pointsScored + ' points out of 100.'
    }
}

function selectOption(event) {
    NextEl.style.display = 'block';
    const selectedOption = event.target.innerText;
    const correctAnswer = quizQuestions[currentAnsIdx].answer;
    console.log(event.target.innerText) 
    if(selectedOption === correctAnswer) {
        pointsScored += 25;           
    } else {
        console.log('incorrect');
    }
    
}

function endGame() {
        QuestionEl.innerHTML = "Done";
        NextEl.style.display = 'none';
        FirstOptionEL.style.display = "none"
        SecondOptionEL.style.display = "none"
        score();
}

startGame()
