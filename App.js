import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
export default class App extends Component() {
 render(){
  return (
    <View>
  <LoginScreen/>  
  </View>
  );
 }
}
