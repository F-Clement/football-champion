document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("class") === "login") {
                alert("User Logged inn.");
            } else if (this.getAttribute("class") === "submit-answer") {
                checkAnswer();
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

    let tournament = document.getElementById('tournament').innerText;

    if (tournament === "world-cup") {
        let year = document.getElementById('year').innerText;
        let worldCupChampions = {
            2002: 'Brazil',
            2006: 'Italy',
            2010: 'Spain',
            2014: 'Germany',
            2018: 'France',
            2022: 'Argentina',
        };

        return [(worldCupChampions[year]), "world-cup"];
    }

}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correctAnswer = searchAnswer();
    let answerIsCorrect = userAnswer === correctAnswer[0];


    if (answerIsCorrect) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }



}

function incrementCorrectAnswer() {

}

function incrementIncorrectAnswer() {

}

function worldCupQuestions(worldCupYear, tournament) {
    document.getElementById("year").textContent = worldCupYear;
    document.getElementById("tournament").textContent = tournament;

    searchAnswer(tournament);
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

