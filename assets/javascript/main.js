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
        hpLife = Math.floor(Math.random() * 50 ) + 120; //Random HP
        console.log('random HP for char ' + hpLife);
        $("#char" + i).text("HP: " + hpLife).attr("charLife", hpLife)[0];
        $(".sel" +i ).attr("charLife", hpLife)[0];
      }
}
randomHP();

// PLAYER AREA DROPOFF
var isplayerDiv = true
function playerDrop(ev) { //is equal only to my img  === elementID
    ev.preventDefault();
    var playerParent = elementID.parentNode; //get the parent of the img (elementID) being dragged
    // $(elementID.attributes).each(function(index, attribute) {
    //     console.log("Attribute:"+attribute.nodeName+" | Value:"+attribute.nodeValue);
    //   });
    console.log(  $(elementID).attr("charLife")     );

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



function attackGenerator(playerHP, opponentHP) {
    // if PLAYER HP > OPPONENT HP {
        // have the opponent attacks be greater
    // else
    //     have the player attacks be greater value

    //

}


