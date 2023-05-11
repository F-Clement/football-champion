document.addEventListener("DOMContentLoaded", function () {
    runGame("World Cup");
});

const submitAnswer = document.getElementById("submitAnswer");
submitAnswer.addEventListener("click", checkAnswer);

const signIn = document.getElementById("login");
signIn.addEventListener("click", login);

const submitReview = document.getElementById("reviewbtn");
submitReview.addEventListener("click", reviews);

const worldCupBtn = document.getElementById("worldCupBtn");
worldCupBtn.addEventListener("click", firstGame);

const afconBtn = document.getElementById("afconBtn");
afconBtn.addEventListener("click", secondGame);

const cLeagueBtn = document.getElementById("cLeagueBtn");
cLeagueBtn.addEventListener("click", thirdGame);

const ballonDorBtn = document.getElementById("ballonDorBtn");
ballonDorBtn.addEventListener("click", fourthGame);




/**
 * Requires a user enters atleast some text as username before login in.
 * @param {sring} event 
 */
function login(event) {
    const user = document.getElementById("user").value;
    if (user === "") {
        alert("Please input your username before clicking login");
    } else {
        alert("User Logged inn.");
    }
}
/**
 * Verifies a user is not submitting and empty text for review before confirming review submitted.
 * @param {string} event 
 */
function reviews(event) {
    const review = document.getElementById("reviews").value;
    if (review === "") {
        alert("You are trying to submit an empty feedback.");
    } else {
        alert("Review submitted.");
    }
}
/**
 * This function will call function runGame and pass it a string parameter "World cup"
 * @param {string} event 
 */
function firstGame(event) {
    runGame("World Cup");
}
/**
 * This function will call function runGame and pass it a string parameter "AFCOn"
 * @param {string} event 
 */
function secondGame(event) {
    runGame("AFCON");
}
/**
 * This function will call function runGame and pass it a string parameter "Champions League"
 * @param {string} event 
 */
function thirdGame(event) {
    runGame("Champions League");
}
/**
 * This function will call function runGame and pass it a string paramenter "Ballon D'or"
 * @param {string} event 
 */
function fourthGame(event) {
    runGame("Ballon D'or");
}

/**
 * Runs the game for a selected tournament
 * @param {string} tournament 
 */
function runGame(tournament) {
    // Generate the years we had tournaments.

    let worldCupYear = Math.floor(Math.random() * 6) * 4 + 2002;
    let afconYear = Math.floor(Math.random() * 7) * 2 + 2000;
    let champLeagueYear = Math.floor(Math.random() * 13) + 2010;
    let ballonDorYear = Math.floor(Math.random() * 13) + 2010;

    if (tournament === "World Cup") {
        worldCupQuestions(worldCupYear, tournament);
    } else if (tournament === "AFCON") {
        afconQuestions(afconYear, tournament);
    } else if (tournament === "Champions League") {
        championsLeagueQuestions(champLeagueYear, tournament);
    } else if (tournament === "Ballon D'or") {
        ballonDorQuestions(ballonDorYear, tournament);
    } else {
        alert(`Unknown Tournament: ${tournament}`);
        throw `Unknown Tournament: ${tournament}`;
    }

}
/**
 * Assign answers for each tournament so that after user submits ans answer, we can check if its correct or not
 * @returns champions for a random year and the tournament
 */
