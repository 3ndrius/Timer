import React from 'react'
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
export default function Buttons({title, color, background, click}) {
    return (
        <TouchableWithoutFeedback  onPress={click} >
        <View  style={[styles.button, {backgroundColor: background}]}>
            <Text style={[styles.text, {color}]}>{title}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
   button:{
     width:130,
     height:32,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius:2,
     marginBottom:10

   },
   text:{
       fontSize:12,
       fontWeight:'400'
   }
   
  
  });