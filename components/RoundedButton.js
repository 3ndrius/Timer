import React from 'react'
import {StyleSheet, Text, View,} from 'react-native';
export default function RoundedButton({title, color, background}) {
    return (
        <View  style={[styles.button, {backgroundColor: background}] }>
            <Text style={[styles.text, {color}]}>{title}</Text>
        </View>
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