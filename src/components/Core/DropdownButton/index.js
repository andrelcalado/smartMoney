import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function DropdownButton({label, onPress}) {
  return (
    <TouchableOpacity style={styles.dropdownField} onPress={onPress}>
      <Text style={styles.dropdownLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
