import { receiveDecks, addCardtoDeck, addDeck } from './deck'
import { receiveCards, addCard } from './card'
import { getInitialData, saveAddDeck, saveAddCard } from '../utils/api'


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({decks, cards}) => {
        dispatch(receiveDecks(decks))
        dispatch(receiveCards(cards))
      })
  }
}

export function handleAddCard(newCard){
    return (dispatch, getState) => {
      const { decks } = getState()
      const { deckID } = newCard

      return saveAddCard(newCard)
        .then(({formattedCard}) => {
        dispatch(addCard(formattedCard))
        dispatch(addCardtoDeck(decks[deckID], [formattedCard.id]))
      })
    }
}

export function handleAddDeck(deckName){
    return (dispatch) => {

      return saveAddDeck(deckName)
        .then(({formattedDeck}) => {
        dispatch(addDeck(formattedDeck))
      })
    }
}
