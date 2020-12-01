import { RECEIVE_CARDS, ADD_CARD, REMOVE_CARD } from '../actions/card'

export default function cards (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CARDS :
      return {
        ...state,
        ...action.cards
      }
    case ADD_CARD :
      return {
        ...state,
        [action.card.id]: action.card
      }
    case REMOVE_CARD :
      return {
        ...state,
        [action.cardID]: undefined
      }
    default:
      return state
  }
}
