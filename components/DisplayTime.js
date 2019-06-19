import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

export default function DisplayTime({time, style, styleContainer}) {

    const zero = (n) => n < 10 ? '0' + n : n
    const duration = moment.duration(time);
    let milisec = Math.floor(duration.milliseconds()/10);
    return (
    <View style={styleContainer}>
      <Text style={style}>{zero(duration.hours())}:</Text>
      <Text style={style}>{zero(duration.minutes())}:</Text>
      <Text style={style}>{zero(duration.seconds())},</Text>
      <Text style={style}>{zero(milisec)}</Text>
    </View>
    )
}

  