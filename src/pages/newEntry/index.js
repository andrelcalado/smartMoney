import React, {useState} from 'react';
import {API} from 'aws-amplify';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalancePanelLabel from '../../components/BalancePanel/BalancePanelLabel';
import {styles} from './styles';
import Colors from '../../styles/colors';

export default function NewEntry({value, navigation}) {
  const [amout, setAmout] = useState(0);
  const [aDescription, setADescription] = useState(' ');
  const [debit, setDebit] = useState(value < 0 ? -1 : 1);
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

  const onChangeDebit = () => {
    if (debit < 0) {
      setDebit(1);
    } else {
      setDebit(-1);
    }
  };

  const addAmount = () => {
    API.post('CategoryAPI', '/entry', {
      body: {
        id: id,
        category: 'Alimentação',
        amount: amout * debit,
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
        <View style={styles.amountContainer}>
          <TouchableOpacity
            style={styles.debitSignContainer}
            onPress={onChangeDebit}>
            <Text style={styles.debitSign}>{debit < 0 ? '-' : ''}$</Text>
          </TouchableOpacity>

          <TextInputMask
            type="money"
            options={{
              precision: 2,
              unit: '',
            }}
            value={String(amout)}
            includeRawValueInChangeText
            onChangeText={(maskedValue, rawValue) => {
              setAmout(rawValue);
            }}
            style={[styles.input, styles.inputPrice]}
          />
        </View>
        <TextInput
          value={String(aDescription)}
          onChangeText={text => {
            String(setADescription(text));
          }}
          style={styles.input}
        />
      </View>

      <View style={styles.featuresButtons}>
        <TouchableOpacity style={styles.featureButton}>
          <Icon name="camera-alt" size={40} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <Icon name="place" size={40} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            addAmount();
            navigation.goBack();
          }}>
          <Text style={styles.labelSubmit}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.buttonLabel}>Cancelar</Text>
        </TouchableOpacity>
        {/* <Button
          title="Excluir"
          onPress={() => {
            remove;
            navigation.goBack();
          }}
        /> */}
      </View>
    </View>
  );
}
