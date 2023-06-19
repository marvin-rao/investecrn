import TopActionBar from '../../components/TopActionBar';
import {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {AppTextInput} from '../../components/AppTextInput';
import {AppButton} from '../../components/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoritePet, addName} from '../../store/form/formActions';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../style/Colors';
import {FormState} from '../../store/form/formReducer';

export const FormScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>('');
  const stored = useSelector((state: FormState) => state);
  const [name, setName] = useState<string>(stored.name ?? '');
  const [favoritePet, setFavoritePet] = useState<string>(
    stored.favoritePet ?? '',
  );
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!name) {
      setError('Enter Name');
      return;
    }
    if (!favoritePet) {
      setError('Enter your favorite pet');
      return;
    }
    dispatch(addName(name));
    dispatch(addFavoritePet(favoritePet));
    setError('');
    // @ts-ignore
    navigation.navigate('ButtonsScreen');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TopActionBar title="User Details" items={[]} />
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name:</Text>
          <AppTextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          <Text style={styles.label}>Favorite Pet:</Text>
          <AppTextInput
            style={styles.input}
            value={favoritePet}
            onChangeText={setFavoritePet}
            placeholder="Enter your favorite pet"
          />
          <Text style={styles.error}>{error}</Text>
          <AppButton label="Save" onPress={handleSubmit} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    paddingVertical: 12,
  },
});
