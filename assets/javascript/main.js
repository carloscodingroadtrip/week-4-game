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

// PLAYER AREA DROPOFF
var isplayerDiv = true
function playerDrop(ev) {
    var playerParent = elementID.parentNode; //get the parent of the img (elementID) being dragged
    ev.preventDefault();
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


function attackGenerator(playerHP, opponentHP) {
    // if PLAYER HP > OPPONENT HP {
        // have the opponent attacks be greater
    // else
    //     have the player attacks be greater value

    //

}


