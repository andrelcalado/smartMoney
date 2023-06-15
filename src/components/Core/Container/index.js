import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export default function Container({
  title,
  actionLabel,
  actionButtonText,
  onPressActionButton,
  children,
}) {
  return (
    <View style={styles.summaryContainer}>
      {title && <Text style={styles.title}> {title} </Text>}

      {children}

      {(actionLabel || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabel && <Text style={styles.actionLabel}>{actionLabel}</Text>}
          {actionButtonText && (
            <TouchableOpacity
              onPress={onPressActionButton}
              style={styles.actionButtonContainer}>
              <Icon name="insert-chart" style={styles.actionButtonIcon} />

              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
