let yourScore = 0
let computerScore = 0

function game(input) {
    let computer = randComputerAns()
    console.log("computer chose:" + computer)
    console.log("user chose:" + input)
    if (computer == input) {
        document.getElementById("gameWinner").innerText = "Winner: Tie"
        yourScore += 1
        computerScore += 1
    }
    if (input == "rock" && computer == "paper") {
        document.getElementById("gameWinner").innerText = "Winner: Computer"
        computerScore += 1
    } 
    if (input == "rock" && computer == "scissors") {
        document.getElementById("gameWinner").innerText = "Winner: You"
        yourScore += 1
    }
    if (input == "paper" && computer == "scissors") {
        document.getElementById("gameWinner").innerText = "Winner: Computer"
        computerScore += 1
    }
    if (input == "paper" && computer == "rock") {
        document.getElementById("gameWinner").innerText = "Winner: You"
        yourScore += 1
    }
    if (input == "scissors" && computer == "rock") {
        document.getElementById("gameWinner").innerText = "Winner: Computer"
        computerScore += 1
    }
    if (input == "scissors" && computer == "paper") {
        document.getElementById("gameWinner").innerText = "Winner: You"
        yourScore += 1
    }

    document.getElementById("your-score").innerText = "Your score: " + yourScore
    document.getElementById("your-choice").innerText = "You chose: " + input
    document.getElementById("computer-score").innerText = "Computer score: " + computerScore
    document.getElementById("computer-choice").innerText = "Computer chose: " + computer
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
