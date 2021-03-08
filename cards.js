var ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var suits = ['♥','♢','♤','♧'];
var cards = [];
var instructions = "***INSTRUCTIONS***\nshuffle(cards) -> Shuffles all cards in the deck.\nsortSuit(cards) -> Sorts cards by suit.\nrankAscending(cards) -> Sorts cards by ascending order of rank.\nrankDescending(cards) -> Sorts cards by descending order of rank.\ndealCard(one)  -> Deals 1 random card from the deck.\ndealHand(five) -> Deals 5 random cards from the deck.\n***♥♢♤♧***";
var one = [];
var five = [];
var deck = [];
var order = [];
var shuffled = shuffle(cards);

for (o=0; o<13; o++) {
  order.push(o);
}

function createDeck() {
  for (r=0; r<ranks.length; r++) {
    for (s=0; s<suits.length; s++) {
        var card = 
        {
          Rank: ranks[r],
          Suit: suits[s],
          Order: order[r],
          Card: ranks[r]+suits[s]
        };
        deck.push(card);
        cards.push(card.Card)
    }
  }
  return deck, cards;
}

console.log(instructions);
console.log(createDeck());

// SHUFFLE CARDS
function shuffle(cardDeck) {
  var currentIndex = cardDeck.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
  
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
  
    // And swap it with the current element.
    temporaryValue = cardDeck[currentIndex];
    cardDeck[currentIndex] = cardDeck[randomIndex];
    cardDeck[randomIndex] = temporaryValue;
      
  }
  cards = cardDeck;
  return cards;
}

// SORT BY SUIT
function sortSuit(cardDeck) {
  deck.sort((a,b) => {
  if (a.Suit > b.Suit) {
    return 1;
  } else if (a.Suit === b.Suit) {
    return 1;
   } else {
     return -1;
   }
  });
  for (var i=0; i<deck.length; i++) {
      cardDeck[i] = deck[i].Card
  }
  return cardDeck;
}

// SORT ASCENDING
function rankAscend(cardDeck) {
  deck.sort((a,b) => {
    if(a.Order > b.Order) {
      return 1;
     } else if(a.Order === b.Order) {
      return 1;
     }
      else {
        return -1;
     }
});
  for (var i=0; i<deck.length; i++) {
      cardDeck[i] = deck[i].Card;
  }
  //return cardDeck;
}

function rankAscending(item){
  rankAscend(item);
  return item;
}

// SORT DESCENDING
function rankDescending(reverse) {
  rankAscend(cards);
  var reverse = cards.reverse();
  return reverse;
}

// DEAL 1 CARD
function dealCard(one) {
    var shuffled = shuffle(one);
    var dealOne = deck.splice(0, 1)
    var deal = shuffled.splice(0, 1);
    cards = one;
    return deal;
}

// DEAL 5 CARDS
function dealHand(five) {
    var shuffled = shuffle(five);
    var dealFive = deck.splice(0, 5);
    var deal = shuffled.splice(0, 5);
    cards = five;
    return deal;
  }
//♥♢♤♧

//hearts = ["A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥"]
//diamonds = ["A♢", "2♢", "3♢", "4♢", "5♢", "6♢", "7♢", "8♢", "9♢", "10♢", "J♢", "Q♢", "K♢"]
//spades = ["A♤", "2♤", "3♤", "4♤", "5♤", "6♤", "7♤", "8♤", "9♤", "10♤", "J♤", "Q♤", "K♤"]
//clubs = ["A♧", "2♧", "3♧", "4♧", "5♧", "6♧", "7♧", "8♧", "9♧", "10♧", "J♧", "Q♧", "K♧"]