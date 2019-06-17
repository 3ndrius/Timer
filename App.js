import React, { Component } from 'react';
import RoundedButton from './components/RoundedButton';
import { StyleSheet, Text, View, ScrollView, Button, Alert,  } from 'react-native';


export default class App extends Component{

 state = {
   time: 0,
   now: 0,
   laps: [1, 2],
   run:true
 }

  handleStartInterval = () => {
    timeer = setInterval(() => {
      this.setState({
        time: new Date().getTime(),
        run: false
      })
    }, 1000); 
  }
  handleLapInterval = () => {
    this.setState({
      laps: [...this.state.laps, this.state.time]
    })
  }

  handleStopInterval = () => {
    clearInterval(timeer);
    this.setState({
      run:true
    })
  }
 
  render() {

    let lap = this.state.laps.map((item) => {return <Text> {item} </Text>})
    return (
     <View style={styles.container}>
       <View style={styles.wrapper}>
          <Text style={styles.timerText}>{this.state.time}</Text>
       </View>
       <View style={styles.control}>
             <RoundedButton  title="Lap" color='yellow' background='gray'  click={this.handleLapInterval} />
          {
          this.state.run ?
            <RoundedButton  title="Start" color='red' click={this.handleStartInterval}  background='green' />
              :
            <RoundedButton  title="Stop" color='red' click={this.handleStopInterval}  background='green' />
          }
       </View>
       <ScrollView style={styles.list}> 
         {lap}
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
 },



});
