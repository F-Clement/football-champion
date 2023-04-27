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
                runGame(tournament);
            }
        });
    }

    runGame("world-cup");
});


function runGame(tournament) {
    // Generate the years we had tournaments.

    let worldCupYear = Math.floor(Math.random() * 5) * 4 + 2002;
    let afconYear = Math.floor(Math.random() * 11) * 2 + 2000;
    let champLeagueYear = Math.floor(Math.random() * 22) + 2001;
    let ballonDorYear = Math.floor(Math.random() * 22) + 2001;

    if (tournament === "world-cup") {
        worldCupQuestions(worldCupYear, tournament);
    } else if (tournament === "afcon") {
        afconQuestions(afconYear, tournament);
    } else if (tournament === "champions-league") {
        championsLeagueQuestions(champLeagueYear, tournament);
    } else if (tournament === "ballon-d'or") {
        ballonDorQuestions(ballonDorYear, tournament);
    } else {
        alert(`Unknown Tournament: ${tournament}`);
        throw `Unknown Tournament: ${tournament}`;
    }

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

function worldCupQuestions(worldCupYear, tournament) {
    document.getElementById("year").textContent = worldCupYear;
    document.getElementById("tournament").textContent = tournament;
}

function afconQuestions(afconYear, tournament) {
    document.getElementById("year").textContent = afconYear;
    document.getElementById("tournament").textContent = tournament;
}

function championsLeagueQuestions(champLeagueYear, tournament) {
    document.getElementById("year").textContent = champLeagueYear;
    document.getElementById("tournament").textContent = tournament;
}

function ballonDorQuestions(ballonDorYear, tournament) {
    document.getElementById("year").textContent = ballonDorYear;
    document.getElementById("tournament").textContent = tournament;
}

