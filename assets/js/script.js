document.addEventListener("DOMContentLoaded", function () {
    const submitUserName = document.getElementById("login");
    submitUserName.addEventListener("click", submit);
    document.getElementById("worldCupBtn").disabled = true;
    document.getElementById("afconBtn").disabled = true;
    document.getElementById("cLeagueBtn").disabled = true;
    document.getElementById("ballonDorBtn").disabled = true;

});
// Here we declare arrays to keep count of the random generated years to avoid repeats.
const wcYears = [];
const afconYears = [];
const cLeagueYears = [];
const ballonDorYears = [];

// Event listeners for our tournaments and submit buttons
const worldCupBtn = document.getElementById("worldCupBtn");
worldCupBtn.addEventListener("click", firstGame);

const afconBtn = document.getElementById("afconBtn");
afconBtn.addEventListener("click", secondGame);

const cLeagueBtn = document.getElementById("cLeagueBtn");
cLeagueBtn.addEventListener("click", thirdGame);

const ballonDorBtn = document.getElementById("ballonDorBtn");
ballonDorBtn.addEventListener("click", fourthGame);

const submitAnswer = document.getElementById("submitAnswer");
submitAnswer.addEventListener("click", checkAnswer);

const submitReview = document.getElementById("reviewbtn");
submitReview.addEventListener("click", reviews);

/**
 * Requires a user enters atleast some text as username before login in.
 */
function submit() {
    const user = document.getElementById("user").value;
    if (user === "") {
        alert("Please input your username before clicking login");
    } else {
        alert("Welcome to Football Champions");
        document.getElementById("username").innerHTML = `${user}`;
        document.getElementById("user").value = "";
        document.getElementById("howToPlay").innerHTML = ``;
        document.getElementById("reviewbtn").disabled = true;

        // Highlighting the tournament we are currently on.
        // Got this code from stack overflow then made a few modifications to fit our need.
        let menu = document.getElementById("gameButtons");
        let btns = menu.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
        firstGame();
    }
}
/**
 * This function will call function will generate random years without repeating for our World Cup questions
 */
function firstGame() {
    const userinfo = document.getElementById("username").textContent;
    if (userinfo === "") {
        alert("You must submit a user name to play");
    } else {
        const tournament = "WorldCup";
        const worldCupYear = Math.floor(Math.random() * 6) * 4 + 2002;
        if (wcYears.length === 6) {
            document.getElementById("submitAnswer").disabled = true;
            document.getElementById("afconBtn").disabled = false;
        } else if (wcYears.includes(worldCupYear)) {
            firstGame();
        } else {
            wcYears.push(worldCupYear);
            worldCupQuestions(worldCupYear, tournament);
        }
    }
}
/**
 * This function will call function will generate random years without repeating for our AFCON questions
 */
function secondGame() {
    document.getElementById("afconBtn").disabled = true;
    document.getElementById("submitAnswer").disabled = false;
    document.getElementById("directives").innerHTML = "";
    const userinfo = document.getElementById("username").textContent;
    if (userinfo === "") {
        alert("You must submit a user name to play");
    } else {
        const tournament = "AFCON";
        const afconYear = Math.floor(Math.random() * 7) * 2 + 2000;
        if (afconYears.length === 7) {
            document.getElementById("cLeagueBtn").disabled = false;
            document.getElementById("submitAnswer").disabled = true;
            document.getElementById("cLeagueBtn").disabled = false;
        } else if (afconYears.includes(afconYear)) {
            secondGame();
        } else {
            afconYears.push(afconYear);
            afconQuestions(afconYear, tournament);
        }
    }
}
/**
 * This function will call function will generate random years without repeating for our Champions Leage questions.
 */
