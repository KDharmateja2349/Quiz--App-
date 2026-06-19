const questions=[
    {
        question:"what is the largest animal in the world?",
        answers:[
               {text:"Shark",correct:false},
               {text:"Blue Whale",correct:true},
               {text:"Elephant",correct:false},
               {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
               {text:"Japan",correct:false},
               {text:"Bangladesh",correct:false},
               {text:"Myanmar",correct:false},
               {text:"Vatican City",correct:true}
        ]
       
    },
    {
        question:"which is the largest desert in the world?",
        answers:[
               {text:"Thar",correct:false},
               {text:"Sahara",correct:true},
               {text:"Kalahari",correct:false},
               {text:"Gobi",correct:false}
        ]
    },
    {
        question:"whats is the smallest continent in world?",
        answers:[
               {text:"Africa",correct:false},
               {text:"Antarctica",correct:false},
               {text:"Australia",correct:true},
               {text:"Asia",correct:false}
        ]
    },
    {
        question:"which is the smallest planet in the solar system?",
        answers:[
               {text:"Jupiter",correct:false},
               {text:"Mercury",correct:true},
               {text:"Earth",correct:false},
               {text:"Venus",correct:false}
        ]
    },
    {
        question:"which gas is most abundant in the Earths atmosphere?",
        answers:[
               {text:"Nitrogen",correct:true},
               {text:"carbondioxide",correct:false},
               {text:"Oxygen",correct:false},
               {text:"Argon",correct:false}
        ]
    },
    {
        question:"who is the first Prime Minister of India?",
        answers:[
               {text:"Narendra Modi",correct:false},
               {text:"Jawaharlal Nehru",correct:true},
               {text:"Babu Rajendra prasad",correct:false},
               {text:"Dr.Ambedhkar",correct:false}
        ]
    },
    {
        question:"How many bones in the adult human?",
        answers:[
               {text:"200",correct:false},
               {text:"205",correct:false},
               {text:"206",correct:true},
               {text:"208",correct:false}
        ]
    },
    {
        question:"which planet is said to Red planet?",
        answers:[
               {text:"Mercury",correct:false},
               {text:"Venus",correct:false},
               {text:"Mars",correct:true},
               {text:"Jupiter",correct:false}
        ]
    },
    {
        question:"Who is known as the God of Cricket?",
        answers:[
               {text:"Virat Kohli",correct:false},
               {text:"Sachin Tendulkar",correct:true},
               {text:"Jacques Kallis",correct:false},
               {text:"Ricky Ponting",correct:false}
        ]
    }
];
const questionElement=document.getElementById("question");
const answerBtns=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");


let currentQustionIndex=0;
let score=0;

function startQuiz(){
    currentQustionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQustionIndex];
    let questionNo=currentQustionIndex + 1;
    questionElement.innerHTML=questionNo +"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display="none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}
function showScore(){

    resetState();

    // FIXED HERE
    questionElement.innerHTML =
    `You scored ${score} out of ${questions.length}!`;

    nextBtn.innerHTML =
    "Play Again";

    nextBtn.style.display =
    "block";
}
function handleNextBtn(){
    currentQustionIndex++;
    if(currentQustionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener("click",()=>{
    if(currentQustionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});
startQuiz();
