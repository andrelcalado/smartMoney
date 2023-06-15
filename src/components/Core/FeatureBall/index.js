import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export default function FeatureBall({category, last}) {
  return (
    <View style={styles.ballContent}>
      <View style={styles.ball} />

      {!last && <View style={styles.bottomLine} />}
    </View>
  );
}
