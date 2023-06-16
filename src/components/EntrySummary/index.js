import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/colors';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
import Container from '../Core/Container';

export default function EntrySummary({onPressActionButton}) {
  return (
    <Container
      title="Categorias"
      actionLabel="Últimos 7 Dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
}

const styles = StyleSheet.create({});