function searchAnswer() {

    let tournament = document.getElementById('tournament').innerText;
    let year = document.getElementById('year').innerText;

    if (tournament === "World Cup") {
        const worldCupChampions = {
            2002: 'Brazil',
            2006: 'Italy',
            2010: 'Spain',
            2014: 'Germany',
            2018: 'France',
            2022: 'Argentina',
        };

        return [(worldCupChampions[year]), "World Cup"];
    } else if (tournament === "AFCON") {
        const afconChampions = {
            2000: 'Cameroon',
            2002: 'Cameroon',
            2004: 'Tunisia',
            2006: 'Egypt',
            2008: 'Egypt',
            2010: 'Egypt',
            2012: 'Zambia',

        };
        return [(afconChampions[year]), "AFCON"];
    } else if (tournament === "Champions League") {
        const championsLeagueChamps = {
            2010: 'Inter Milan',
            2011: 'Barcelona',
            2012: 'Chelsea',
            2013: 'Bayern',
            2014: 'Real Madrid',
            2015: 'Barcelona',
            2016: 'Real Madrid',
            2017: 'Real Madrid',
            2018: 'Real Madrid',
            2019: 'Liverpool',
            2020: 'Bayern',
            2021: 'Chelsea',
            2022: 'Real Madrid',
        };
        return [(championsLeagueChamps[year]), "Champions League"];
    } else if (tournament === "Ballon D'or") {
        const ballonDorWinner = {
            2010: 'Lionel Messi',
            2011: 'Lionel Messi',
            2012: 'Lionel Messi',
            2013: 'Christiano Ronaldo',
            2014: 'Christiano Ronaldo',
            2015: 'Lionel Messi',
            2016: 'Christiano Ronaldo',
            2017: 'Christiano Ronaldo',
            2018: 'Luka Modrić',
            2019: 'Lionel Messi',
            2020: 'Not Awarded',
            2021: 'Lionel Messi',
            2022: 'Karim Benzema',
        };
        return [(ballonDorWinner[year]), "Ballon D'or"];
    } else {
        alert(`Tournament Uknown`);
        throw (`Unknown tournament! Aborting....`);
    }

}
/**
 * Compare submitted answer and answer from searchanswer() function
 */
