import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/Navigation/StackNavigation';
export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
export default App;

