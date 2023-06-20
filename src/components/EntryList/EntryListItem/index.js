import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import FeatureBall from '../../Core/FeatureBall';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EntryListItem({entryItem, lastItem, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewEntry', {currEntry: entryItem});
      }}>
      <View style={styles.featureLine}>
        <FeatureBall last={lastItem} />

        <View style={styles.lineInfos}>
          <Text style={styles.descLabel}>{entryItem.description}</Text>

          <View style={styles.bottomInfos}>
            <Icon name="access-time" style={styles.infoIcon} />
            <Text style={styles.bottomInfo}>{entryItem.entryAt.seconds}</Text>

            {entryItem.address ? (
              <>
                <Icon name="place" style={styles.infoIcon} />
                <Text style={styles.bottomInfo}>{entryItem.address}</Text>
              </>
            ) : (
              <></>
            )}
          </View>
        </View>

        <Text style={styles.lineAmount}>${entryItem.amount}</Text>
      </View>
    </TouchableOpacity>
  );
}
