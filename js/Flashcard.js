let flashcard = [];

const addCard = (ev) => {
    ev.preventDefault();
    let flash = {
        question: document.getElementById("question-value").value,
        answer: document.getElementById("answer-value").value
    }
    flashcard.push(flash);
    document.querySelector('form').reset();

    console.warn('added', { flashcard });
    let pre = document.querySelector('#msg pre');
    /* pre.textContent = '\n' + JSON.stringify(flashcard, '\t', 2);

    localStorage.setItem('myFlashCardList', JSON.stringify(flashcard))
*/
    let cardOutDiv = document.createElement("div");
    cardOutDiv.setAttribute("id", "qa-div");
    document.getElementById('card-val').appendChild(cardOutDiv);
    let cardOutQuestion = document.createElement('p');
    cardOutQuestion.setAttribute("id", "question-para");
    cardOutQuestion.innerText = "Question: " + flash.question;
    document.getElementById("qa-div").appendChild(cardOutQuestion);

    let cardOutAnswer = document.createElement('p');
    cardOutAnswer.setAttribute("id", "answer-para");
    cardOutAnswer.innerText = "Answer: " + flash.answer;
    document.getElementById("qa-div").appendChild(cardOutAnswer);
    document.getElementById("qa-div").style.border = "1px solid black";
    document.getElementById("qa-div").style.marginRight = "90%";

    let cardOutDelete = document.createElement('button');
    cardOutDelete.setAttribute("id", "button-delete");
    cardOutDelete.innerText = "Delete Flashcard";
    document.getElementById("qa-div").appendChild(cardOutDelete);

    cardOutDelete.onclick = () => {
        let cardValContent = document.getElementById("card-val");
        cardValContent.textContent = '';
        document.getElementById("card-val").remove();
    }

    let cardOutModify = document.createElement('button');
    cardOutModify.setAttribute("id", "button-mod");
    cardOutModify.innerText = "Modify Flashcard";
    document.getElementById("qa-div").appendChild(cardOutModify);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("save-flash").addEventListener('click', addCard);
});