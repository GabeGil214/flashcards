import React, { Component } from 'react'
import Form from 'react-native-form'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js'
import { handleAddDeck } from '../actions/shared'
import { connect } from 'react-redux'

class NewDeck extends Component {

  createNewDeck(deck) {
    const name = deck.deckName

    this.props.dispatch(handleAddDeck(name))
  }

  render(){
    return (
      <View style={styles.container}>
        <Form ref='form'>
          <View>
            <Text>Deck Title</Text>
            <TextInput type="TextInput" name="deckName" />
            <TouchableOpacity style={styles.btn} onPress={() => this.createNewDeck(this.refs.form.getValues())}>
              <Text style={styles.btnText}>Add Deck</Text>
            </TouchableOpacity>
          </View>
      </Form>
    </View>
    )
  }
}

export default connect()(NewDeck)
