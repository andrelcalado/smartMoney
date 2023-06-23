import React from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export default function Dropdown({visible, setVisible, data, onChange}) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(!visible)}>
      <View style={styles.categoryModal}>
        <View style={styles.categoryModalContainer}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              const currItem = item.data ? item.data() : item;

              return (
                <TouchableOpacity onPress={() => onChange(currItem)}>
                  <Text
                    style={[
                      styles.input,
                      styles.categoryModalItemText,
                      {color: currItem.color},
                    ]}
                    key={index}>
                    {currItem.name}
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
