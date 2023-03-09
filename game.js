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
]; 

let currentIdx = 0
let currentAnsIdx = 0
//constant variables

//cached elements
const QuestionEl = document.getElementById('current-question')
const FirstOptionEL = document.getElementById('option-1');
const SecondOptionEL = document.getElementById('option-2');
const SubmitEl = document.getElementById('submit');
//event listeners

SubmitEl.addEventListener('click', setNextQuestion);
FirstOptionEL.addEventListener('click', selectOption);
SecondOptionEL.addEventListener('click', selectOption);

//functions
function setNextQuestion() {
    if(currentIdx < quizQuestions.length) {
        QuestionEl.innerHTML = quizQuestions[currentIdx].question
        FirstOptionEL.innerText = quizQuestions[currentIdx].options[0]
        SecondOptionEL.innerText = quizQuestions[currentIdx].options[1]
        currentIdx += 1
    } else {
        QuestionEl.innerHTML = "Done";
    }
}
setNextQuestion();

function selectOption(event) {
    const selectedOption = event.target.innerText;
    const correctAnswer = quizQuestions[currentAnsIdx].answer;
    console.log(event.target.innerText) 
    if(selectedOption === correctAnswer) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    if (currentAnsIdx < currentIdx) {
    currentAnsIdx +=1 }
}
