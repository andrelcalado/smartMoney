import React from 'react';
import {View, Picker, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import FooterActions from '../../components/FooterActions';

export default function Report({navigation}) {
  return (
    <View>
      <BalancePanel />

      <View>
        <Picker>
          <Picker.Item label="Todas Categorias"></Picker.Item>
        </Picker>

        <Picker>
          <Picker.Item label="Últimos 7 Dias"></Picker.Item>
        </Picker>
      </View>

      <EntrySummary />
      <EntryList />

      <FooterActions
        onSubmit={() => {}}
        submitLabel="Salvar"
        onCancel={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
