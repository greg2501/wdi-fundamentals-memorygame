console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";



//alert('Hello, friends.');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])  {alert("You found a match!");}
	if (cardsInPlay[0] !== cardsInPlay[1]) {alert("Sorry, try again.");}
}

console.log("User flipped " + cardTwo);