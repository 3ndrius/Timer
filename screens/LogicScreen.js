import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import { StyleSheet, Text, View, ScrollView, Button, Alert,  Image, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import moment from 'moment';
// import Storage from 'react-native-storage';
// import AsyncStorage from '@react-native-community/async-storage';

import DisplayTime from '../components/DisplayTime';

class LogicScreen extends Component {
  
    state = {
        time: 0,
        now: 0,
        laps: [0],
        run:true,
        data: [],
        lists: []
        
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
           laps:[0],
           now: moment().format("MMM Do YY"),
         })
       }
         handleLapInterval = () => {
         let lap = this.state.time - this.state.laps.reduce((a,b)=> { return a+b});
         this.setState({
           laps: [...this.state.laps, lap],
         })  
       }
       handleStopInterval = () => {
         clearInterval(timeer);
         let lap = this.state.time - this.state.laps.reduce((a,b)=> { return a+b});
         this.setState({
           run:true,
           laps: [...this.state.laps, lap],
         })
       }
       handleSave = () => {  
        const now = new Date().getTime();
        const count = this.state.laps.map((item, index) => index)
        let user = {
          name: 'John',
          date: this.state.now,
          laps: this.state.laps,
          count: count,     
        };
        this.setState({
          lists: [...this.state.lists, user],
        });
           console.log("Lists: ", this.state.lists);
        (_storeData = async () => {
          try {
            await AsyncStorage.setItem('Tasks',JSON.stringify(user));
          } catch (error) {
            // Error saving data
          }
        })();
          Alert.alert('Data saved successfully');   
       }
           
     handleNavigateStat = () => {
        this.props.navigation.navigate('Statistics', {
        
        });        
     }
     handleNavigateUser = () => {
      this.props.navigation.navigate('AddUser');
   }
       render() {
        
         let lap = this.state.laps.map((item, index) => {
           return <View key={index} style={styles.listContainer}>
               <Text style={styles.textWrapList}>Shot: #{index}</Text>
               <DisplayTime time={item} style={styles.textWrapList} timeContainerText={styles.listTimeText} timeContainer={styles.listWrapper} displaySpeed={styles.displaySpeedMini}/>
             </View> })
         return (
          <View style={styles.container}>
     
          
            <View style={styles.controlTop}>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.toggleDrawer()}} >
              <Image source={require('../assets/images/cube.png')} />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {this.handleNavigateUser()}} >
            <Image source={require('../assets/images/add-person.png')} />
            </TouchableWithoutFeedback>
            </View>
     
            <DisplayTime time={this.state.time} speed={this.state.speed} timeContainerText={styles.timeContainerText} timeContainer={styles.timeContainer} click={this.handleLapInterval} timeBorderWrap={styles.timeBorderWrap} displaySpeed={styles.displaySpeed}/>
            
            <View style={styles.controlBottom}><Text style={styles.controlText}>Time: {this.state.now}</Text>
            <TouchableWithoutFeedback  onPress={this.handleSave} >
            <Image source={require('../assets/images/save.png')} />
            </TouchableWithoutFeedback>
            </View>
            <ScrollView style={styles.list}> 
              {lap}
            </ScrollView>
     
     
            <View style={styles.control}>   
               {
               this.state.run ?
                 <Buttons  title="Start Time" color='#F6F7EB' click={this.handleStartInterval}  background='#485665' />
                   :
                 <Buttons  title="Stop Time" color='#F6F7EB' click={this.handleStopInterval}  background='#485665' />
               }
               <Buttons  title="User Stat" color='#F6F7EB' background='#485665'  click={this.handleNavigateStat} />
            </View>
     
           
          </View>
         );
       }
     }
     const styles = StyleSheet.create({
       container: {
         flex:1,
         backgroundColor: '#113340',
         alignItems: 'stretch',
         paddingLeft: 20,
         paddingRight:20,
         paddingTop:25
       },
       control:{
         height:50,
         alignItems: 'center',
         justifyContent: 'space-between',  
         flexDirection:'row'
       },
       controlTop:{
         height:35,
         alignItems: 'flex-end',
         justifyContent: 'space-between',  
         flexDirection:'row',
         
       },
       controlBottom:{
         height:20,
         alignItems: 'center',
         justifyContent: 'space-between',  
         flexDirection:'row',
         paddingRight: 4,
         paddingLeft:4,
       
       },
       controlText: {
         color: '#485665'
       },
       
       timerText:{
         fontWeight:'normal',
         fontSize:45,
      },
      textWrap:{
       width:30,
       fontSize:20,
       fontWeight: 'bold',
     },
     
      timeBorderWrap: {
       height:300,
       width:300,
       borderRadius:150,
       backgroundColor: '#485665',
       alignItems: 'center',
       justifyContent: 'center',
       alignSelf:'center',
       position: 'relative'
      },
     
      timeContainer: {
        height:290,
        width:290,
        borderRadius:145,
        borderWidth: 2,
        borderColor: '#ADFCF9',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#113340',
      },
     timeContainerText:{
         width:60,
         fontSize:40,
         fontWeight: 'normal',
         color: '#F6F7EB'
     },
     
     list:{
       marginTop:5,
       marginBottom:10,
       borderWidth:1,
       borderColor:'#485665',
       paddingLeft:10,
       paddingRight:10
     },
     
     listContainer: {
       justifyContent:'space-between',
       alignItems:'center',
       flexDirection:'row'
     },
     listText:{
      fontSize:10,
      
     },
     
     listWrapper:{  
         height:20,
         marginTop:4,
         alignItems: 'center',
         justifyContent: 'center' ,
         flexDirection: 'row',
       },
       textWrapList:{
       
         fontSize:11,
         fontWeight: 'normal',
         color:'#F6F7EB',
     },
     listTimeText:{
       color:'#ADFCF9',
     },

     displaySpeed: {
       position: 'absolute',
       bottom: 80,
       left: 120,
       color: '#ADFCF9',
 
       
     },
     displaySpeedMini: {
      

      color: 'white',
      fontSize:7,
      display: 'none'
     }
     });
     
export default LogicScreen;