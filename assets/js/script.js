document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    /** Setting even listeners to capture button clicks then call the corresponding functions */
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("class") === "login") {
                let user = document.getElementById("user").value;
                if (user === "") {
                    alert("Please input your username before clicking login");
                } else {
                    alert("User Logged inn.");
                }
            } else if (this.getAttribute("class") === "signup") {
                let user = document.getElementById("newUser").value;
                if (user === "") {
                    alert("Please enter your username");
                } else {
                    alert("Thank you! Select your favourite competition and test your knowledge now.");
                }
            } else if (this.getAttribute("class") === "submit-answer") {
                checkAnswer();
            } else if (this.getAttribute("class") === "submit-review") {
                let review = document.getElementById("reviews").value;
                if (review === "") {
                    alert("You are trying to submit an empty feedback.");


                } else {
                    alert("Review submitted.");
                }

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

    let worldCupYear = Math.floor(Math.random() * 6) * 4 + 2002;
    let afconYear = Math.floor(Math.random() * 7) * 2 + 2000;
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
/** Assign answers for each tournament so that after user submits ans answer, we can check if its correct or not */
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
            2013: 'Bayern',
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
        return [(ballonDorWinner[year]), "ballon-d'or"];
    } else {
        alert(`Tournament Uknown`);
        throw (`Unknown tournament! Aborting....`);
    }

}
/** Compare submitted answer and answer from searchanswer() function */
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correctAnswer = searchAnswer();

    if (userAnswer === correctAnswer[0]) {
        alert("Yeah!!! You got it right.");
        document.getElementById("correction").innerText = correctAnswer[0];
        incrementCorrectAnswer();
    } else if (userAnswer === "-Select Answer-") {
        alert("Please select an answer from the drop down list");
        let game = button.getAttribute("data-type");
        runGame(game);
    } else {
        alert("Oh no... that is not the correct answer.");
        document.getElementById("correction").innerText = correctAnswer[0];
        incrementIncorrectAnswer();
    }


    /** Add supporting images to correct answers */
    switch (correctAnswer[0]) {
        case 'Brazil':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/brazil.jpg" alt="Picture of Brazil National Team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Italy':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/italy.jpg" alt="Picture of Italian National Team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Spain':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/spain.jpg" alt="Picture of Spains national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Germany':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/germany.jpg" alt="Picture of German national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'France':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/france.jpg" alt="Picture of France national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Argentina':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/argentina.jpg" alt = "Picture of Argentines national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Cameroon':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/cameroon.jpeg" alt="Picture of Cameroon national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Egypt':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/egypt.jpg" alt = "Picture of the Egyptian national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Tunisia':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/tunisia.jpg" alt="Picture of Tunisias national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Zambia':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/zambia.jpg" alt="Picture of Zambian national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Senegal':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/senegal.webp" alt="Picture of Senegals national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Nigeria':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/nigeria.png" alt = "Picture of nigerians national team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Barcelona':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/barcelona.jpg" alt= "Picture of Barcelonas team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Bayern':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/bayern.jpg" alt="Picture of Bayerns team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Chelsea':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/chelsea.jpg" alt = "Picture of Chelseas football team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Inter Milan':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/inter-milan.jpg" alt="Picture of Milans team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Liverpool':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/liverpool.jpg" alt = "Picture of Liverpools team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Real Madrid':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/real-madrid.jpg" alt = Picture of Real Madrids team" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Lionel Messi':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/lionel-messi.jpg" alt="Picture of Lionel Messi with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Cristiano Ronaldo':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/christiano.jpg" alt = "Picture of Christiano Ronaldo with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Karim Benzema':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/benzema.jpg" alt="Picture of Benzema with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        case 'Luka Modrić':
            document.getElementById("champions-image").innerHTML = `<img src="../assets/images/luka.jpg" alt = "Picture of Modric with ballon d'or" width=\'392px\' height=\'175px\'/>`;
            break;
        default:
            document.getElementById("champions-image").innerHTML = `NOT AWARDED`;

    }

    runGame(correctAnswer[1]);

}
/** Increment correct and incorrect answer counts after user submits answer */
function incrementCorrectAnswer() {
    let currentScore = parseInt(document.getElementById("correctAnswers").innerText);
    document.getElementById("correctAnswers").innerText = ++currentScore;
}

function incrementIncorrectAnswer() {
    let currentScore = parseInt(document.getElementById("incorrectAnswers").innerText);
    document.getElementById("incorrectAnswers").innerText = ++currentScore;
}

/** Generate questions for world cup quiz */
function worldCupQuestions(worldCupYear, tournament) {
    document.getElementById("year").textContent = worldCupYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML = `<select id="answer" name="answer">
    <option value = "-Select Answer-">-Select Answer-</option>
    <option value="Brazil">Brazil</option>
    <option value="Italy">Italy</option>
    <option value="Spain">Spain</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
    <option value="Argentina">Argentina</option>
    </select>`;
}
/** Generate questions for AFCON quiz */
function afconQuestions(afconYear, tournament) {
    document.getElementById("year").textContent = afconYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML = `<select id = "answer" name = "answer">
    <option value = "-Select Answer-">-Select Answer-</option>
    <option value = "Cameroon">Cameroon</option>
    <option value = "Tunisia">Tunisia</option>
    <option value = "Egypt">Egypt</option>
    <option value = "Zambia">Zambia</option>
    <option value = "Nigeria">Nigeria</option>
    <option value = "Senegal">Senegal</option>
    </select>`;

}
/** Generate questions for Champions league quiz */
function championsLeagueQuestions(champLeagueYear, tournament) {
    document.getElementById("year").textContent = champLeagueYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML = `<select id = "answer" name = "answer">
    <option value = "-Select Answer-">-Select Answer-</option>
    <option value = "Barcelona">Barcelona</option>
    <option value = "Real Madrid">Real Madrid</option>
    <option value = "Inter Milan">Inter Milan</option>
    <option value = "Chelsea">Chelsea</option>
    <option value = "Bayern">Bayern</option>
    </select>`;
}
/** Generate questions for Ballon d'or quiz */
function ballonDorQuestions(ballonDorYear, tournament) {
    document.getElementById("year").textContent = ballonDorYear;
    document.getElementById("tournament").textContent = tournament;
    document.getElementById("answers").innerHTML = `<select id = "answer" name = "answer">
    <option value = "-Select Answer-">-Select Answer-</option>
    <option value = "Lionel Messi">Lionel Messi</option>
    <option value = "Christiano Ronaldo">Christiano Ronaldo</option>
    <option value = "Luka Modrić">Luka Modrić</option>
    <option value = "Karim Benzema">Karim Benzema</option>
    <option value = "Not Awarded">Not Awarded</option>
    </select>`;
}

