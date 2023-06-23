import React from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Colors from '../../styles/colors';

export default function Dropdown({
  visible,
  setVisible,
  data,
  onChange,
  unitLabel,
}) {
  const onChangeItem = item => {
    setVisible(false);
    onChange(item);
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(!visible)}>
      <View style={styles.categoryModal}>
        <View style={styles.categoryModalContainer}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              const currItem = item.data ? item.data() : item;

              return (
                <TouchableOpacity onPress={() => onChangeItem(currItem)}>
                  <Text
                    style={[
                      styles.input,
                      styles.categoryModalItemText,
                      {color: currItem.color || Colors.white},
                    ]}
                    key={index}>
                    {currItem.name || `${currItem} ${unitLabel}`}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisible(false)}>
            <Text style={styles.closeButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
