import TopActionBar from '../../components/TopActionBar';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {Colors} from '../../style/Colors';
import {AppButton} from '../../components/AppButton';
import {useSelector} from 'react-redux';
import {FormState} from '../../store/form/formReducer';

export const ButtonsScreen = () => {
  const name = useSelector((state: FormState) => state.name);
  return (
    <SafeAreaView style={styles.container}>
      <TopActionBar
        title="Buttons"
        items={[
          <Text style={styles.actionBarName} key={'Name'}>
            {name}
          </Text>,
        ]}
      />
      <View style={styles.formContainer}>
        <View style={{flex: 1}} />
        <Text style={styles.title}>4 Variations of a button</Text>
        <AppButton
          label="Press me"
          containerStyle={{
            backgroundColor: Colors.primary,
            marginTop: 18,
          }}
          labelStyle={{color: Colors.primaryBlue}}
        />
        <AppButton
          label="Press me"
          containerStyle={{
            backgroundColor: '#374349',
            marginTop: 18,
          }}
          labelStyle={{color: Colors.primaryBlue}}
        />
        <AppButton
          label="Press me"
          containerStyle={{
            backgroundColor: Colors.primaryBlue,
            marginTop: 18,
          }}
          labelStyle={{color: '#fff'}}
        />
        <AppButton
          label="Slide me to continue"
          containerStyle={{
            backgroundColor: Colors.primary,
            marginTop: 18,
            borderColor: 'gray',
            borderWidth: StyleSheet.hairlineWidth,
          }}
          labelStyle={{color: '#fff'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.primary,
  },
  formContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#B1BA5F',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  noTasksMessage: {
    textAlign: 'center',
    marginTop: 300,
    fontSize: 18,
  },
  actionBarName: {
    fontSize: 16,
    color: '#fff',
  },
});
