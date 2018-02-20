var elementID;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(cardNumber) {
    elementID = document.getElementById(cardNumber);
    console.log("dragging " + elementID.id);
}

// PLAYER AREA DROPOFF
var isplayerDiv = true
function playerDrop(ev) {
    ev.preventDefault();
    console.log (document.getElementById("player"))
   if (isplayerDiv) {
    document.getElementById("player").appendChild(elementID);
    console.log ("dropping " + elementID.id);
    isplayerDiv = false;
    }
}

//OPPONENT AREA DROPOFF
var isOpponentDiv = true;
function oppDrop(ev) {
    ev.preventDefault();
    console.log (document.getElementById("player"))
   if (isOpponentDiv) {
    document.getElementById("opponent").appendChild(elementID);
    console.log ("dropping " + elementID.id);
    isOpponentDiv = false;
    }
}
