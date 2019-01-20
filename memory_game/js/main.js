console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";



//alert('Hello, friends.');

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []



var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
}}



var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId])
	if (cardsInPlay.length === 2) {checkForMatch();
		console.log("User flipped " + cards[cardId]);
}}


flipCard(3)
flipCard(2)