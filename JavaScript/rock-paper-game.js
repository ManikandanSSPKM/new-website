let Playtime = confirm("Shall we play Rock, Paper or Scissors?");
if (Playtime) {
  let player = prompt("Choose which u want from rock , paper , scissors");
  if (player) {
    let Man = player.trim().toLowerCase();
    if (
      Man === "rock" ||
      Man === "paper" ||
      Man === "scissors"
    ) {
      let computerval = Math.floor(Math.random()*3+1);
      let computer = 
        computerval === 1 
        ? "rock" 
        : computerval === 2
        ? "paper" 
        : "scissors" ;

      let result =  
        Man === computer 
        ? "Tie!, u both chose same..." 
        : Man === 'rock' && computer === 'paper' 
        ? `Man = ${Man}\ncomputer = ${computer}\nComputer Wins...` 
        : Man === 'paper' && computer === 'scissors' 
        ? `Man = ${Man}\ncomputer = ${computer}\nComputer Wins...` 
        : Man === 'scissors' && computer === 'rock' 
        ? `Man = ${Man}\ncomputer = ${computer}\nComputer Wins...` 
        : `Man = ${Man}\ncomputer = ${computer}\nPlayer Wins...` ;
      
      alert(result);
      let playagain = confirm("Do you want to play Again?");
      playagain ? location.reload() : alert("OK, Thanks for playing!!!");      
    } 
    else {
      alert("You have chosed other than rock, paper or scissors. So, type correctly");
      location.reload();    
    }
  }
  else {
    alert("I think you have changed ur mind, That's Fine...");
  }
}
else {
  alert("Maybe, next time...");
}