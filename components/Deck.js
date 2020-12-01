import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/stylesheet.js';
import { useSelector } from 'react-redux'
import CardPreview from './CardPreview'
import { useNavigation } from '@react-navigation/native';

function Deck({route}) {
  const selectedData = useSelector(selectorFunction);
  const navigation = useNavigation();

  const getCardIds = deckID => {

    const { decks } = selectedData;

    return decks[deckID].cards
  }

  const { deckID } = route.params

  const cardIds = getCardIds(deckID)

   return (
    <View style={styles.container}>
      <FlatList
        data={cardIds}
        renderItem={(cardID) => (
            <CardPreview
              key={cardID.item}
              cardID={cardID.item}
              />
        )}
        keyExtractor={cardID => cardID.item}
        />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('NewCard', {deckID: deckID})}>
        <Text style={styles.btnText}>Add Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.btnText}>Take Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

function selectorFunction({decks}){
  return {
    decks
  }
}

export default Deck
