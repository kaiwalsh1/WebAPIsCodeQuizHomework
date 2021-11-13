const questions = [
    {
        question: "This is a question?",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        question: "This is another q?",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        question: "This is third?",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        question: "This is fourth?",
        choices: ["a", "b", "c", "d"],
        answer: "d"
    }
]
// Start Quiz
var startQuizBtn = document.getElementById('startQuizBtn');
startQuizBtn.addEventListener("click", function(){
    document.getElementById('start').classList.add("hidden");
    renderQuestions();
});

// Questions
var mainDiv = document.getElementById('main');
function renderQuestions(){
    var title = document.createElement("h4");
    title.innerText = questions[0].question;
    mainDiv.appendChild(title);
for (var i = 0; i < 4; i++){
    var buttons = document.createElement("button");
    buttons.classList.add('choiceBtn');
    buttons.innerText = questions[0].choices[i];
    buttons.addEventListener("click", checkAnswer());
    mainDiv.appendChild(buttons);    
}
}
function checkAnswer(event){
    console.log(event.target);
}


/* 
add event listener to whole ul
    todoList.addEventListener("click", function(event){
        var element
    })

*/

// Submit event on the form
//  formEl.on('submit', handleFormSubmit);


// TODO: Create a function to handle removing a list item when
// `.delete-item-btn` is clicked
// shoppingListEl.on('click', '.delete-item-btn', function(event){
//     $(event.target).parent().remove();
//    })