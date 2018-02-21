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

function randomHP() {
    for (i = 1; i < 5; i++) {
        hpLife = Math.floor(Math.random() * 50 ) + 120; //Random HP Health Points
        console.log('random HP for char ' + hpLife);
        $("#char" + i).text("HP: " + hpLife)[0]; // It means JQuery index
        $(".sel" +i ).attr("charLife", hpLife)[0]; // I CAN USE the [0] to do many many things
      }
}
randomHP();

// PLAYER AREA DROPOFF
var isplayerDiv = true
function playerDrop(ev) { //is equal only to my img  === elementID
    ev.preventDefault();
    var playerParent = elementID.parentNode; //get the parent of the img (elementID) being
   if (isplayerDiv) {
    getPTxt.setAttribute("style", "display:none"); //hide the Drag message instruction
    playerLife.setAttribute("style", "visibility: visible"); //Display the character life span
    playerParent.setAttribute("style", "visibility: hidden");  //hide the parent HTML
    document.getElementById("player").appendChild(elementID); //append the draggable character to my target
    elementID.setAttribute("style","margin-left:50px"); //adjust the character margin
    console.log ("dropping " + elementID.alt);
    isplayerDiv = false;
    }
}

//OPPONENT AREA DROPOFF
var isOpponentDiv = true;
function oppDrop(ev) {
    ev.preventDefault();
    console.log(  $(elementID).attr("charLife")     );
    var opponentParent = elementID.parentNode;
   if (isOpponentDiv) {
    getOTxt.setAttribute("style", "display:none");
    opponentLife.setAttribute("style", "visibility: visible");
    attackBtn.setAttribute("style", "visibility: visible");
    document.getElementById("opponent").appendChild(elementID);
    elementID.setAttribute("style","margin-left:25px")
    opponentParent.setAttribute("style", "visibility: hidden");
    console.log ("dropping " + elementID.alt);
    isOpponentDiv = false;
    }
}

var playerAttack, enemyAttack;

//Here is my object to use for attacks
var character = {
    punch: 5,
    //  Math.floor(Math.random()*6) + 5, // 5 -10
    kick:  8,
    //   Math.floor(Math.random()* 10 ) + 4,
    combo: 15,
    // Math.floor(Math.random()* 12 ) + 7,
}

function goGetMeAPlayerAttack() {
    var hereisYourPlayerAttack = Math.floor(Math.random()* 3); // 0 -2
    return hereisYourPlayerAttack;
}

function goGetMeAnEnemyAttack() {
    var hereisYourEnemyAttack = Math.floor(Math.random()* 3); // 0 -2
    return hereisYourEnemyAttack;
}

$("#attack").on("click", function() {
    playerAttack = goGetMeAPlayerAttack(); //0
    enemyAttack = goGetMeAnEnemyAttack(); //1
    var attackModeForPlayer, attackModeForEnemy;
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
   console.log('--------------------------------');
 });






















