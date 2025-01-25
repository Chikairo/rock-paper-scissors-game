const randomNumber = Math.random();

let computerMove = "";

let h2 = document.querySelector("h2");

let scoreSheet = document.querySelector(".scoresheet");

let yourPlay = document.querySelector(".yourplay");

let computerPlay = document.querySelector(".computerplay");

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function computerChoice() {
    
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1 ) {
        computerMove = "scissors";
    }
};

function playGame(playerChoice) {
    let result = "";

    if (playerChoice === "rock") {

        if (computerMove === "rock") {
            result = "Its a tie";
        } else  if (computerMove === "paper") {
            result = "You lose";
        } else  if (computerMove === "scissors") {
            result = "You win";
        }

    } else if (playerChoice === "paper") {

        if (computerMove === "rock") {
            result = "You win";
        } else  if (computerMove === "paper") {
            result = "Its a tie";
        } else  if (computerMove === "scissors") {
            result = "You lose";
        }

    } else if (playerChoice === "scissors") {
        if (computerMove === "rock") {
            result = "You lose";
        } else  if (computerMove === "paper") {
            result = "You win";
        } else  if (computerMove === "scissors") {
            result = "Its a tie";
        }

    }

    if (result === "You win") {
        score.wins += 1;
    } else if (result === "You lose") {
        score.losses += 1;
    } else if (result === "Its a tie") {
        score.ties += 1;
    }
   
    

    h2.innerHTML = `${result}`;

    yourPlay.innerHTML = `You <img src="./assets/image/${playerChoice}.png">`;

    computerPlay.innerHTML = `<img src="./assets/image/${computerMove}.png"> Computer`;
    
    scoreSheet.innerHTML = `Wins: ${score.wins}
    Losses: ${score.losses}
    Ties: ${score.ties}`;

    localStorage.setItem('score', JSON.stringify(score));
}

const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", function printResult() {
    computerChoice();
    playGame("rock");
});

const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", function printResult() {
    computerChoice();
    playGame("paper");
});

const btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", function printResult() {
    computerChoice();
    playGame("scissors");
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    scoreSheet.innerHTML = `Wins: ${score.wins}
    Losses: ${score.losses}
    Ties: ${score.ties}`;

    h2.innerHTML = "Make your Move 😊";

    yourPlay.innerHTML = "";
    computerPlay.innerHTML = "";

    localStorage.removeItem('score');
});
