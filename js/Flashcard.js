let form = document.querySelectorAll("form");
let question = document.getElementById("question-value");
let answer = document.getElementById("answer-value");


form.addEventListener('submit', (e) => {
    console.log("Question: " + question.value);
});