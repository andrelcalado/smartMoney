import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const addEntry = async entry => {
  try {
    const data = {
      amount: entry.amount,
      description: entry.description,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address,
      photo: entry.photo,
      isInit: entry.isInit || false,
      category: entry.category,
    };

    await firestore().collection('entry').add(data);
  } catch (error) {
    console.error('addEntry :: error  on save object: ', JSON.stringify(error));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
};
