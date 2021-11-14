var counter = 0;
var timer = document.getElementById("timer");
var startingTime = 15;
var score = '0';
var inputScore = document.getElementById('inputScore');
var saveBtn = document.getElementById('saveBtn');
var ul = document.getElementById('ul');

const questions = [
    {
        question: "___ is a social construct and generally based on the norms, behaviors, and societal roles expected of individuals based primarily on their sex",
        choices: ["a: Gender", "b: Sex", "c: Identity", "d: Cisgender"],
        answer: "a: Gender"
    },
    {
        question: "What term refers to people whose gender identity corresponds to their biological sex?",
        choices: ["a: Transgender", "b: Gender Fluid", "c: Cisgender", "d: Non-binary"],
        answer: "c: Cisgender"
    },
    {
        question: "Gender ___ is a construct that divides people into two genders: male or female.",
        choices: ["a: Binary", "b: Trans", "c: Agender", "d: Identity"],
        answer: "a: Binary"
    },
    {
        question: "___ are the way people refer to themselves or prefer others refer to them",
        choices: ["a: Transgenders", "b: Pronouns", "c: Asexuals", "d: Queers"],
        answer: "b: Pronouns"
    }
];


// Start Quiz

var quizTimer;
var startQuizBtn = document.getElementById('startQuizBtn');
startQuizBtn.addEventListener("click", function(){
    document.getElementById('start').classList.add("hidden");
    renderQuestions();
    quizTimer = setInterval(function(){
        console.log('Countdown');
        startingTime--;
        checkTime();
    }, 1000);
});

function checkTime() {
    document.getElementById("timer").innerText = startingTime;
    if (startingTime <= 0){
        alert('Time is up!');
        clearInterval(quizTimer);
        return;
    }
}

// Questions
var mainDiv = document.getElementById("main");
var scoreDiv = document.getElementById("score");
var userScore = document.getElementById("userScore");
function renderQuestions(){
    if (counter == questions.length){
        mainDiv.classList.add("hidden");
        scoreDiv.classList.remove("hidden");
        userScore.innerText = score;
        return;
    }
    var title = document.createElement("h4");
    title.innerText = questions[counter].question;
    mainDiv.appendChild(title);
for (var i = 0; i < 4; i++){
    var buttons = document.createElement("button");
    buttons.classList.add('choiceBtn');
    if (questions[counter].choices[i] == questions[counter].answer){
        buttons.value = true;
    } else {
        buttons.value = false;
    }
    buttons.innerText = questions[counter].choices[i];
    mainDiv.appendChild(buttons);    
    buttons.addEventListener("click", nextQuestion);
}
}

function nextQuestion(event) {
    clearInterval(quizTimer);
    if (event.target.value == true) {
        score++;
    } else {
        startingTime-=5;
    }
    console.log(event.target.value);
        counter++;
        mainDiv.innerHTML = "";
        renderQuestions();
}

var highScores = [];
if (localStorage.getItem("highScores")){
    highScores = JSON.parse(localStorage.getItem("highScores"));
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.innerText = `${highScores[i].user}: ${highScores[i].score}`
        ul.appendChild(li);
    }
}
saveBtn.addEventListener("click", function(){
    var object = {
        user: inputScore.value,
        score: score,
    };
    highScores.push(object);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}); 



