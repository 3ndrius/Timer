import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback} from 'react-native';
import moment from 'moment';

export default function DisplayTime({time, timeContainerText, timeContainer, timeBorderWrap, click, displaySpeed, speed } ) {

    const zero = (n) => n < 10 ? '0' + n : n
    const duration = moment.duration(time);
    let milisec = Math.floor(duration.milliseconds()/10);
    return (
  <TouchableWithoutFeedback  onPress={click} >
     <View style={timeBorderWrap}>
      <View style={timeContainer}>
        <Text style={timeContainerText}>{zero(duration.hours())}:</Text>
        <Text style={timeContainerText}>{zero(duration.minutes())}:</Text>
        <Text style={timeContainerText}>{zero(duration.seconds())},</Text>
        <Text style={timeContainerText}>{zero(milisec)}</Text>
        
      </View>
      <Text style={displaySpeed}>{speed} KM/h</Text>
    </View>
  </TouchableWithoutFeedback>
    )
}