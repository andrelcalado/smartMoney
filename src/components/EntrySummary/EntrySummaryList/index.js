import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function EntrySummaryList() {
  const entrySummary = [
    {key: '1', item: 'Alimentação', price: 200},
    {key: '2', item: 'Combustível', price: 12},
    {key: '3', item: 'Aluguel', price: 120},
    {key: '4', item: 'Lazer', price: 250},
    {key: '5', item: 'Outros', price: 1200},
  ];

  return (
    <View>
      <FlatList
        data={entrySummary}
        renderItem={({item}) => (
          <Text>
            {item.key} - {item.item}: R$ {item.price}
          </Text>
        )}
      />
    </View>
  );
}
