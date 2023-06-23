import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const styles = StyleSheet.create({
  categoryModal: {
    backgroundColor: Colors.backgroundDark,
    padding: 15,
    flex: 1,
  },
  categoryModalContainer: {
    backgroundColor: Colors.background,
    borderRadius: 30,
    padding: 30,
    flex: 1,
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.asphalt,
    color: Colors.white,
    borderRadius: 11,
    marginBottom: 25,
    fontSize: 40,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  categoryModalItemText: {
    fontWeight: '300',
    fontSize: 30,
    width: '100%',
    marginBottom: 20,
  },
  closeButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 15,
  },
  closeButton: {
    borderWidth: 2,
    borderColor: Colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
  },
});
