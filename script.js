const questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["Berlin", "München", "Hamburg", "Frankfurt"],
        correct: "Berlin",
    },
    {
        question: "Was ist die Hauptstadt von Frankreich?",
        answers: ["Rom", "Paris", "Madrid", "Berlin"],
        correct: "Paris",
    },
    {
        question: "Was ist die größte Kontinent der Erde?",
        answers: ["Afrika", "Asien", "Europa", "Nordamerika"],
        correct: "Asien",
    },
    {
        question: "Was ist die chemische Formel für Wasser?",
        answers: ["H2O", "CO2", "O2", "NaCl"],
        correct: "H2O",
    },
    {
        question: "Welcher Planet ist bekannt als der Rote Planet?",
        answers: ["Erde", "Mars", "Jupiter", "Venus"],
        correct: "Mars",
    },
    {
        question: "Was ist die Währung in Japan?",
        answers: ["Yen", "Dollar", "Euro", "Pfund"],
        correct: "Yen",
    },
    {
        question: "Wer malte die Mona Lisa?",
        answers: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
        correct: "Da Vinci",
    },
    {
        question: "Was ist die Hauptstadt von Kanada?",
        answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correct: "Ottawa",
    },
    {
        question: "Was ist die chemische Formel für Salz?",
        answers: ["H2O", "NaCl", "CO2", "O2"],
        correct: "NaCl",
    },
    {
        question: "Wer schrieb 'Hamlet'?",
        answers: ["Shakespeare", "Hemingway", "Dickens", "Austen"],
        correct: "Shakespeare",
    },

    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: ["14", "16", "12", "10"],
        correct: "16",
    },
    {
        question: "Welcher Ozean ist der größte?",
        answers: ["Atlantik", "Indischer Ozean", "Arktischer Ozean", "Pazifischer Ozean"],
        correct: "Pazifischer Ozean",
    },
    {
        question: "Was ist der längste Fluss der Welt?",
        answers: ["Amazonas", "Nil", "Yangtze", "Mississippi"],
        correct: "Nil",
    },
    {
        question: "Welches Element hat das chemische Symbol 'O'?",
        answers: ["Gold", "Sauerstoff", "Silber", "Kohlenstoff"],
        correct: "Sauerstoff",
    },
    {
        question: "Wer entdeckte Amerika?",
        answers: ["Magellan", "Columbus", "Cook", "Vespucci"],
        correct: "Columbus",
    },
    {
        question: "Was ist die Hauptstadt von Australien?",
        answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: "Canberra",
    },
    {
        question: "Welches Tier ist bekannt als das 'Schiff der Wüste'?",
        answers: ["Kamel", "Pferd", "Elefant", "Zebra"],
        correct: "Kamel",
    },
    {
        question: "Was ist die größte Stadt der Welt nach Bevölkerung?",
        answers: ["Tokio", "Delhi", "Shanghai", "São Paulo"],
        correct: "Tokio",
    },
    {
        question: "Was ist die kleinste Einheit des Lebens?",
        answers: ["Zelle", "Gewebe", "Organ", "System"],
        correct: "Zelle",
    },
    {
        question: "Wie viele Planeten gibt es in unserem Sonnensystem?",
        answers: ["7", "8", "9", "10"],
        correct: "8",
    },
    {
        question: "Welches Land ist bekannt für seine Pyramiden?",
        answers: ["Mexiko", "Ägypten", "Griechenland", "Indien"],
        correct: "Ägypten",
    },
    {
        question: "Was ist die Hauptstadt von Italien?",
        answers: ["Rom", "Mailand", "Venedig", "Florenz"],
        correct: "Rom",
    },
    {
        question: "Wer war der erste Mensch auf dem Mond?",
        answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        correct: "Neil Armstrong",
    },
    {
        question: "Wie viele Kontinente gibt es?",
        answers: ["5", "6", "7", "8"],
        correct: "7",
    },
    {
        question: "Was ist die Hauptstadt von Spanien?",
        answers: ["Barcelona", "Madrid", "Valencia", "Sevilla"],
        correct: "Madrid",
    },
    {
        question: "Welches Gas atmen wir ein?",
        answers: ["Sauerstoff", "Kohlenstoffdioxid", "Stickstoff", "Argon"],
        correct: "Sauerstoff",
    },
    {
        question: "Was ist die größte Wüste der Welt?",
        answers: ["Sahara", "Gobi", "Kalahari", "Antarktis"],
        correct: "Antarktis",
    },
    {
        question: "Welches Element hat das chemische Symbol 'Fe'?",
        answers: ["Eisen", "Gold", "Silber", "Zink"],
        correct: "Eisen",
    },
    {
        question: "Was ist die Hauptstadt von Russland?",
        answers: ["Moskau", "Sankt Petersburg", "Kasan", "Novosibirsk"],
        correct: "Moskau",
    },
    {
        question: "Wie viele Zähne hat ein erwachsener Mensch?",
        answers: ["28", "30", "32", "34"],
        correct: "32",
    },
    {
        question: "Welches Tier ist das größte lebende Tier auf der Erde?",
        answers: ["Elefant", "Blauwal", "Giraffe", "Sperrhai"],
        correct: "Blauwal",
    },
    {
        question: "Was ist die kleinste Einheit eines chemischen Elements?",
        answers: ["Molekül", "Atom", "Ion", "Mischung"],
        correct: "Atom",
    },
    {
        question: "Wer war der erste Präsident der Vereinigten Staaten?",
        answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correct: "George Washington",
    },
    {
        question: "Was ist der Hauptbestandteil von Luft?",
        answers: ["Sauerstoff", "Kohlenstoffdioxid", "Stickstoff", "Argon"],
        correct: "Stickstoff",
    },
    {
        question: "Wie nennt man die Wissenschaft vom Verhalten von Tieren?",
        answers: ["Zoologie", "Biologie", "Ökologie", "Verhaltensforschung"],
        correct: "Verhaltensforschung",
    },
    {
        question: "Was ist der höchste Berg der Welt?",
        answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        correct: "Mount Everest",
    },
    {
        question: "Was ist die Hauptstadt von Ägypten?",
        answers: ["Kairo", "Alexandria", "Luxor", "Gizeh"],
        correct: "Kairo",
    },
    {
        question: "Wie nennt man die Umwandlung von Wasser in Dampf?",
        answers: ["Kondensation", "Evaporation", "Sublimation", "Rekristallisation"],
        correct: "Evaporation",
    },
    {
        question: "Was ist die größte Tierart der Welt?",
        answers: ["Blauwal", "Elefant", "Giraffe", "Nashorn"],
        correct: "Blauwal",
    },
    {
        question: "Welches Land hat die meisten Einwohner?",
        answers: ["USA", "Indien", "China", "Russland"],
        correct: "China",
    },
    {
        question: "Was ist die offizielle Sprache von Brasilien?",
        answers: ["Spanisch", "Französisch", "Portugiesisch", "Englisch"],
        correct: "Portugiesisch",
    },
    {
        question: "Welches Element hat das chemische Symbol 'Na'?",
        answers: ["Natrium", "Neon", "Nickel", "Nobelium"],
        correct: "Natrium",
    },
    {
        question: "Wie nennt man das Hauptorgan des menschlichen Körpers?",
        answers: ["Herz", "Lunge", "Gehirn", "Leber"],
        correct: "Gehirn",
    },
    {
        question: "Wer erfand das Telefon?",
        answers: ["Einstein", "Bell", "Edison", "Tesla"],
        correct: "Bell",
    },
    {
        question: "Was ist der schnellste Landtier?",
        answers: ["Löwe", "Gepard", "Tiger", "Zebra"],
        correct: "Gepard",
    },
    {
        question: "Wie nennt man die Farben des Regenbogens?",
        answers: ["Primärfarben", "Sekundärfarben", "Spektralfarben", "Komplementärfarben"],
        correct: "Spektralfarben",
    },
    {
        question: "Was ist das größte Land der Welt?",
        answers: ["Kanada", "USA", "China", "Russland"],
        correct: "Russland",
    },
    {
        question: "Wer schrieb die 'Odyssee'?",
        answers: ["Homer", "Virgil", "Sofokles", "Platon"],
        correct: "Homer",
    },
    {
        question: "Was ist die offizielle Währung von Großbritannien?",
        answers: ["Euro", "Dollar", "Pfund", "Yen"],
        correct: "Pfund",
    },
    {
        question: "Wie viele Bundesstaaten hat die USA?",
        answers: ["50", "51", "49", "52"],
        correct: "50",
    },
    {
        question: "Was ist das größte Organ des menschlichen Körpers?",
        answers: ["Leber", "Haut", "Herz", "Lunge"],
        correct: "Haut",
    },
    {
        question: "Wie viele Ozeane gibt es auf der Erde?",
        answers: ["3", "4", "5", "7"],
        correct: "5",
    },
    {
        question: "Wer entdeckte Penicillin?",
        answers: ["Fleming", "Pasteur", "Koch", "Curie"],
        correct: "Fleming",
    },
    {
        question: "Was ist die Hauptstadt von Griechenland?",
        answers: ["Athen", "Rom", "Kairo", "Istanbul"],
        correct: "Athen",
    },
    {
        question: "Wie nennt man das größte Säugetier der Welt?",
        answers: ["Elefant", "Blauwal", "Giraffe", "Nashorn"],
        correct: "Blauwal",
    },
    {
        question: "Was ist der längste Fluss in Deutschland?",
        answers: ["Rhein", "Elbe", "Donau", "Weser"],
        correct: "Donau",
    },
    {
        question: "Wie viele Nullen hat eine Million?",
        answers: ["6", "5", "7", "4"],
        correct: "6",
    },
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
