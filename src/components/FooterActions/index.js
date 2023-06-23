import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export default function FooterActions({
  submitDisable,
  submitLabel,
  onSubmit,
  onCancel,
}) {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity
        disabled={submitDisable}
        style={[styles.submitButton, submitDisable && styles.disabledButton]}
        onPress={onSubmit}>
        <Text
          style={[
            styles.labelSubmit,
            submitDisable && styles.disabledButtonLabel,
          ]}>
          {submitLabel}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.buttonLabel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
