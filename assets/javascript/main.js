var elementID;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(cardNumber) {
    elementID = document.getElementById(cardNumber);
    // console.log(elementID);
    // console.log("dragging " + elementID.alt);
}

// PLAYER AREA DROPOFF
var isplayerDiv = true
var getPTxt = document.getElementById("dragPText")
function playerDrop(ev) {
    ev.preventDefault();
    // console.log (document.getElementById("player"))
   if (isplayerDiv) {
    getPTxt.setAttribute("style", "display:none");
    document.getElementById("player").appendChild(elementID);
    console.log ("dropping " + elementID.alt);
    isplayerDiv = false;
    }
}

//OPPONENT AREA DROPOFF
var isOpponentDiv = true;
var getOTxt = document.getElementById("dragOText")
function oppDrop(ev) {
    ev.preventDefault();
    // console.log (document.getElementById("opponent"))
   if (isOpponentDiv) {
    getOTxt.setAttribute("style", "display:none");
    document.getElementById("opponent").appendChild(elementID);
    console.log ("dropping " + elementID.alt);
    isOpponentDiv = false;
    }
}
