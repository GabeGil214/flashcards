export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'


export function receiveCards(cards){
  return {
    type: RECEIVE_CARDS,
    cards,
  }
}

export function addCard(card){
  return {
    type: ADD_CARD,
    card,
  }
}

export function removeCard(cardID){
  return {
    type: REMOVE_CARD,
    cardID
  }
}