function thirdGame() {
    document.getElementById("cLeagueBtn").disabled = true;
    document.getElementById("submitAnswer").disabled = false;
    document.getElementById("directives").innerHTML = "";
    const userinfo = document.getElementById("username").textContent;
    if (userinfo === "") {
        alert("You must submit a user name to play");
    } else {
        const tournament = "ChampionsLeague";
        const champLeagueYear = Math.floor(Math.random() * 13) + 2010;
        if (cLeagueYears.length === 13) {
            document.getElementById("ballonDorBtn").disabled = false;
            document.getElementById("submitAnswer").disabled = true;
            document.getElementById("ballonDorBtn").disabled = false;
        } else if (cLeagueYears.includes(champLeagueYear)) {
            thirdGame();
        } else {
            cLeagueYears.push(champLeagueYear);
            championsLeagueQuestions(champLeagueYear, tournament);
        }
    }
}
/**
 * This function will call function generate random years without repeating for our Ballon D'or questions 
 */
function fourthGame() {
    document.getElementById("ballonDorBtn").disabled = true;
    document.getElementById("submitAnswer").disabled = false;
    document.getElementById("directives").innerHTML = "";
    const userinfo = document.getElementById("username").textContent;
    if (userinfo === "") {
        alert("You must submit a user name to play");
    } else {
        const tournament = "BallonDor";
        const ballonDorYear = Math.floor(Math.random() * 11) + 2012;
        if (ballonDorYears.length === 11) {
            alert("Done! Let's see how you performed.");
        } else if (ballonDorYears.includes(ballonDorYear)) {
            fourthGame();
        } else {
            ballonDorYears.push(ballonDorYear);
            ballonDorQuestions(ballonDorYear, tournament);
        }
    }
}
/**
 * Verifies a user is not submitting and empty text for review before confirming review submitted
 */
function reviews() {
    const review = document.getElementById("reviews").value;
    if (review === "") {
        document.getElementById("reviewUs").innerHTML = `<p><center>Your review will really help us improve. Please share your experience</center></p>`;
    } else {
        document.getElementById("reviewUs").innerHTML = `<p><center>Review submitted. Thank you.</center></p>`;
        document.getElementById("reviews").value = "";
    }
}
/**
 * Assign answers for each tournament so that after user submits ans answer, we can check if its correct or not
 * @returns champions for a random year and the tournament
 */
