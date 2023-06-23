import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalancePanelLabel from '../../components/BalancePanel/BalancePanelLabel';
import {styles} from './styles';
import Colors from '../../styles/colors';
import {getInitCategories} from '../../services/category';
import {addEntry, deleteEntry, updateEntry} from '../../services/entry';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FooterActions from '../../components/FooterActions';

export default function NewEntry({navigation}) {
  const editEntry = navigation.getParam('currEntry');
  const [categorys, setCategorys] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');
  const [debit, setDebit] = useState(1);
  const [categoryModal, setCategoryModal] = useState(false);
  const [entryAt, setEntryAt] = useState();
  const [dateModal, setDateModal] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    getInitCategories()
      .then(res => {
        setCategorys(res);
      })
      .catch(err => {
        console.log('err:', err);
      });
  }, []);

  useEffect(() => {
    if (editEntry) {
      console.log('date', editEntry.entryAt);
      setCurrentCategory(editEntry.category);
      setDebit(editEntry.amount < 0 ? -1 : 1);
      setAmount(editEntry.amount);
      setDescription(editEntry.description);
    }
  }, [editEntry]);

  const onChangeDebit = () => {
    if (debit < 0) {
      setDebit(1);
    } else {
      setDebit(-1);
    }
  };

  const addAmount = () => {
    if (editEntry) {
      updateEntry({
        ...editEntry,
        amount: amount < 0 && debit > 0 ? amount * -1 : amount * debit,
        description,
        category: currentCategory,
        entryAt,
      })
        .then(() => {
          Alert.alert('Value edited!');
          navigation.goBack();
        })
        .catch(() => {
          Alert.alert('Erro');
        });
    } else {
      addEntry({
        amount: amount * debit,
        description,
        category: currentCategory,
        entryAt: entryAt || new Date(),
      })
        .then(() => {
          Alert.alert('Value added!');
          navigation.goBack();
        })
        .catch(() => {
          Alert.alert('Erro');
        });
    }
  };

  const onChangeCategory = item => {
    setCurrentCategory(item);
    setCategoryModal(false);
  };

  const onChangeDate = date => {
    setEntryAt(date);
    setDateModal(false);
  };

  const onDeleteEntry = () => {
    Alert.alert('Delete?', 'Do you really want to delete this?', [
      {text: 'No', style: 'cancel'},
      {
        text: 'Yes',
        onPress: () => {
          deleteEntry(editEntry)
            .then(() => {
              Alert.alert('Entry deleted!');
              navigation.goBack();
            })
            .catch(err => {
              console.log('err: ', err);
            });
        },
      },
    ]);
  };

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent
        visible={categoryModal}
        onRequestClose={() => setCategoryModal(!categoryModal)}>
        <View style={styles.categoryModal}>
          <View style={styles.categoryModalContainer}>
            <FlatList
              data={categorys}
              renderItem={({item, index}) => {
                const data = item.data();

                return (
                  <TouchableOpacity onPress={() => onChangeCategory(data)}>
                    <Text
                      style={[
                        styles.input,
                        styles.categoryModalItemText,
                        {color: data.color},
                      ]}
                      key={index}>
                      {data.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCategoryModal(false)}>
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <BalancePanelLabel currenteBalance={amount} newEntry />

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
            value={String(amount)}
            includeRawValueInChangeText
            onChangeText={(maskedValue, rawValue) => {
              setAmount(rawValue);
            }}
            style={[styles.input, styles.inputPrice]}
          />
        </View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.categoryField]}
          placeholder="Descrição"
          placeholderTextColor={Colors.white}
        />
        <TouchableOpacity onPress={() => setCategoryModal(true)}>
          <Text style={[styles.input, styles.categoryField]}>
            {currentCategory?.name || 'Categoria'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresButtons}>
        <DateTimePicker
          mode="date"
          date={entryAt}
          isVisible={dateModal}
          onConfirm={onChangeDate}
          onCancel={() => setDateModal(false)}
        />
        <TouchableOpacity
          onPress={() => setDateModal(true)}
          style={styles.featureButton}>
          <Icon name="today" size={editEntry ? 30 : 40} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <Icon
            name="camera-alt"
            size={editEntry ? 30 : 40}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <Icon name="place" size={editEntry ? 30 : 40} color={Colors.white} />
        </TouchableOpacity>

        {editEntry && (
          <TouchableOpacity
            onPress={onDeleteEntry}
            style={[styles.featureButton, styles.deleteButton]}>
            <Icon name="delete" size={30} color={Colors.white} />
          </TouchableOpacity>
        )}
      </View>

      <FooterActions
        submitDisable={!currentCategory}
        onSubmit={addAmount}
        submitLabel={editEntry ? 'Salvar' : 'Adicionar'}
        onCancel={() => {
          navigation.goBack();
        }}
      />
    </ScrollView>
  );
}
