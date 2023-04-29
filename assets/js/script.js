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
    let afconYear = Math.floor(Math.random() * 6) * 2 + 2000;
    let champLeagueYear = Math.floor(Math.random() * 13) + 2010;
    let ballonDorYear = Math.floor(Math.random() * 13) + 2010;

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
    let year = document.getElementById('year').innerText;

    if (tournament === "world-cup") {
        let worldCupChampions = {
            2002: 'Brazil',
            2006: 'Italy',
            2010: 'Spain',
            2014: 'Germany',
            2018: 'France',
            2022: 'Argentina',
        };

        return [(worldCupChampions[year]), "world-cup"];
    } else if (tournament === "afcon") {
        let afconChampions = {
            2000: 'Cameroon',
            2002: 'Cameroon',
            2004: 'Tunisia',
            2006: 'Egypt',
            2008: 'Egypt',
            2010: 'Egypt',
            2012: 'Zambia',

        };
        return [(afconChampions[year]), "afcon"];
    } else if (tournament === "champions-league") {
        let championsLeagueChamps = {
            2010: 'Inter Milan',
            2011: 'Barcelona',
            2012: 'Chelsea',
            2013: 'Bayer',
            2014: 'Real Madrid',
            2015: 'Barcelona',
            2016: 'Real Madrid',
            2017: 'Real Madrid',
            2018: 'Real Madrid',
            2019: 'Liverpool',
            2020: 'Bayern',
            2021: 'Chealsea',
            2022: 'Real Madrid',
        };
        return [(championsLeagueChamps[year]), "champions-league"];
    } else if (tournament === "ballon-d'or") {
        let ballonDorWinner = {
            2010: 'Lionel Messi',
            2011: 'Lionel Messi',
            2012: 'Lionel Messi',
            2013: 'Cristiano Ronaldo',
            2014: 'Cristiano Ronaldo',
            2015: 'Lionel Messi',
            2016: 'Cristiano Ronaldo',
            2017: 'Cristiano Ronaldo',
            2018: 'Luka Modrić',
            2019: 'Lionel Messi',
            2020: 'Not Awarded',
            2021: 'Lionel Messi',
            2022: 'Karim Benzema',
        };
    } else {
        alert(`Tournament Uknown`);
        throw (`Unknown tournament! Aborting....`);
    }

}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correctAnswer = searchAnswer();
    let answerIsCorrect = userAnswer === correctAnswer[0];


    if (answerIsCorrect) {
        alert("Correct Answer");
        incrementCorrectAnswer();
        document.getElementById("correction").innerText = correctAnswer[0];
    } else {
        alert("Wrong Answer");
        incrementIncorrectAnswer();
        document.getElementById("correction").innerText = correctAnswer[0];
    }

    runGame(correctAnswer[1]);

}

function incrementCorrectAnswer() {
    let currentScore = parseInt(document.getElementById("correctAnswers").innerText);
    document.getElementById("correctAnswers").innerText = ++currentScore;
}

function incrementIncorrectAnswer() {
    let currentScore = parseInt(document.getElementById("incorrectAnswers").innerText);
    document.getElementById("incorrectAnswers").innerText = ++currentScore;
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

