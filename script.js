let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let userScoreShow = document.querySelector("#user-score");
let computerScoreShow = document.querySelector("#computer-score");
let resultShow = document.querySelector("#msg");

let userChoiseStone = document.querySelector(".userStone");
let userChoisePaper = document.querySelector(".userPaper"); 
let userChoiseScissors = document.querySelector(".userScissors"); 
let computerChoiseStone = document.querySelector(".computerStone");
let computerChoisePaper = document.querySelector(".computerPaper");
let computerChoiseScissors = document.querySelector(".computerScissors");


const genarateComputerChoise = () => {
    const option = ["Stone", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

const winner = (userWin, userChoise, computerChoise) => {

    if (userWin) {
        userScore++;
        userScoreShow.innerText = userScore;
        resultShow.innerText = `Congratulation! You Win! Your ${userChoise} Beats ${computerChoise}.`;
        resultShow.style.backgroundColor = "green";
        if(userChoise === "Stone"){
            userChoiseStone.style.display = "block";
        }
        else if(userChoise === "Paper"){
            userChoisePaper.style.display = "block";
        }
        else{
            userChoiseScissors.style.display = "block"
        }
        if(computerChoise === "Stone"){
            computerChoiseStone.style.display = "block";
        }
        else if(computerChoise === "Paper"){
            computerChoisePaper.style.display = "block";
        }
        else{
            computerChoiseScissors.style.display = "block"
        }



    } else {
        computerScore++;
        computerScoreShow.innerText = computerScore;
        resultShow.innerText = `You lose! Please Try Again. ${computerChoise} Beats Your ${userChoise}.`;
        resultShow.style.backgroundColor = "red";
        if(userChoise === "Stone"){
            userChoiseStone.style.display = "block";
        }
        else if(userChoise === "Paper"){
            userChoisePaper.style.display = "block";
        }
        else{
            userChoiseScissors.style.display = "block"
        }
        if(computerChoise === "Stone"){
            computerChoiseStone.style.display = "block";
        }
        else if(computerChoise === "Paper"){
            computerChoisePaper.style.display = "block";
        }
        else{
            computerChoiseScissors.style.display = "block"
        }
    }
}


const drawGame = (userChoise,computerChoise) => {
    resultShow.innerText = `Game is Draw! You Both are Choose ${userChoise}.`;
    resultShow.style.backgroundColor = "black";
    if(userChoise === "Stone"){
        userChoiseStone.style.display = "block";
    }
    else if(userChoise === "Paper"){
        userChoisePaper.style.display = "block";
    }
    else{
        userChoiseScissors.style.display = "block"
    }
    if(computerChoise === "Stone"){
        computerChoiseStone.style.display = "block";
    }
    else if(computerChoise === "Paper"){
        computerChoisePaper.style.display = "block";
    }
    else{
        computerChoiseScissors.style.display = "block"
    }


}
const playGame = (userChoise) => {
    const computerChoise = genarateComputerChoise();
    userChoiseStone.style.display = "none";
    userChoisePaper.style.display = "none";
    userChoiseScissors.style.display = "none";

    computerChoiseStone.style.display = "none";
    computerChoisePaper.style.display = "none";
    computerChoiseScissors.style.display = "none";
    if (userChoise === computerChoise) {
        drawGame(userChoise,computerChoise);

    } else {
        let userWin = true;
        if (userChoise === "Stone") {
            if (computerChoise === "Paper") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        } else if (userChoise === "Paper") {
            if (computerChoise === "Scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else {
            if (computerChoise === "Stone") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        winner(userWin, userChoise, computerChoise);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiseId = choice.getAttribute("id")
        playGame(choiseId);
    });
});