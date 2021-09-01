


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["trash", "uncool dork", "scumbag"];
var enemyHealth = 50;
var enemyAttack = 12;




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
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );

  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');
    playerMoney = playerMoney + 20;
    break;
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }

  playerHealth = playerHealth - enemyAttack;
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

for (var i = 0; i < enemyNames.length; i++) {
      if(playerHealth > 0){
       window.alert("welcome to the fuckin goon squad" + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else{
            window.alert("you died");
        }
    }






