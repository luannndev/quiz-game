const questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["Berlin", "München", "Hamburg", "Köln"],
        correct: 0
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: ["14", "16", "12", "10"],
        correct: 1
    },
    {
        question: "Was ist die größte Stadt in Deutschland?",
        answers: ["Berlin", "Hamburg", "München", "Frankfurt"],
        correct: 0
    },
    {
        question: "Welches Tier ist das Symbol von Deutschland?",
        answers: ["Adler", "Löwe", "Bär", "Wolf"],
        correct: 0
    },
    {
        question: "In welchem Jahr fiel die Berliner Mauer?",
        answers: ["1987", "1989", "1990", "1991"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    scoreElement.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hidden');
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerText = `Du hast ${score} von ${questions.length} richtig!`;
    answersElement.innerHTML = '';
    nextButton.classList.add('hidden');
    scoreElement.innerText = `Endpunktzahl: ${score} von ${questions.length}`;
    scoreElement.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
});

startGame();
