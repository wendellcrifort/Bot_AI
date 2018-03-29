Deck = [
   { data: 'A ♥', value: 1 },
   { data: 'A ♦', value: 1 },
   { data: 'A ♣', value: 1 },
   { data: 'A ♠', value: 1 },
   { data: '2 ♥', value: 2 },
   { data: '2 ♦', value: 2 },
   { data: '2 ♣', value: 2 },
   { data: '2 ♠', value: 2 },
   { data: '3 ♥', value: 3 },
   { data: '3 ♦', value: 3 },
   { data: '3 ♣', value: 3 },
   { data: '3 ♠', value: 3 },
   { data: '4 ♥', value: 4 },
   { data: '4 ♦', value: 4 },
   { data: '4 ♣', value: 4 },
   { data: '4 ♠', value: 4 },
   { data: '5 ♥', value: 5 },
   { data: '5 ♦', value: 5 },
   { data: '5 ♣', value: 5 },
   { data: '5 ♠', value: 5 },
   { data: '6 ♥', value: 6 },
   { data: '6 ♦', value: 6 },
   { data: '6 ♣', value: 6 },
   { data: '6 ♠', value: 6 },
   { data: '7 ♥', value: 7 },
   { data: '7 ♦', value: 7 },
   { data: '7 ♣', value: 7 },
   { data: '7 ♠', value: 7 },
   { data: '8 ♥', value: 8 },
   { data: '8 ♦', value: 8 },
   { data: '8 ♣', value: 8 },
   { data: '8 ♠', value: 8 },
   { data: '9 ♥', value: 9 },
   { data: '9 ♦', value: 9 },
   { data: '9 ♣', value: 9 },
   { data: '9 ♠', value: 9 },
   { data: '10 ♥', value: 10 },
   { data: '10 ♦', value: 10 },
   { data: '10 ♣', value: 10 },
   { data: '10 ♠', value: 10 },
   { data: 'J ♥', value: 10 },
   { data: 'J ♦', value: 10 },
   { data: 'J ♣', value: 10 },
   { data: 'J ♠', value: 10 },
   { data: 'Q ♥', value: 10 },
   { data: 'Q ♦', value: 10 },
   { data: 'Q ♣', value: 10 },
   { data: 'Q ♠', value: 10 },
   { data: 'K ♥', value: 10 },
   { data: 'K ♦', value: 10 },
   { data: 'K ♣', value: 10 },
   { data: 'K ♠', value: 10 }
]

const DECK = [
   { data: 'A ♥', value: 1 },
   { data: 'A ♦', value: 1 },
   { data: 'A ♣', value: 1 },
   { data: 'A ♠', value: 1 },
   { data: '2 ♥', value: 2 },
   { data: '2 ♦', value: 2 },
   { data: '2 ♣', value: 2 },
   { data: '2 ♠', value: 2 },
   { data: '3 ♥', value: 3 },
   { data: '3 ♦', value: 3 },
   { data: '3 ♣', value: 3 },
   { data: '3 ♠', value: 3 },
   { data: '4 ♥', value: 4 },
   { data: '4 ♦', value: 4 },
   { data: '4 ♣', value: 4 },
   { data: '4 ♠', value: 4 },
   { data: '5 ♥', value: 5 },
   { data: '5 ♦', value: 5 },
   { data: '5 ♣', value: 5 },
   { data: '5 ♠', value: 5 },
   { data: '6 ♥', value: 6 },
   { data: '6 ♦', value: 6 },
   { data: '6 ♣', value: 6 },
   { data: '6 ♠', value: 6 },
   { data: '7 ♥', value: 7 },
   { data: '7 ♦', value: 7 },
   { data: '7 ♣', value: 7 },
   { data: '7 ♠', value: 7 },
   { data: '8 ♥', value: 8 },
   { data: '8 ♦', value: 8 },
   { data: '8 ♣', value: 8 },
   { data: '8 ♠', value: 8 },
   { data: '9 ♥', value: 9 },
   { data: '9 ♦', value: 9 },
   { data: '9 ♣', value: 9 },
   { data: '9 ♠', value: 9 },
   { data: '10 ♥', value: 10 },
   { data: '10 ♦', value: 10 },
   { data: '10 ♣', value: 10 },
   { data: '10 ♠', value: 10 },
   { data: 'J ♥', value: 10 },
   { data: 'J ♦', value: 10 },
   { data: 'J ♣', value: 10 },
   { data: 'J ♠', value: 10 },
   { data: 'Q ♥', value: 10 },
   { data: 'Q ♦', value: 10 },
   { data: 'Q ♣', value: 10 },
   { data: 'Q ♠', value: 10 },
   { data: 'K ♥', value: 10 },
   { data: 'K ♦', value: 10 },
   { data: 'K ♣', value: 10 },
   { data: 'K ♠', value: 10 }
]

const minPoints = 16

var PlayerOne = {
  cards: [],
  points: 0
}

var PlayerTwo = {
  cards: [],
  points: 0
}

function sortNumber (quantity) {
  return Math.floor(Math.random() * quantity + 1)
}

function setPlayersCards (player, length, deck, sort, quantity) {
  for (let i = 0; i < length; i++) {
    let pos = sort(quantity)
    console.log(pos);
      player.cards.push(deck[pos])
      player.points += deck[pos].value
      deck.splice(pos, 1)
  }
  return player
}

function validatePoints (player) {
  return player.points < minPoints
}

function getCard (player, length, deck, func, quantity) {
  setPlayersCards(player, length, deck, func, quantity)
}

function robotTurn (player, validate, func, length, deck, sort) {
  // implementar função de calcular probabilidade da proxima jogada

  while (validate(player))
    func(player, length, deck, sort, quantity)

  // criar funcão que passa para o turno para o prox jogador
}

function comparePoints (player1, player2) {
  if (player1.points > 21 && player2.points > 21) {
    console.log('player1 e  player2 perderam')
  } else if (player1.point > 21) {
    console.log('player2 ganhou')
  } else if (player2.point > 21) {
    console.log('player1 ganhou')
  } else if (player1.points > player2.points){
    console.log('player1 ganhou')
  } else {
    console.log('player2 ganhou')
  }
}

function firstPlayer (func, quantity) {
  return func(quantity)
}


function init () {

  firstPlayer(sortNumber, 1)
}

init()
