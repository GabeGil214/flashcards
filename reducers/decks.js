import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD_TO_DECK } from '../actions/deck'

export default function decks (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case REMOVE_DECK :
      return {
        ...state,
        [action.deckID]: undefined
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck,
          cards: action.deck.cards.concat([action.cardID])
        }
      }
    default:
      return state
  }
}