function checkAnswer() {

    const form = document.getElementById("answer");
    let userAnswer = (form.elements["answer"].value);
    let correctAnswer = searchAnswer();
    let correct = correctAnswer[0];

    if (userAnswer === correctAnswer[0]) {
        document.getElementById("correction").innerText = `Yeeehhh! ${correct} Is the correct Answer`;
        incrementCorrectAnswer();
    } else if (userAnswer === "") {
        document.getElementById("correction").innerText = "Select at least one answer from the answers above.";
        incrementIncorrectAnswer();
    } else {
        document.getElementById("correction").innerText = `Ohh No!. The correct answer is ${correct}`;
        incrementIncorrectAnswer();
    }


    // Add supporting images to correct answers
    switch (correctAnswer[0]) {
        case 'Brazil':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/brazil.jpg" alt="Picture of Brazil National Team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Italy':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/italy.jpg" alt="Picture of Italian National Team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Spain':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/spain.jpg" alt="Picture of Spains national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Germany':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/germany.jpg" alt="Picture of German national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'France':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/france.jpg" alt="Picture of France national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Argentina':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/argentina.jpeg" alt = "Picture of Argentina's national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Cameroon':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/cameroon.jpeg" alt="Picture of Cameroon national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Egypt':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/egypt.jpg" alt = "Picture of the Egyptian national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Tunisia':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/tunisia.jpg" alt="Picture of Tunisias national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Zambia':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/zambia.jpg" alt="Picture of Zambian national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Senegal':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/senegal.webp" alt="Picture of Senegals national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Nigeria':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/nigeria.png" alt = "Picture of nigerians national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Barcelona':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/barcelona.jpg" alt= "Picture of Barcelonas team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Bayern':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/bayern.jpg" alt="Picture of Bayerns team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Chelsea':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/chelsea.jpg" alt = "Picture of Chelseas football team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Inter Milan':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/inter-milan.jpg" alt="Picture of Milans team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Liverpool':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/liverpool.jpg" alt = "Picture of Liverpools team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Real Madrid':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/real-madrid.jpg" alt = Picture of Real Madrids team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Lionel Messi':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/lionel-messi.jpg" alt="Picture of Lionel Messi with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Christiano Ronaldo':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/christiano.jpg" alt = "Picture of Christiano Ronaldo with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Karim Benzema':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/benzema.jpg" alt="Picture of Benzema with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Luka Modrić':
            document.getElementById("champions-image").innerHTML = `<img src="assets/images/luka.jpg" alt = "Picture of Modric with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        default:
            document.getElementById("champions-image").innerHTML = `NOT AWARDED`;
    }

    runGame(correctAnswer[1]);

}
/**
 * Increment incorrect answer count after user submits answer
 */
function incrementCorrectAnswer() {
    let currentCorrectScore = parseInt(document.getElementById("correctAnswers").innerText);
    document.getElementById("correctAnswers").innerText = ++currentCorrectScore;
}
/**
 * Increment correct answer count after user submits answer
 */
function incrementIncorrectAnswer() {
    let currentIncorrectScore = parseInt(document.getElementById("incorrectAnswers").innerText);
    document.getElementById("incorrectAnswers").innerText = ++currentIncorrectScore;
}
/**
 * Generate questions for world cup game
 * @param {string} worldCupYear 
 * @param {string} tournament 
 */
function worldCupQuestions(worldCupYear, tournament) {
    document.getElementById("year").textContent = worldCupYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form id="answer">
            <input type="radio" name="answer" id="Brazil" value="Brazil" required><label for="answer">Brazil</label>
            <input type="radio" name="answer" id="Italy" value="Italy"><label for="answer">Italy</label>
            <input type="radio" name="answer" id="Spain" value="Spain"><label for="answer">Spain</label>
            <input type="radio" name="answer" id="Germany" value="Germany"><label for="answer">Germany</label>
            <input type="radio" name="answer" id="France" value="France"><label for="answer">France</label>
            <input type="radio" name="answer" id="Argentina" value="Argentina"><label for="answer">Argentina</label>
         </form>`;
}
/**
 * Generate questions for AFCON game
 * @param {string} afconYear 
 * @param {string} tournament 
 */
function afconQuestions(afconYear, tournament) {
    document.getElementById("year").textContent = afconYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form id = "answer">
            <input type="radio" name="answer" id="Cameroon" value="Cameroon" required><label for="answer">Cameroon</label>
            <input type="radio" name="answer" id="Tunisia" value="Tunisia"><label for="answer">Tunisia</label>
            <input type="radio" name="answer" id="Egypt" value="Egypt"><label for="answer">Egypt</label>
            <input type="radio" name="answer" id="Zambia" value="Zambia"><label for="answer">Zambia</label>
            <input type="radio" name="answer" id="Nigeria" value="Nigeria"><label for="answer">Nigeria</label>
            <input type="radio" name="answer" id="Senegal" value="Senegal"><label for="answer">Senegal</label>
         </form>`;
}
/**
 * Generate questions for Champions league game
 * @param {string} champLeagueYear 
 * @param {string} tournament 
 */
function championsLeagueQuestions(champLeagueYear, tournament) {
    document.getElementById("year").textContent = champLeagueYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form id = "answer">
            <input type="radio" name="answer" id="Barcelona" value="Barcelona" required><label for="answer">Barcelona</label>
            <input type="radio" name="answer" id="Real Madrid" value="Real Madrid"><label for="answer">Real Madrid</label>
            <input type="radio" name="answer" id="Inter Milan" value="Inter Milan"><label for="answer">Inter Milan</label>
            <input type="radio" name="answer" id="Chelsea" value="Chelsea"><label for="answer">Chelsea</label>
            <input type="radio" name="answer" id="Bayern" value="Bayern"><label for="answer">Bayern</label>
         </form>`;
}
/**
 * Generate questions for Ballon d'or game
 * @param {string} ballonDorYear 
 * @param {string} tournament 
 */
function ballonDorQuestions(ballonDorYear, tournament) {
    document.getElementById("year").textContent = ballonDorYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form id="answer">
            <input type="radio" name="answer" id="Lionel Messi" value="Lionel Messi" required><label for="answer">Lionel Messi</label>
            <input type="radio" name="answer" id="Christiano Ronaldo" value="Christiano Ronaldo"><label for="answer">Christiano Ronaldo</label>
            <input type="radio" name="answer" id="Luka Modrić" value="Luka Modrić"><label for="answer">Luka Modrić</label>
            <input type="radio" name="answer" id="Karim Benzema" value="Karim Benzema"><label for="answer">Karim Benzema</label>
            <input type="radio" name="answer" id="Not Awarded" value="Not Awarded"><label for="answer">Not Awarded</label>
        </form>`;
}



