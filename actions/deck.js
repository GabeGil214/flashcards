export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function receiveDecks(decks){
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(deck){
  return{
    type: ADD_DECK,
    deck,
  }
}

export function addCardtoDeck(deck, cardID){
  return {
    type: ADD_CARD_TO_DECK,
    deck,
    cardID
  }
}

export function removeDeck(deckID){
  return {
    type: REMOVE_DECK,
    deckID
  }
}
