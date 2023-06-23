import {Alert} from 'react-native';
import moment from '../utils/moment';
import firestore from '@react-native-firebase/firestore';

export const addEntry = async entry => {
  try {
    const data = {
      amount: entry.amount,
      description: entry.description,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude || '',
      longitude: entry.longitude || '',
      address: entry.address || '',
      photo: entry.photo || '',
      isInit: entry.isInit || false,
      category: entry.category,
    };

    await firestore().collection('entry').add(data);
  } catch (error) {
    console.error('addEntry :: error  on save object: ', JSON.stringify(error));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
};

export const updateEntry = async entry => {
  try {
    await firestore().collection('entry').doc(entry.id).update(entry);
  } catch (error) {
    console.error('addEntry :: error  on save object: ', JSON.stringify(error));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
};

export const getEntries = async (untilDays = 7) => {
  const date = moment().subtract(untilDays, 'days').toDate();

  const querySnapshot = await firestore()
    .collection('entry')
    .orderBy('entryAt', 'desc')
    .endBefore(date)
    .get();

  return querySnapshot.docs;
};

export const deleteEntry = async entry => {
  try {
    await firestore().collection('entry').doc(entry.id).delete();
  } catch (error) {
    console.error(
      'addEntry :: error  on delete object: ',
      JSON.stringify(error),
    );
    Alert.alert('Erro ao deletar os dados');
  }
};
