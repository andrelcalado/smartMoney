import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export default function FeatureBall({color, last}) {
  return (
    <View style={styles.ballContent}>
      <View style={[styles.ball, color && {backgroundColor: color}]} />

      {!last && <View style={styles.bottomLine} />}
    </View>
  );
}
