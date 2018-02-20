
var elementID;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(cardNumber) {
    elementID = document.getElementById(cardNumber);
    // console.log(elementID);
}

// PLAYER AREA DROPOFF
var isplayerDiv = true
var getPTxt = document.getElementById("dragPText")
var playerLife = document.getElementById("playerSpan")
function playerDrop(ev) {
    ev.preventDefault();
    // console.log (document.getElementById("player"))
   if (isplayerDiv) {
    getPTxt.setAttribute("style", "display:none");
    playerLife.setAttribute("style", "visibility: visible");
    document.getElementById("player").appendChild(elementID);
    console.log ("dropping " + elementID.alt);
    isplayerDiv = false;
    }
}

//OPPONENT AREA DROPOFF
var isOpponentDiv = true;
var getOTxt = document.getElementById("dragOText")
var opponentLife = document.getElementById("opponentSpan")
function oppDrop(ev) {
    ev.preventDefault();
    // console.log (document.getElementById("opponent"))
   if (isOpponentDiv) {
    getOTxt.setAttribute("style", "display:none");
    opponentLife.setAttribute("style", "visibility: visible");
    document.getElementById("opponent").appendChild(elementID);
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


