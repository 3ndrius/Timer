import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

export default function DisplayTime({time, style, styleContainer}) {
    const duration = moment.duration(time);
    let milisec = Math.floor(duration.milliseconds()/10);
    return (
    <View style={styleContainer}>
      <Text style={style}>{duration.hours()}:</Text>
      <Text style={style}>{duration.minutes()}:</Text>
      <Text style={style}>{duration.seconds()},</Text>
      <Text style={style}>{milisec}</Text>
    </View>
    )
}

  