import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js'
import { handleAddCard } from '../actions/shared'
import Form from 'react-native-form'
import { connect } from 'react-redux'

class NewCard extends Component {

  createNewCard(cardInfo) {
    const deckID = this.props.navigation.getParam('deckID')

    const newCard = {
      ...cardInfo,
      deckID,
    }

    this.props.dispatch(handleAddCard(newCard))
  }

  render(){
    return (
        <View style={styles.container}>
          <Form ref='form'>
            <View>
              <Text>Card Question</Text>
              <TextInput key='1' type="TextInput" name="question" />
              <Text>Card Answer</Text>
              <TextInput key='2' type="TextInput" name="answer" />
              <TouchableOpacity style={styles.btn} onPress={() => this.createNewCard(this.refs.form.getValues())}>
                <Text style={styles.btnText}>Add Card</Text>
              </TouchableOpacity>
            </View>
        </Form>
      </View>
    )
  }
}

export default connect()(NewCard)
