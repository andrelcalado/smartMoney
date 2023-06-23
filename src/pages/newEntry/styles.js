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
  categoryModal: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    padding: 15,
    flex: 1,
  },
  categoryModalContainer: {
    backgroundColor: Colors.background,
    borderRadius: 30,
    padding: 30,
    flex: 1,
  },
  categoryItem: {
    color: Colors.white,
  },
  categoryField: {
    fontSize: 30,
    paddingVertical: 22,
    fontWeight: '300',
  },
  categoryModalItemText: {
    fontWeight: '300',
    fontSize: 30,
    width: '100%',
    marginBottom: 20,
  },
  closeButton: {
    borderWidth: 2,
    borderColor: Colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
  },
  closeButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 15,
  },
  deleteButton: {
    backgroundColor: Colors.redDark,
  },
});
