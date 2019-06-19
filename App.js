import React, { Component } from 'react';
import RoundedButton from './components/RoundedButton';
import { StyleSheet, Text, View, ScrollView, Button, Alert,  } from 'react-native';
import moment from 'moment';

import DisplayTime from './components/DisplayTime';

export default class App extends Component{

 state = {
   time: 0,
   now: 0,
   laps: [0],
   run:true,
 }

  handleStartInterval = () => {
    const now = new Date().getTime();
    timeer = setInterval(() => {
      this.setState({
        time: new Date().getTime()-now,
        run: false,
      })
    }, 100);    
  
    this.setState({    
      laps:[0]
    })
  }
    handleLapInterval = () => {
    let lap = this.state.time - this.state.laps.reduce((a,b)=> { return a+b});
    
    console.log("Lap: ", lap,"State time: ", this.state.time);
    this.setState({
      laps: [lap, ...this.state.laps]
    })
    
  }
  handleStopInterval = () => {
    clearInterval(timeer);
    let lap = this.state.time - this.state.laps.reduce((a,b)=> { return a+b});
    this.setState({
      run:true,
      laps: [lap, ...this.state.laps]
    })
  }

  render() {
    let lap = this.state.laps.map((item) => {return  <DisplayTime time={item} style={styles.textWrapList} styleContainer={styles.listWrapper} />})
    return (
     <View style={styles.container}>
       <DisplayTime time={this.state.time} style={styles.textWrap} styleContainer={styles.wrapper}/>
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
 textWrap:{
  width:30,
  fontSize:20,
  fontWeight: 'bold',
},
 list:{
    flex:1,
     justifyContent:'center',
   alignItems:'center', 
 },
 listText:{
   fontSize:10,
 },
 wrapper:{    
  height:150,
  marginTop:50,
  alignItems: 'center',
  justifyContent: 'center' ,
  flexDirection: 'row',
},
textWrap:{
    width:68,
    fontSize:40,
    fontWeight: 'normal',
},
listWrapper:{  
    height:30,
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center' ,
    flexDirection: 'row',
  },
  textWrapList:{
    width:45,
    fontSize:22,
    fontWeight: 'normal',
}
});