function searchAnswer() {
    const tournament = document.getElementById('tournament').innerText;
    const year = document.getElementById('year').innerText;

    if (tournament === "WorldCup") {
        const worldCupChampions = {
            2002: 'Brazil',
            2006: 'Italy',
            2010: 'Spain',
            2014: 'Germany',
            2018: 'France',
            2022: 'Argentina',
        };
        return [(worldCupChampions[year]), "WorldCup"];
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
    } else if (tournament === "ChampionsLeague") {
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
        return [(championsLeagueChamps[year]), "ChampionsLeague"];
    } else if (tournament === "BallonDor") {
        const ballonDorWinner = {
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
        return [(ballonDorWinner[year]), "BallonDor"];
    } else {
        alert(`Tournament Uknown`);
        throw (`Unknown tournament! Aborting....`);
    }
}
/**
 * Compare submitted answer and answer from searchanswer() function then calls a function to increment
 * correct or incorrect answers. Also keep counts of number of questions to give a final score at the end.
 */
function checkAnswer() {
    const userinfo = document.getElementById("username").textContent;
    if (userinfo === "") {
        alert("You must submit a user name to play");
    } else {
        const form = document.getElementById("answer");
        const userAnswer = (form.elements["answer"].value);
        const correctAnswer = searchAnswer();
        const correct = correctAnswer[0];

        if (userAnswer === correctAnswer[0]) {
            document.getElementById("correction").innerText = `Yeeehhh! ${correct} Is the correct Answer`;
            incrementCorrectAnswer();
        } else if (userAnswer === "") {
            document.getElementById("correction").innerText = "Select at least one answer from the answers above.";
            return "User must select answer";
        } else {
            document.getElementById("correction").innerText = `Ohh No!. The correct answer is ${correct}`;
            incrementIncorrectAnswer();
        }

        const correctAnswers = parseInt(document.getElementById("correctAnswers").innerText);
        const incorrectAnswers = parseInt(document.getElementById("incorrectAnswers").innerText);
        const total = correctAnswers + incorrectAnswers;
        const sum = wcYears.length + afconYears.length + cLeagueYears.length + ballonDorYears.length;
        if (sum < 35 && total < 35) {
            // Add supporting images to correct answers
            switch (correctAnswer[0]) {
                case 'Brazil':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/brazil.jpg" alt="Picture of Brazil National Team" width=\'392px\'/>`;
                    break;
                case 'Italy':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/italy.jpg" alt="Picture of Italian National Team" width=\'392px\'/>`;
                    break;
                case 'Spain':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/spain.jpg" alt="Picture of Spains national team" width=\'392px\'/>`;
                    break;
                case 'Germany':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/germany.jpg" alt="Picture of German national team" width=\'392px\'/>`;
                    break;
                case 'France':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/france.jpg" alt="Picture of France national team" width=\'392px\'/>`;
                    break;
                case 'Argentina':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/argentina.jpeg" alt = "Picture of Argentina's national team" width=\'392px\'/>`;
                    break;
                case 'Cameroon':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/cameroon.jpeg" alt="Picture of Cameroon national team" width=\'392px\'/>`;
                    break;
                case 'Egypt':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/egypt.jpg" alt = "Picture of the Egyptian national team" width=\'392px\'/>`;
                    break;
                case 'Tunisia':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/tunisia.jpg" alt="Picture of Tunisias national team" width=\'392px\'/>`;
                    break;
                case 'Zambia':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/zambia.jpg" alt="Picture of Zambian national team" width=\'392px\'/>`;
                    break;
                case 'Senegal':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/senegal.webp" alt="Picture of Senegals national team" width=\'392px\'/>`;
                    break;
                case 'Nigeria':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/nigeria.png" alt = "Picture of nigerians national team" width=\'392px\'/>`;
                    break;
                case 'Barcelona':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/barcelona.jpg" alt= "Picture of Barcelonas team" width=\'392px\'/>`;
                    break;
                case 'Bayern':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/bayern.jpg" alt="Picture of Bayerns team" width=\'392px\'/>`;
                    break;
                case 'Chelsea':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/chelsea.jpg" alt = "Picture of Chelseas football team" width=\'392px\'/>`;
                    break;
                case 'Inter Milan':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/inter-milan.jpg" alt="Picture of Milans team" width=\'392px\'/>`;
                    break;
                case 'Liverpool':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/liverpool.jpg" alt = "Picture of Liverpools team" width=\'392px\'/>`;
                    break;
                case 'Real Madrid':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/real-madrid.jpg" alt = Picture of Real Madrids team" width=\'392px\'/>`;
                    break;
                case 'Lionel Messi':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/lionel-messi.jpg" alt="Picture of Lionel Messi with ballon d'or" width=\'392px\'>`;
                    break;
                case 'Christiano Ronaldo':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/christiano.jpg" alt = "Picture of Christiano Ronaldo with ballon d'or" width=\'392px\'/>`;
                    break;
                case 'Karim Benzema':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/benzema.jpg" alt="Picture of Benzema with ballon d'or" width=\'392px\'/>`;
                    break;
                case 'Luka Modrić':
                    document.getElementById("champions-image").innerHTML = `<img src="assets/images/luka.jpg" alt = "Picture of Modric with ballon d'or" width=\'392px\'/>`;
                    break;
                default:
                    document.getElementById("champions-image").innerHTML = `NOT AWARDED`;
            }
            if (correctAnswer[1] === "WorldCup") {
                firstGame();
            } else if (correctAnswer[1] === "AFCON") {
                secondGame();
            } else if (correctAnswer[1] === "ChampionsLeague") {
                thirdGame();
            } else {
                fourthGame();
            }
        } else {
            const pass = parseInt(document.getElementById("correctAnswers").innerText);
            const fail = parseInt(document.getElementById("incorrectAnswers").innerText);
            const unanswered = 35 - (pass + fail);
            const finalScore = parseInt((pass * 100) / 35);
            if (pass > fail) {
                document.getElementById("questions").innerHTML = `<br> <h2>You had ${pass} answer(s) correct, ${fail} incorrect answer(s)
                and ${unanswered} unanswered questions.
                <br>
                <br>
                 Final Score: ${finalScore}%</h2>
                <br>
                <h3><a href="index.html"> Play Again </a>`;
                document.getElementById("correctionArea").innerHTML = "";

            } else {
                document.getElementById("questions").innerHTML = `<br> <h2>You had ${pass} answer(s) correct, ${fail} incorrect answer(s)
                and ${unanswered} unanswered questions.
                <br>
                <br>
                 Final Score: ${finalScore}%</h2>
                <br>
                <h3><a href="index.html"> Play Again </a>`;
                document.getElementById("correctionArea").innerHTML = "";
            }
        }
        if (sum === 6) {
            document.getElementById("directives").innerHTML = `<h2><center>Click on AFCON image to continue.<br></center></h2>`;

        } else if (sum === 13) {
            document.getElementById("directives").innerHTML = `<h2><center>Click on CLeague image to continue.<br></center></h2>`;

        } else if (sum === 26) {
            document.getElementById("directives").innerHTML = `<h2><center>Click on Ballon D'or image to continue.<br></center></h2>`;

        } else if (sum === 35) {
            return;
        } else {
            document.getElementById("directives").innerHTML = "";
        }
    }
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
 * Generate questions for world cup game using some randomly generated years.
 * @param {string} worldCupYear 
 * @param {string} tournament 
 */
function worldCupQuestions(worldCupYear, tournament) {
    document.getElementById("year").textContent = worldCupYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form name="suggestedAnswers" id="answer">
            <input type="radio" name="answer" id="Brazil" value="Brazil" required><label for="answer">Brazil</label>
            <input type="radio" name="answer" id="Italy" value="Italy"><label for="answer">Italy</label>
            <input type="radio" name="answer" id="Spain" value="Spain"><label for="answer">Spain</label>
            <input type="radio" name="answer" id="Germany" value="Germany"><label for="answer">Germany</label>
            <input type="radio" name="answer" id="France" value="France"><label for="answer">France</label>
            <input type="radio" name="answer" id="Argentina" value="Argentina"><label for="answer">Argentina</label>
         </form>`;
}
/**
 * Generate questions for AFCON game using some randomly generated years
 * @param {string} afconYear 
 * @param {string} tournament 
 */
function afconQuestions(afconYear, tournament) {
    document.getElementById("year").textContent = afconYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form name="suggestedAnswers" id = "answer">
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
        `<form name="suggestedAnswers" id = "answer">
            <input type="radio" name="answer" id="Barcelona" value="Barcelona" required><label for="answer">Barcelona</label>
            <input type="radio" name="answer" id="Real Madrid" value="Real Madrid"><label for="answer">Real Madrid</label>
            <input type="radio" name="answer" id="Inter Milan" value="Inter Milan"><label for="answer">Inter Milan</label>
            <input type="radio" name="answer" id="Chelsea" value="Chelsea"><label for="answer">Chelsea</label>
            <input type="radio" name="answer" id="Liverpool" value="Liverpool"><Label for="answer">Liverpool</Label>
            <input type="radio" name="answer" id="Bayern" value="Bayern"><label for="answer">Bayern</label>
         </form>`;
}
/**
 * Generate questions for Ballon d'or game using some randomly generated years
 * @param {string} ballonDorYear 
 * @param {string} tournament 
 */
function ballonDorQuestions(ballonDorYear, tournament) {
    document.getElementById("year").textContent = ballonDorYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML =
        `<form name="suggestedAnswers" id="answer">
            <input type="radio" name="answer" id="Lionel Messi" value="Lionel Messi" required><label for="answer">Lionel Messi</label>
            <input type="radio" name="answer" id="Christiano Ronaldo" value="Christiano Ronaldo"><label for="answer">Christiano Ronaldo</label>
            <input type="radio" name="answer" id="Luka Modrić" value="Luka Modrić"><label for="answer">Luka Modrić</label>
            <input type="radio" name="answer" id="Karim Benzema" value="Karim Benzema"><label for="answer">Karim Benzema</label>
            <input type="radio" name="answer" id="Not Awarded" value="Not Awarded"><label for="answer">Not Awarded</label>
        </form>`;
}


