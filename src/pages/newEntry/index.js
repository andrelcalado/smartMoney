import React, {useState, useEffect} from 'react';
import Amplify, {API} from 'aws-amplify';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import BalancePanelLabel from '../../components/BalancePanel/BalancePanelLabel';
import {styles} from './styles';
import Colors from '../../styles/colors';

export default function NewEntry({navigation}) {
  const [amout, setAmout] = useState(0);
  const [aDescription, setADescription] = useState(' ');
  const [id, setId] = useState(0);

  API.get('CategoryAPI', '/entry/amout')
    .then(res => {
      console.log(res);
      if (currEntry.id != null) {
        setId(currEntry.id);
        setADescription(currEntry.description);
        setAmout(currEntry.amount);
      } else {
        setId(res.length + 1);
      }
    })
    .catch(error => {
      console.log(error);
    });

  const currEntry = navigation.getParam('currEntry', {
    id: null,
  });
  const entrys = navigation.getParam('entrys', {
    entrys: null,
  });

  const remove = () => {
    console.log('remover');
  };

  const addAmount = () => {
    API.post('CategoryAPI', '/entry', {
      body: {
        id: id,
        category: 'Alimentação',
        amount: amout,
        description: aDescription,
        entryAt: new Date(),
        latitude: 'tbm',
        longitude: 'tn',
        address: 'tb',
      },
    });
  };

  return (
    <View>
      <BalancePanelLabel currenteBalance={amout} newEntry />

      <View>
        <TextInput
          value={String(amout)}
          onChangeText={text => {
            Number(setAmout(text));
          }}
          style={styles.input}
        />
        <TextInput
          value={String(aDescription)}
          onChangeText={text => {
            String(setADescription(text));
          }}
          style={styles.input}
        />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            addAmount();
            navigation.goBack();
          }}
        />
        <Button
          title="Cancelar"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Button
          title="Excluir"
          onPress={() => {
            remove;
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}
