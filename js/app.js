const form = document.querySelector("form");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const submit = document.getElementById("submit");
const grid = document.querySelector(".grid");
const error = document.querySelector(".error");
const start = document.querySelector(".start");
const begin = document.querySelector(".begin");

grid.addEventListener('click', deleteCard);

function deleteCard(e) {
    if (e.target.classList[0] == "delete") {
        const buttons = e.target.parentElement;
        const cardBack = buttons.parentElement;
        const theCard = cardBack.parentElement;
        theCard.parentElement.remove();
    }
    if (e.target.classList[1] == "fa-trash-can") {
        const button = e.target.parentElement;
        const buttons = button.parentElement;
        const cardBack = buttons.parentElement;
        const theCard = cardBack.parentElement;
        theCard.parentElement.remove();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (question.value != "" && answer.value != "") {
        error.classList.remove("show");
        error.classList.add("hide");

        const articleCreate = document.createElement("article");
        const cardCreate = document.createElement("div");
        const figureFront = document.createElement("figure");
        const cardTitle = document.createElement("h2");
        cardTitle.innerText = question.value;
        const figureBack = document.createElement("figure");
        const cardText = document.createElement("p");
        const answerText = cardText.innerText = answer.value;
        const buttonDiv = document.createElement("div");
        const btnEdit = document.createElement("button");
        const editTxt = btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        const btnDelete = document.createElement("button");
        const deleteTxt = btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i></button>';

        articleCreate.classList.add("card-container");
        cardCreate.classList.add("card");
        figureFront.classList.add("front");
        figureBack.classList.add("back");
        buttonDiv.classList.add("btn-div");
        btnEdit.classList.add("edit");
        btnDelete.classList.add("delete");

        grid.appendChild(articleCreate);
        articleCreate.appendChild(cardCreate);
        cardCreate.appendChild(figureFront);
        figureFront.appendChild(cardTitle);
        cardCreate.appendChild(figureBack);
        figureBack.append(cardText);
        figureBack.append(buttonDiv);
        buttonDiv.append(btnEdit);
        buttonDiv.append(btnDelete);
    } else {
        error.classList.remove("hide");
        error.classList.add("show");
    }
});