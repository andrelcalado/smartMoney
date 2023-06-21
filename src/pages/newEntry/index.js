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
import {addEntry, updateEntry} from '../../services/entry';

export default function NewEntry({navigation}) {
  const editEntry = navigation.getParam('currEntry');
  const [categorys, setCategorys] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');
  const [debit, setDebit] = useState(1);
  const [categoryModal, setCategoryModal] = useState(false);
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
      console.log('pre', editEntry);
      console.log(
        'debit: ',
        debit,
        'amount: ',
        amount,
        '; math:',
        amount * debit,
      );
      updateEntry({
        ...editEntry,
        amount: amount < 0 && debit > 0 ? amount * -1 : amount * debit,
        description,
        category: currentCategory,
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
        <TouchableOpacity style={styles.featureButton}>
          <Icon name="camera-alt" size={40} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton}>
          <Icon name="place" size={40} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          disabled={!currentCategory}
          style={[
            styles.submitButton,
            !currentCategory && styles.disabledButton,
          ]}
          onPress={addAmount}>
          <Text
            style={[
              styles.labelSubmit,
              !currentCategory && styles.disabledButtonLabel,
            ]}>
            {editEntry ? 'Salvar' : 'Adicionar'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.buttonLabel}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
