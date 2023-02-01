import React, { Component, useEffect } from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import { StackNavigation } from '../Navigation/StackNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';



interface Props extends StackScreenProps<any, any> { };

export const Bienvenidos1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Bienvenidos',
      headerTitleAlign: 'center'
    })
  })
  


  return (


    <View style={styles.globalMargin}>
<Text style={styles.title}>MOBILE  SCHEDULE</Text>
<ScrollView>
  
    <TouchableOpacity
      onPress={() => navigation.navigate('Dos')}>     
    </TouchableOpacity>

</ScrollView>
      <Text >Bienvenidos a esta aplicación donde te será tu  apoyo y en poder prevenir accidentes dentro de tu casa por medio de esta app </Text>
    
    
    <TouchableOpacity
        style={styles.button}
        
        onPress={() => navigation.navigate('crear')}
      >
        <Text style={styles.textBoton}>Crear</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Renta')}
      >
        <Text style={styles.textBoton}>Iniciar sesion</Text>
      </TouchableOpacity>
  
 </View>
    
  )
}