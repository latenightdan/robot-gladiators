


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["trash", "uncool dork", "scumbag"];
var enemyHealth = 20;
var enemyAttack = 12;

//todo: add start and end game functions. in end game alert player of stats, ask if they want to play again. if yes, start game. 
//after skip or defeat, ask player if they want to shop. if not, continue as normal. if yes, call shop function. 
//in shop ask player if they want to refil health, upgrade, or leave the shop
//refill subract money points from player to increase health
//if leave, alert goodbye and exit
//if invalid option, call shop again


var fight = function(enemyName) { 
     
    while(enemyHealth > 0 && playerHealth >0) {
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

if (confirmSkip) {
playerMoney = playerMoney - 2;
window.alert(playerName + " has decided to skip this fight. Goodbye! " + playerMoney);

break;
}
}
  var damage = randomNumber(playerAttack - 3, playerAttack);

  enemyHealth = Math.max(0, enemyHealth - damage);
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );
  window.alert("attack = " + damage);

  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');
    playerMoney = Math.max(0, playerMoney - enemyAttack);
    break;
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }
var damage = randomNumber(enemyAttack - 3, enemyAttack);
playerHealth = Math.max(0, playerHealth - damage);
  window.alert("attack = " + damage);
  console.log(
    enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
  );

  if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
    break;
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
}
}; 

var startGame = function(){
for (var i = 0; i < enemyNames.length; i++) {
    // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10; 
  

      if(playerHealth > 0){
       window.alert("welcome to the fuckin goon squad" + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            if(playerHealth > 0 && i < enemyNames.length -1){
                var storeConfirm = window.confirm("fight over. shop????");

                if(storeConfirm){
                    shop();
                }
                
            }
        }
        else{
            window.alert("you died");
        }
    }
    endGame();
};
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
    } else {
      window.alert("You've lost your robot in battle!");
    }
  
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');
  
    if (playAgainConfirm) {
      startGame();
    } else {
      window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
  };

  var shop = function(){
      var shopOptionPrompt = window.prompt("What ya wanna do? REFILL ya health? UPGRADE ya attack? or get out? Please enter REFILL, UPGRADE, or LEAVE");
      switch (shopOptionPrompt){
          case "refill":
          case"REFILL":
              if(playerMoney >=7){
              window.alert("Refilling player's health by 20 for 7 dollars");
              playerHealth = playerHealth +20;
              playerMoney = playerMoney - 7;
              }
              else{
                window.alert("you don't have enough money! You're a FUGLY SCANK");
            }
              break;
          case "upgrade":
              case "UPGRADE":
              if (playerMoney >= 7){
              window.alert("upgrading player's attack by 6 for 7 dollars.");
              playerAttack = playerAttack + 6;
              playerMoney = playerMoney - 7;
            }
            else{
                window.alert("you don't have enough money! You're a FUGLY SCANK");
            }
              break;
          case "leave":
              case "LEAVE":
              window.alert("leaving the store");
              break;
          default:
              window.alert("you did not pick a valid option. Try again.");
              
              shop();
              break;
      }
  }

  var randomNumber = function(min, max)
  {
      var value = Math.floor(Math.random() * (max - min + 1)) + min;

      return value;
  }
startGame();







