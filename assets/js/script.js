document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
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
    // Generate the years we had tournaments.

    let worldCupYear = Math.floor(Math.random() * 5) * 4 + 2002;
    let afconYear = Math.floor(Math.random() * 11) * 2 + 2000;
    let champLeagueYear = Math.floor(Math.random() * 22) + 2001;
    let ballonDorYear = Math.floor(Math.random() * 22) + 2001;
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

