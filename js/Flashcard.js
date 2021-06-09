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
    let cardOutQuestion = document.createElement('p');
    cardOutQuestion.setAttribute("id", "question-para");
    cardOutQuestion.innerText = "Question: " + flash.question;
    document.getElementById('card-val').appendChild(cardOutQuestion);

    let cardOutAnswer = document.createElement('p');
    cardOutAnswer.setAttribute("id", "answer-para");
    cardOutAnswer.innerText = "Answer: " + flash.answer;
    document.getElementById("card-val").appendChild(cardOutAnswer);
    document.getElementById("card-val").style.border = "1px solid black";
    document.getElementById("card-val").style.marginRight = "90%";

    let cardOutDelete = document.createElement('button');
    cardOutDelete.setAttribute("id", "button-delete");
    cardOutDelete.innerText = "Delete Flashcard";
    document.getElementById("card-val").appendChild(cardOutDelete);
    cardOutDelete.onclick = () => {
        const cardValContent = document.getElementById("card-val");
        cardValContent.textContent = '';
        document.getElementById('card-val').style.border = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("save-flash").addEventListener('click', addCard);
});