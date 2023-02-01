import React, { useEffect } from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import { StackNavigation } from '../Navigation/StackNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

export const BienvenidosScreen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Bienvenidos',
      
      headerTitleAlign: 'center'
      
    })
  })

  return (
   

    <View style={styles.globalMargin}>
      
    
      <ScrollView>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Bienvenidos1')}>
      <Text style={styles.title}>MOBILE  SCHEDULE</Text>
      <Image 
      style={styles.tinyLogo}
      source={require('../imgs/gas.png')}
      />
      </TouchableOpacity>  
     
      
      </ScrollView>
       </View>
      
  


    
  )
}