var elementID;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(cardNumber) {
  elementID = document.getElementById(cardNumber);
}
//get elements needed
var getPTxt = document.getElementById("dragPText");
var getOTxt = document.getElementById("dragOText");
var playerLife = document.getElementById("playerSpan");
var opponentLife = document.getElementById("opponentSpan");
var attackBtn = document.getElementById("attackBtn");

(function randomHP() {
  for (i = 1; i < 5; i++) {
    hpLife = Math.floor(Math.random() * 50) + 120; //Random HP Health Points
    $("#char" + i).text("HP: " + hpLife)[0]; // It means JQuery index
    $(".sel" + i).attr("charLife", hpLife)[0]; // I CAN USE the [0] to do many many things
  }
})();

// PLAYER AREA DROPOFF
var isPlayerDivEmpty = true;
var playerInitHP;
function playerDrop(ev) {
  //is equal only to my img  === elementID
  ev.preventDefault();
  document.getElementById("player").removeAttribute("ondrop");
  var playerParent = elementID.parentNode; //get the parent of the img (elementID) being
  playerInitHP = parseInt($(elementID).attr("charLife"));
  console.log(
    "Starting span life of player is " + parseInt($(elementID).attr("charLife"))
  );
  if (isPlayerDivEmpty) {
    getPTxt.setAttribute("style", "display:none"); //hide the Drag message instruction
    playerLife.setAttribute("style", "visibility: visible"); //Display the character life span
    playerParent.setAttribute("style", "visibility: hidden"); //hide the parent HTML
    document.getElementById("player").appendChild(elementID); //append the draggable character
    document.getElementById("playerSpan").innerHTML = playerInitHP;
    elementID.setAttribute("style", "margin-left:50px"); //adjust the character margin
    // console.log ("dropping " + elementID.alt);
    isPlayerDivEmpty = false;
  }
  return playerInitHP; //I am returning the starting HP Life for the PLAYER
}

//OPPONENT AREA DROPOFF
var isOpponentDiv = true;
var opponentInitHP;

function oppDrop(ev) {
  document.getElementById("opponent").removeAttribute("ondrop");
  ev.preventDefault();
  opponentInitHP = parseInt($(elementID).attr("charLife"));
  console.log("Starting span life of opponent is " + opponentInitHP);
  var opponentParent = elementID.parentNode; //get the parent of whatever
  if (isOpponentDiv) {
    getOTxt.setAttribute("style", "display:none");
    opponentLife.setAttribute("style", "visibility: visible");
    attackBtn.setAttribute("style", "visibility: visible");
    document.getElementById("opponent").appendChild(elementID);
    document.getElementById("opponentSpan").innerHTML = opponentInitHP;
    elementID.setAttribute("style", "margin-left:25px");
    opponentParent.setAttribute("style", "visibility: hidden");
    // console.log ("dropping " + elementID.alt);
    isOpponentDiv = false;
  }
  return opponentInitHP; //I am returning the starting HP Life for the OPPONENT
}

var playerAttack, enemyAttack;
//Here is my object to use for attacks
var character = {
  punch: 7, //0
  kick: 15, //1
  combo: 20, //2
  doublecombo: 30 //3
};

//Get me an attack
function getAtackMode() {
  var hereisyourAttack = Math.floor(Math.random() * 4); // 0 -2
  return hereisyourAttack;
}

