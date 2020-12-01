import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import middleware from './middleware';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(reducer, middleware)


const AppStack = createStackNavigator()


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="DeckList">
            <AppStack.Screen name="DeckList" component={DeckList} />
            <AppStack.Screen name="Deck" component={Deck} />
            <AppStack.Screen name="NewCard" component={NewCard} />
            <AppStack.Screen name="Quiz" component={Quiz} />
          </AppStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
