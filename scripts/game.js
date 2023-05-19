let yourScore = 0
let computerScore = 0

function game(input) {
    let computer = randComputerAns()
    console.log("computer chose:" + computer)
    console.log("user chose:" + input)
    if (computer == input) {
        console.log("draw")
        yourScore += 1
        computerScore += 1
    }
    if (input == "rock" && computer == "paper") {
        console.log("compter wins")
        computerScore += 1
    } 
    if (input == "rock" && computer == "scissors") {
        console.log("user wins")
        yourScore += 1
    }
    if (input == "paper" && computer == "scissors") {
        console.log("computer wins")
        computerScore += 1
    }
    if (input == "paper" && computer == "rock") {
        console.log("user wins")
        yourScore += 1
    }
    if (input == "scissors" && computer == "rock") {
        console.log("computer wins")
        computerScore += 1
    }
    if (input == "scissors" && computer == "paper") {
        console.log("user wins")
        yourScore += 1
    }

    document.getElementById("your-score").innerText = "your score:" + yourScore
    document.getElementById("computer-score").innerText = "computer score:" + computerScore
}  

function randComputerAns() {
    let computerAns = Math.floor(Math.random() *3)+ 1;
    if (computerAns == 1) {
        return "rock"
    } 
    if (computerAns == 2) {
        return "paper"
    } 
    if (computerAns == 3) {
        return "scissors"
    } 
}

