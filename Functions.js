const CLOSED_DECK = {
    1: { 'A ♥': 1 },
    2: { 'A ♦': 1 },
    3: { 'A ♣': 1 },
    4: { 'A ♠': 1 },
    5: { '2 ♥': 2 },
    6: { '2 ♦': 2 },
    7: { '2 ♣': 2 },
    8: { '2 ♠': 2 },
    9: { '3 ♥': 3 },
    10: { '3 ♦': 3 },
    11: { '3 ♣': 3 },
    12: { '3 ♠': 3 },
    13: { '4 ♥': 4 },
    14: { '4 ♦': 4 },
    15: { '4 ♣': 4 },
    16: { '4 ♠': 4 },
    17: { '5 ♥': 5 },
    18: { '5 ♦': 5 },
    19: { '5 ♣': 5 },
    20: { '5 ♠': 5 },
    21: { '6 ♥': 6 },
    22: { '6 ♦': 6 },
    23: { '6 ♣': 6 },
    24: { '6 ♠': 6 },
    25: { '7 ♥': 7 },
    26: { '7 ♦': 7 },
    27: { '7 ♣': 7 },
    28: { '7 ♠': 7 },
    29: { '8 ♥': 8 },
    30: { '8 ♦': 8 },
    31: { '8 ♣': 8 },
    32: { '8 ♠': 8 },
    33: { '9 ♥': 9 },
    34: { '9 ♦': 9 },
    35: { '9 ♣': 9 },
    36: { '9 ♠': 9 },
    37: { '10 ♥': 10 },
    38: { '10 ♦': 10 },
    39: { '10 ♣': 10 },
    40: { '10 ♠': 10 },
    41: { 'J ♥': 10 },
    42: { 'J ♦': 10 },
    43: { 'J ♣': 10 },
    44: { 'J ♠': 10 },
    45: { 'Q ♥': 10 },
    46: { 'Q ♦': 10 },
    47: { 'Q ♣': 10 },
    48: { 'Q ♠': 10 },
    49: { 'K ♥': 10 },
    50: { 'K ♦': 10 },
    51: { 'K ♣': 10 },
    52: { 'K ♠': 10 },
}

Deck = {
    1: { 'A ♥': 1 },
    2: { 'A ♦': 1 },
    3: { 'A ♣': 1 },
    4: { 'A ♠': 1 },
    5: { '2 ♥': 2 },
    6: { '2 ♦': 2 },
    7: { '2 ♣': 2 },
    8: { '2 ♠': 2 },
    9: { '3 ♥': 3 },
    10: { '3 ♦': 3 },
    11: { '3 ♣': 3 },
    12: { '3 ♠': 3 },
    13: { '4 ♥': 4 },
    14: { '4 ♦': 4 },
    15: { '4 ♣': 4 },
    16: { '4 ♠': 4 },
    17: { '5 ♥': 5 },
    18: { '5 ♦': 5 },
    19: { '5 ♣': 5 },
    20: { '5 ♠': 5 },
    21: { '6 ♥': 6 },
    22: { '6 ♦': 6 },
    23: { '6 ♣': 6 },
    24: { '6 ♠': 6 },
    25: { '7 ♥': 7 },
    26: { '7 ♦': 7 },
    27: { '7 ♣': 7 },
    28: { '7 ♠': 7 },
    29: { '8 ♥': 8 },
    30: { '8 ♦': 8 },
    31: { '8 ♣': 8 },
    32: { '8 ♠': 8 },
    33: { '9 ♥': 9 },
    34: { '9 ♦': 9 },
    35: { '9 ♣': 9 },
    36: { '9 ♠': 9 },
    37: { '10 ♥': 10 },
    38: { '10 ♦': 10 },
    39: { '10 ♣': 10 },
    40: { '10 ♠': 10 },
    41: { 'J ♥': 10 },
    42: { 'J ♦': 10 },
    43: { 'J ♣': 10 },
    44: { 'J ♠': 10 },
    45: { 'Q ♥': 10 },
    46: { 'Q ♦': 10 },
    47: { 'Q ♣': 10 },
    48: { 'Q ♠': 10 },
    49: { 'K ♥': 10 },
    50: { 'K ♦': 10 },
    51: { 'K ♣': 10 },
    52: { 'K ♠': 10 },
}

PlayedCards = {
    //object to store cards already played
}

PlayerOne = {
    //object to store cards of player one
}

PlayerTwo = {
    //object to store cards of player two
}

//variable to store player turn
Turn = 0;

function Shuflle() {
    //reset initial deck
    Deck = CLOSED_DECK;
}

function SetPlayersCards() {
    //set player card
    //init game
    //set this card in 'hand' player
    //add this card in played cards object
    //remove this card of deck
}

function CalculateProbability() {
    //calculates the probability of 
    //getting a card less than the maximum required    
}

function GetCard(Player) {
    //get random card in deck
    //set this card in 'hand' player
    //add this card in played cards object
    //remove this card of deck
}

function SavePlayedCards(card) {
    //set card in player cars object
    PlayedCards.push(card);
}

function VerifyLimitPoints(player) {
    //get player 'hand'
    //sum card points
    //verify if point are < 21
    //if bot player
    //  if bot player points > 21 
    //      "you win"
    //  else
    //      "you lose"
    //else
    //  if human player points > 21
    //      "you lose"
    //  else
    //      "you win"
}

function YourTurn() {
    //change player
    //set turn variable
}