let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".box");
let message = document.querySelector("h2")
let myscore = document.querySelector("#yourScore")
let notmyscore = document.querySelector("#compScore")
let messagebox = document.querySelector(".MessageBox")

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const drawGame = () => {
    message.innerText = "Match Draw"
    messagebox.style.backgroundColor = "blue"
    
}


const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        message.innerText = `your ${userchoice} beats ${compchoice}`
        messagebox.style.backgroundColor = "green"
        userscore++;
        myscore.innerText = userscore
    }
    else {
        message.innerText = `your ${userchoice} is lost to ${compchoice}`
        messagebox.style.backgroundColor = "red"
        compscore++;
        notmyscore.innerText = compscore
    }
}

const playgame = (userchoice) => {
    const compchoice = genCompChoice()
    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        }
        else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})

