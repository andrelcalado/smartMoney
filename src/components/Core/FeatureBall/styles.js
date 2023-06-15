import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  ballContent: {
    position: 'relative',
    marginHorizontal: 15,
  },
  ball: {
    width: 17,
    height: 17,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    borderColor: Colors.background,
    borderWidth: 2,
  },
  bottomLine: {
    width: 2,
    backgroundColor: Colors.background,
    position: 'absolute',
    bottom: -50,
    height: 50,
    left: 7,
  },
});
