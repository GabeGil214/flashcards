import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js';
import { connect } from 'react-redux'

class CardPreview extends Component {
  constructor(props){
    super(props)
    this.state = {showAnswer: false}
  }

  toggleAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  render(){
    const { currentCard } = this.props

    const { showAnswer } = this.state

     return (
         <View key={currentCard.id.toString()} style={styles.card}>
           <TouchableOpacity
             key={currentCard.id.toString()}
             style={styles.deckContainer}
             onPress={() => this.toggleAnswer()}
             >
             {!showAnswer
              ? <Text style={styles.cardQuestion}>{currentCard.question}</Text>
              :
              <Text style={styles.cardQuestion}>{currentCard.answer}</Text>
            }
           </TouchableOpacity>
         </View>
       )
     }
}

function mapStateToProps({ cards },{ cardID }){
    const currentCard = cards[cardID]

    return {
      currentCard
    }
}

export default connect(mapStateToProps)(CardPreview)
