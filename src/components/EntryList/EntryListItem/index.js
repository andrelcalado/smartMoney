import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import FeatureBall from '../../Core/FeatureBall';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {secondsToDate, threeDotsString} from '../../../utils/stringTransform';

export default function EntryListItem({entryItem, lastItem, navigation}) {
  const [dateTransformed, setDateTransformed] = useState('');

  useEffect(() => {
    const dateString = secondsToDate(entryItem.entryAt.seconds);

    setDateTransformed(
      `${dateString.getDate()}/${dateString.getMonth() + 1} ${dateString
        .toTimeString()
        .slice(0, 5)}`,
    );
  }, [entryItem]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewEntry', {currEntry: entryItem});
      }}>
      <View style={styles.featureLine}>
        <FeatureBall color={entryItem.category.color} last={lastItem} />

        <View style={styles.lineInfos}>
          <Text style={styles.descLabel}>{entryItem.description}</Text>

          <View style={styles.bottomInfos}>
            <Icon name="access-time" style={styles.infoIcon} />
            <Text style={styles.bottomInfo}>{dateTransformed}</Text>

            {entryItem.address ? (
              <>
                <Icon name="place" style={styles.infoIcon} />
                <Text style={styles.bottomInfo}>
                  {threeDotsString(entryItem.address, 16)}
                </Text>
              </>
            ) : (
              <></>
            )}
          </View>
        </View>

        <Text style={styles.lineAmount}>$ {entryItem.amount}</Text>
      </View>
    </TouchableOpacity>
  );
}
