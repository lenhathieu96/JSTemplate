import {StyleSheet} from 'react-native';
import {Color} from '@utils/color';

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 10,
  },

  label: {
    marginHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
