document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "login") {
                alert("User Logged inn.");
            } else if (this.getAttribute("class") === "submit-answer") {
                alert("Answer Submitted!");
            } else if (this.getAttribute("class") === "submit-review") {
                alert("Review submitted.");
            } else {
                let tournament = this.getAttribute("data-type");
                alert(`you selected ${tournament} tournament`);
            }
        });
    }
});


function runGame() {

}

function generateQuestion() {

}

function searchAnswer() {

}

function checkAnswer() {

}

function incrementCorrectAnswer() {

}

function incrementIncorrectAnswer() {

}

function worldCupQuestions() {

}

function afconQuestions() {

}

function championsLeagueQuestions() {

}

function ballonDorQuestions() {

}

