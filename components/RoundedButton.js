import React from 'react'
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
export default function RoundedButton({title, color, background, click}) {
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
     width:80,
     height:80,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius:40,

   },
   text:{
       fontSize:20
   }
   
  
  });