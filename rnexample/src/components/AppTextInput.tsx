import {StyleSheet, TextInput} from 'react-native';
import {TextInputProps} from 'react-native/types';
import {Colors} from '../style/Colors';

export const AppTextInput = (props: TextInputProps) => {
  return (
    <TextInput placeholderTextColor={'gray'} {...props} style={styles.input} />
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 14,
    backgroundColor: Colors.primary,
    color: '#fff',
  },
});
