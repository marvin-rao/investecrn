import {StyleSheet, TextInput} from 'react-native';
import {TextInputProps} from 'react-native/types';

export const AppTextInput = (props: TextInputProps) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    minHeight: 35,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 6,
    marginBottom: 14,
  },
});
