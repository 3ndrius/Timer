import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, AsyncStorage} from 'react-native';

import DisplayTime from '../components/DisplayTime';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

export default class StatScreen extends Component {

    state = { 
      user: '',
      laps: [5, 10, 5, 10],
      date: '',
      count: [],      
    }
    
    componentDidMount = async () => {    
  
      // (_retrieveData = async () => {
        try { 
          const value = await AsyncStorage.getItem('Time');
          // const allValue = await AsyncStorage.getItem('allTime');
          const parseData = JSON.parse(value);
          // const allData = JSON.parse(allValue);
          if (value !== null) {
            // We have data!!

            console.log(parseData);
            // console.log(allData);
            this.setState({
              laps: parseData.laps,
              date: parseData.date,
              count: parseData.count
            })

          }
        } catch (error) {
          // Error retrieving data
        }
      // })();
      
    }
    render() {
     
      let lap = this.state.laps.map((item, index) => {
        return <View key={index} style={styles.listContainer}>
            <Text style={styles.textWrapList}>Shot: #{index}</Text>
            <DisplayTime time={item} style={styles.textWrapList} timeContainerText={styles.listTimeText} timeContainer={styles.listWrapper} displaySpeed={styles.displaySpeedMini}/>
          </View> })
        return (
          <View style={styles.container}>
     <View style={[styles.chart, {height: 250}]}>
  <LineChart
    data={{
      labels: this.state.count,
      datasets: [{
        data: this.state.laps
      }]
    }}
    width={300} // from react-native
    height={220}
    yAxisLabel={''}
    chartConfig={{
      backgroundColor: 'green',
      decimalPlaces: 1, // optional, defaults to 2dp
      backgroundGradientFrom: '#113340',
      backgroundGradientTo: '#113340',
      color: (opacity = 0.3) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 1
      }
    }}
    bezier
    style={{
      marginVertical:0,
      borderRadius: 2
    }}
  />
            </View>

            <Text >Date:{this.state.date}</Text> 


            <ScrollView style={styles.list}> 
              {lap}
          </ScrollView>
          </View>
     
        )
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
chart:{
  justifyContent:'center',
  alignItems:'flex-start',
  marginBottom: 5,
  borderWidth:1,
  marginTop:15,
  borderColor:'#485665',
  
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
