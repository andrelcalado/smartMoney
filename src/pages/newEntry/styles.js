import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export const styles = StyleSheet.create({
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
  inputPrice: {
    textAlign: 'right',
    width: '100%',
  },
  featuresButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 60,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  featureButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 50,
    padding: 17,
  },
  amountContainer: {
    position: 'relative',
    width: '80%',
    alignSelf: 'center',
  },
  debitSign: {
    fontSize: 40,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontWeight: '500',
    color: Colors.white,
  },
  debitSignContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 5,
  },
  categoryItem: {
    color: Colors.white,
  },
  categoryField: {
    fontSize: 30,
    paddingVertical: 22,
    fontWeight: '300',
  },
  deleteButton: {
    backgroundColor: Colors.redDark,
  },
});
