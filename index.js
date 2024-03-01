const questions = [

    {
        question: "পবিত্র কোরানের কোন সুরায় ‘মীম’ অক্ষরটি নেই?",
        answers:[
            {text: "সুরা তওবা", correct: false},
            {text: "সুরা কাহাফ", correct: false},
            {text: "সুরা কাওসার", correct: true},
            {text: "সুরা ইখলাস", correct: false},
        ]
    },
    {
        question: "পুরুষদের মধ্যে সবচেয়ে বেশি হাদীস বর্ণনা করেন কে?",
        answers:[
            {text: "হজরত আবু হুরায়রা (রাঃ)", correct: true},
            {text: "হজরত আবুবকর (রাঃ)", correct: false},
            {text: "হজরত উমর(রাঃ)", correct: false},
            {text: "আবদুল্লা বিন উসমান (রাঃ)", correct: false},
        ]
    },
    {
        question: "কোন সূরায় ইসলামের মূল সিদ্ধান্তগুলি তাফসীর করা হয়েছে?",
        answers:[
            {text: "সুরা তওবা", correct: false},
            {text: "সূরা আল-ফাতিহা", correct: true},
            {text: "সুরা কাওসার", correct: false},
            {text: "সুরা ইখলাস", correct: false},
        ]
    
    },


    {
        question: "পবিত্র কোরানের সুরাটি জুম্মার দিন পাঠ করা মুস্তাহাব?",
        answers:[
            {text: "সুরা তওবা", correct: false},
            {text: "সূরা আল-ফাতিহা", correct: false},
            {text: "সুরা কাওসার", correct: false},
            {text: "সুরা কাহাফ", correct: true},
        ]
    }
]

const questionElement = document.querySelector(".Question");
const answerButton = document.querySelector(".question-answer");
const nextButton = document.querySelector(".next-btn");


let questionIndex = 0;
let score = 0;


function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetSate();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        
    })
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    })

    nextButton.style.display ="block"
}

function handleNext(){
    questionIndex++;
    if (questionIndex<questions.length) {
        showQuestion()
    }else{
        showScore()
    }
}
function showScore(){
    resetSate();
    questionElement.innerHTML =` Your scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if (questionIndex < questions.length) {
        handleNext();
    }else{
        startQuiz()
    }
})

function resetSate(){
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
startQuiz()










