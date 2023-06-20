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
import {addEntry} from '../../services/entry';

export default function NewEntry({value, navigation}) {
  const [categorys, setCategorys] = useState([]);
  const [amout, setAmout] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');
  const [debit, setDebit] = useState(value < 0 ? -1 : 1);
  const [categoryModal, setCategoryModal] = useState(false);
  const [description, setDescription] = useState('');

  const currEntry = navigation.getParam('currEntry', {
    id: null,
  });
  const entrys = navigation.getParam('entrys', {
    entrys: null,
  });

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
    console.log(amout);
  }, [amout]);

  const onChangeDebit = () => {
    if (debit < 0) {
      setDebit(1);
    } else {
      setDebit(-1);
    }
  };

  const addAmount = () => {
    addEntry({
      amount: amout * debit,
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
            Adicionar
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
