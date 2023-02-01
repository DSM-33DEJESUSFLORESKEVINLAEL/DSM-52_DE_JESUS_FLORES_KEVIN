import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BienvenidosScreen } from '../screens/BienvenidosScreen';
import { Bienvenidos1Screen } from '../screens/Bienvenidos1Screen';
import { DosScreen } from '../screens/DosScreen';





const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: 'azure'
        }
      }}
    >
      <Stack.Screen name="Bienvenidos"     component={BienvenidosScreen} />
      <Stack.Screen name="Bienvenidos1"      component={Bienvenidos1Screen} />
      <Stack.Screen name="DosScreen"      component={DosScreen} />
   </Stack.Navigator>
  );
}
