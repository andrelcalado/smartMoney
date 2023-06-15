import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },

  addEntry: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
    fontSize: 20,
    backgroundColor: Colors.green,
    borderRadius: 50,
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    elevation: 10,
    marginTop: -25,
    marginBottom: -25,
    marginRight: 12,
  },
});
