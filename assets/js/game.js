var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };


  var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );

  window.alert("attack = " + damage);

  if (enemy.health <= 0) {
    window.alert(enemy.name + ' has died!');
    playerInfo.money = playerInfo.money + 20;
    break;
  } else {
    window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
  }
var damage = randomNumber(enemy.attack - 3, enemy.attack);
playerInfo.health = Math.max(0, playerInfo.health - damage);
  window.alert("attack = " + damage);
  console.log(
    enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
  );

  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + ' has died!');
    break;
  } else {
    window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
  }
}
}; 

var startGame = function(){

    playerInfo.reset();
for (var i = 0; i < enemyInfo.length; i++) {
      if(playerInfo.health > 0){
       window.alert("welcome to the fuckin goon squad" + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if(playerInfo.health > 0 && i < enemyInfo.length -1){
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
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
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
              
             playerInfo.refillHealth();
              
              
              break;
          case "upgrade":
              case "UPGRADE":

           playerInfo.upgradeAttack();
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

  

  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    }
  };
  
  // enemy information
  var enemyInfo = [
    {
      name: 'Roborto',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Amy Android',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Robo Trumble',
      attack: randomNumber(10, 14)
    }
  ];
  
  console.log(enemyInfo);
  console.log(enemyInfo[0]);
  console.log(enemyInfo[0].name);
  console.log(enemyInfo[0]['attack']);
  
  /* END GAME INFORMATION / VARIABLES */
  
  /* RUN GAME */
  startGame();
  



