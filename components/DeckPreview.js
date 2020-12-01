import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { connect } from 'react-redux'


class DeckPreview extends Component {
  render(){
    const { deck } = this.props

     return (      
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>{deck.name}</Text>
          <Text style={styles.deckSubtitle}>{deck.cards.length} cards in deck</Text>
        </View>
    )
  }
}

function mapStateToProps({ decks },{ deckID }){
    const deck = decks[deckID]

    return {
      deck
    }
}

export default connect(mapStateToProps)(DeckPreview)
