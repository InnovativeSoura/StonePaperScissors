let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result-msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
    }else{
        computerScore++;
        compScorepara.innerText = computerScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `Computer Won! ${compChoice} beats ${userChoice}`;
    }

}

const drawGame = () =>{
    // console.log("Game was draw.");
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Match was draw!"
}


const playGame = (userChoice)=>{
    // console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});