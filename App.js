import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import RoundedButton from './components/RoundedButton';
export default class App extends Component{
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.wrapper}>
          <Text style={styles.timerText}>03:01:04</Text>
       </View>
       <View style={styles.control}>
        <RoundedButton  title="Start" color='red' background='green' />
        <RoundedButton  title="Stop" color='yellow' background='gray' />
       </View>
       <ScrollView style={styles.list}> 
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
        <Text style={styles.listText}> 03:33,55</Text>
       </ScrollView>
     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    color:'white',
    alignItems: 'stretch'

  },
  wrapper:{
   
    height:150,
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  control:{
 
    height:150,
    alignItems: 'center',
    justifyContent: 'space-around',  
    flexDirection:'row'
  },
  timerText:{
    fontWeight:'normal',
    fontSize:45,
    color:'black'
 },
 list:{
   flex:1,

   justifyContent:'center',
   alignItems:'center',
  
 },
 listText:{
   fontSize:20,
 }


});
