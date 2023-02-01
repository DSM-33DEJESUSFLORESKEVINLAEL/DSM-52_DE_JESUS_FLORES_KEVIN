import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../theme/appTheme'
import { useNavigation } from '@react-navigation/native';

export const DosScreen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Renta
            </Text>
            
        </View>
    )
}