//GLOBAL VARIABLES DECLARATION
var attackModeForPlayer, attackModeForEnemy;
var newHPValuePlayer, newHPValueEnemy, ongoingOpponentHP, ongoingPlayerHP;
var firstClickRead = true; //This is the flag for the first time
$("#attack").on("click", function() {
  playerAttack = getAtackMode(); //0
  enemyAttack = getAtackMode(); //1
  switch (playerAttack) {
    case 0:
      attackModeForPlayer = character.punch;
      console.log("The player attack was a punch : " + attackModeForPlayer);
      break;
    case 1:
      attackModeForPlayer = character.kick;
      console.log("The player attackwas a kick : " + attackModeForPlayer);
      break;
    case 2:
      attackModeForPlayer = character.combo;
      console.log("The player attack was a combo : " + attackModeForPlayer);
      break;
    case 3:
      attackModeForPlayer = character.doublecombo;
      console.log(
        "The player attack was a doublecombo : " + attackModeForPlayer
      );
      break;
  }
  switch (enemyAttack) {
    case 0:
      attackModeForEnemy = character.punch;
      console.log("The ENEMY attack was a punch : " + attackModeForEnemy);
      break;
    case 1:
      attackModeForEnemy = character.kick;
      console.log("The ENEMY attack was a kick : " + attackModeForEnemy);
      break;
    case 2:
      attackModeForEnemy = character.combo;
      console.log("The ENEMY attack was a combo : " + attackModeForEnemy);
      break;
    case 3:
      attackModeForEnemy = character.doublecombo;
      console.log("The ENEMY attack was a doublecombo : " + attackModeForEnemy);
      break;
  }
  //Fighting function
  (function() {
    console.log("Was this my first click ? " + firstClickRead);
    if (firstClickRead) {
      newHPValuePlayer = playerInitHP - attackModeForEnemy; /// 100 - 5  = 95 newHPValuePlayer
      newHPValueEnemy = opponentInitHP - attackModeForPlayer; /// 120 - 15  = 105 newHPValueOpponent
      ongoingPlayerHP = newHPValuePlayer; //95 newHPValuePlayer ONGOING
      ongoingOpponentHP = newHPValueEnemy; //105 newHPValueOpponent ONGOING
      document.getElementById("playerSpan").innerHTML = ongoingPlayerHP;
      document.getElementById("opponentSpan").innerHTML = ongoingOpponentHP;
      console.log("Player HP after 1st click ...  " + ongoingPlayerHP);
      console.log("Opponent HP after 1st click ...  " + ongoingOpponentHP);
      firstClickRead = false;
      console.log("First click has been captured");
      console.log("-------------DONE -------------------");
    } else {
      //Record the damages to both HPs
      ongoingPlayerHP -= attackModeForEnemy;
      ongoingOpponentHP -= attackModeForPlayer;
      console.log('player HP ' + ongoingPlayerHP + ' opp HP ' + ongoingOpponentHP);
      //var loser;
      if (ongoingOpponentHP <= 0 || ongoingPlayerHP <= 0) {
        //decide the winner based on the highest
        console.log('someone lost... time to find out.')
        if (ongoingPlayerHP > ongoingOpponentHP ) {
            console.log('Winner is the player');
            console.log('SELECT ANOTHER OPPONENT');
            //display the losing value of the opponent
            document.getElementById("opponentSpan").innerHTML = ongoingOpponentHP;
            attackBtn.setAttribute("style", "visibility: hidden");
            $("#opponentSpan").fadeOut(5000,"linear");
            $("#opponent").fadeOut(5000,"linear");
            $("#getOTxt").fadeIn(1200,"linear");
            // getOTxt.setAttribute("style", "display:none");
            // opponentLife.setAttribute("style", "visibility: hidden");
            (function() {
                setTimeout(
                    function(){
                        $("#opponent").fadeOut(5000, function() { $("#opponent").remove(); });
                        // $('#opponent').remove();
                        //alert("Opponent has been defeated!");
                     }, 3000);
            })();

            document.getElementById("opponent").setAttribute("ondrop","(event)");

            // // console.log ("dropping " + elementID.alt);
            isOpponentDiv = true;

            //Get the player initial full HP VALUE
            //document.getElementById("playerSpan").innerHTML = playerInitHP;
        } else {
            attackBtn.setAttribute("style", "visibility: hidden");
            document.getElementById("playerSpan").innerHTML = ongoingPlayerHP;
            console.log('GAME OVER')
            console.log("--------------------------------");
        }
      } else {
        document.getElementById("playerSpan").innerHTML = ongoingPlayerHP;
        document.getElementById("opponentSpan").innerHTML = ongoingOpponentHP;
      }
    }
  })();
  console.log("--------------------------------");
});
