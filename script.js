var fight = function () {
    var gameChoices = ["Rock", "Paper", "Scissors"]; // pre defined
    var roundNum = 0;
    var playerTally = 0;
    var botTally = 0;
    var playerChoice = "";
    var botChoice = "";
    var iterate = true; 
  
    var singleOr3GameMode = prompt("Game Mode: Single or Three", "Type game mode" ).toUpperCase(); // variables
  
    var oneRoundGame = function (playerMove, botMove) { // one round game
      playerMove = prompt("Rock, Paper, Scissors", "Type choice").toUpperCase();
      botMove = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  
      switch (playerMove) {
        case "ROCK":
          if (botMove == "Rock") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Tied Game");
            break;
          } 
          if (botMove == "Paper") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Bot Wins");
            break;
          } 
          if (botMove == "Scissors") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Player Wins");
            break;
          }
  
        case "PAPER":
          if (botMove == "Rock") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Player Wins");
            break;
          }
          if (botMove == "Paper") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Tied Game");
            break;
          }
          if (botMove == "Scissors") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Bot Wins");
            break;
          }
  
        case "SCISSORS":
          if (botMove == "Rock") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Bot Wins");
            break;
          } 
          if (botMove == "Paper") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Player Wins");
            break;
          }
          if (botMove == "Scissors") {
            alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
            alert("Tied Game");
            break;
          }
      }
    }
  
    var threeRoundGame = function (playerMove, botMove) { // three round game, tallies needed
      while (iterate) {
        playerMove = prompt("Rock, Paper, Scissors", "Type choice").toUpperCase();
        botMove = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  
        switch (playerMove) {
          case "ROCK":
            if (botMove == "Rock") {
              ++roundNum;
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: draw (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
            if (botMove == "Paper") {
              ++roundNum;
              ++botTally;
  
              if (playerTally == 2 || botTally == 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: bot wins (user: ${playerTally}, bot: ${botTally}), game ends.`);
                iterate = false;
                break;
              }
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: bot wins (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
            if (botMove == "Scissors") {
              ++roundNum;
              ++playerTally;
  
              if (playerTally == 2 || botTally == 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: user wins (user: ${playerTally}, bot: ${botTally}), game ends.`);
                iterate = false;
                break;
              }
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: user wins (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
          case "PAPER":
            if (botMove == "Rock") {
              ++roundNum;
              ++playerTally;
  
              if (playerTally == 2 || botTally == 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: user wins (user: ${playerTally}, bot: ${botTally}), game ends.`);
                iterate = false;
                break;
              }
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: user wins (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
            if (botMove == "Paper") {
              ++roundNum;
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: draw (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
            if (botMove == "Scissors") {
              ++roundNum;
              ++botTally;
  
              if (playerTally == 2 || botTally == 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: bot wins (user: ${playerTally}, bot: ${botTally}), game ends.`);
                iterate = false;
                break;
              }
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: bot wins (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
          case "SCISSORS":
            if (botMove == "Rock") {
              ++roundNum;
              ++botTally;
  
              if (playerTally == 2 || botTally == 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: bot wins (user: ${playerTally}, bot: ${botTally}), game ends.`);
                iterate = false;
                break;
              }
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: bot wins (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            } 
  
            if (botMove == "Paper") {
              ++roundNum;
              ++playerTally;
  
              if (playerTally == 2 || botTally == 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: user wins (user: ${playerTally}, bot: ${botTally}), game ends.`);
                iterate = false;
                break;
              }
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: user wins (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            }
  
            if (botMove == "Scissors") {
              ++roundNum;
  
              if (playerTally < 2 && botTally < 2) {
                alert(`Player move: ${playerMove}, Bot move: ${botMove}.`);
                alert(`Round ${roundNum}: draw (user: ${playerTally}, bot: ${botTally})`);
                continue;
              }
            }
  
        }
      }
    }
  
    if (singleOr3GameMode == "SINGLE") { // runs function dependent on user decision
      return oneRoundGame(playerChoice, botChoice);
    }
  
    if (singleOr3GameMode == "THREE") {
      return threeRoundGame(playerChoice, botChoice);
    }
  }
  
  do { // executes once 
    fight();
  } while (confirm("Do you want to play again."));