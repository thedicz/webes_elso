let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function play(playerChoice) {
    const choices = ["ko", "papir", "ollo"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        drawScore++;
        document.getElementById('result').innerText = "Döntetlen";
    } 
    else if ((playerChoice === "ko" && computerChoice === "ollo") ||
               (playerChoice === "papir" && computerChoice === "ko") ||
               (playerChoice === "ollo" && computerChoice === "papir")) {
        playerScore++;
        document.getElementById('result').innerText = "Győztél";
    } 
    else {
        computerScore++;
        document.getElementById('result').innerText = "Vesztettél";
        
    }
    document.getElementById('igen').src= "";
    document.getElementById('igen').src= computerChoice+".png";
    
    updateScoreboard();
    
}
function ujra() {
    document.getElementById('igen').src= "";
    document.getElementById('result').innerText="";
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    updateScoreboard();

}
function updateScoreboard() {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-score').innerText = drawScore;
}
