import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js'

class Quiz extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is the Question?</Text>
        <Text>Enter your Answer</Text>
        <TextInput />
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('AddDeck')}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Quiz
