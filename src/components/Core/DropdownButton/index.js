import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export default function DropdownButton({label, onPress}) {
  return (
    <TouchableOpacity style={styles.dropdownField} onPress={onPress}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <Icon name="keyboard-arrow-down" size={20} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
}
