var elementID;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(cardNumber) {
    elementID = document.getElementById(cardNumber);
}
//get elements needed
var getPTxt = document.getElementById("dragPText")
var getOTxt = document.getElementById("dragOText")
var playerLife = document.getElementById("playerSpan")
var opponentLife = document.getElementById("opponentSpan")
var attackBtn = document.getElementById("attackBtn");

(function randomHP() {
    for (i = 1; i < 5; i++) {
        hpLife = Math.floor(Math.random() * 50 ) + 120; //Random HP Health Points
        $("#char" + i).text("HP: " + hpLife)[0]; // It means JQuery index
        $(".sel" +i ).attr("charLife", hpLife)[0]; // I CAN USE the [0] to do many many things
      }
})()

// PLAYER AREA DROPOFF
var isPlayerDivEmpty = true;
var playerInitHP;
function playerDrop(ev) { //is equal only to my img  === elementID
    ev.preventDefault();
    document.getElementById("player").removeAttribute("ondrop");
    var playerParent = elementID.parentNode; //get the parent of the img (elementID) being
    playerInitHP = parseInt( $(elementID).attr("charLife"));
    console.log('Starting span life of player is ' + parseInt(  $(elementID).attr("charLife")    ) );
   if (isPlayerDivEmpty) {
    getPTxt.setAttribute("style", "display:none"); //hide the Drag message instruction
    playerLife.setAttribute("style", "visibility: visible"); //Display the character life span
    playerParent.setAttribute("style", "visibility: hidden");  //hide the parent HTML
    document.getElementById("player").appendChild(elementID); //append the draggable character
    document.getElementById("playerSpan").innerHTML = playerInitHP;
    elementID.setAttribute("style","margin-left:50px"); //adjust the character margin
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
    opponentInitHP = parseInt( $(elementID).attr("charLife"));
    console.log( 'Starting span life of opponent is ' + opponentInitHP );
    var opponentParent = elementID.parentNode; //get the parent of whatever
   if (isOpponentDiv) {
    getOTxt.setAttribute("style", "display:none");
    opponentLife.setAttribute("style", "visibility: visible");
    attackBtn.setAttribute("style", "visibility: visible");
    document.getElementById("opponent").appendChild(elementID);
    document.getElementById("opponentSpan").innerHTML = opponentInitHP;
    elementID.setAttribute("style","margin-left:25px")
    opponentParent.setAttribute("style", "visibility: hidden");
    // console.log ("dropping " + elementID.alt);
    isOpponentDiv = false;
    }
    return opponentInitHP; //I am returning the starting HP Life for the OPPONENT
}

var playerAttack, enemyAttack;
//Here is my object to use for attacks
var character = {
    punch: 12,  //0
    kick:  16,  //1
    combo: 20,  //2
}

//Get me an attack
function getAtackMode() {
    var hereisYourPlayerAttack = Math.floor(Math.random()* 3); // 0 -2
    return hereisYourPlayerAttack;
}

//GLOBAL VARIABLES DECLARATION
var attackModeForPlayer, attackModeForEnemy;
var newHPValuePlayer,newHPValueEnemy, ongoingOpponentHP, ongoingPlayerHP;
var firstClickRead = true; //This is the flag for the first time
$("#attack").on("click", function() {
    playerAttack = getAtackMode(); //0
    enemyAttack = getAtackMode(); //1
   switch (playerAttack) {
     case 0:
        attackModeForPlayer = character.punch;
        console.log('The player attack was a punch : ' + attackModeForPlayer);
       break;
     case 1:
        attackModeForPlayer = character.kick;
        console.log('The player attackwas a kick : ' + attackModeForPlayer);
       break;
     case 2:
       attackModeForPlayer = character.combo;
       console.log('The player attack was a combo : ' + attackModeForPlayer);
       break;
   }
   switch (enemyAttack){
     case 0:
        attackModeForEnemy = character.punch;
        console.log('The ENEMY attack was a punch : ' + attackModeForEnemy);
       break;
     case 1:
        attackModeForEnemy = character.kick;
        console.log('The ENEMY attack was a kick : ' + attackModeForEnemy);
       break;
     case 2:
       attackModeForEnemy = character.combo;
       console.log('The ENEMY attack was a combo : ' + attackModeForEnemy);
       break;
   }
   //Fighting function
   (function() {
       console.log('Was this my first click ? ' + firstClickRead);
       if (firstClickRead) {
        newHPValuePlayer = playerInitHP - attackModeForEnemy;  /// 100 - 5  = 95 newHPValuePlayer
        newHPValueEnemy = opponentInitHP - attackModeForPlayer; /// 120 - 15  = 105 newHPValueOpponent
        ongoingPlayerHP = newHPValuePlayer; //95 newHPValuePlayer ONGOING
        ongoingOpponentHP = newHPValueEnemy; //105 newHPValueOpponent ONGOING
        document.getElementById("playerSpan").innerHTML = ongoingPlayerHP;
        document.getElementById("opponentSpan").innerHTML = ongoingOpponentHP;
        console.log('Player HP after 1st click ...  ' + ongoingPlayerHP);
        console.log('Opponent HP after 1st click ...  ' + ongoingOpponentHP);
        firstClickRead = false;
        console.log('First click has been captured');
        console.log('-------------DONE -------------------');
       } else {
        console.log('---- Here comes second to infinity click ----');

        //Record the damages to both HPs
        ongoingPlayerHP -= attackModeForEnemy;
        ongoingOpponentHP -= attackModeForPlayer;
        document.getElementById("playerSpan").innerHTML = ongoingPlayerHP;
        document.getElementById("opponentSpan").innerHTML = ongoingOpponentHP;
        console.log('Next round Player HP ' + ongoingPlayerHP);
        console.log('Next round Opponent HP ' + ongoingOpponentHP);
       }
    })();
   console.log('--------------------------------');
   return attackModeForPlayer, attackModeForEnemy;
 });
