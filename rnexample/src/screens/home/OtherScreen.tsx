import TopActionBar from '../../components/TopActionBar';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {Colors} from '../../style/Colors';
import {AppButton} from '../../components/AppButton';
import {useSelector} from 'react-redux';
import {FormState} from '../../store/form/formReducer';

export const OtherScreen = () => {
  const name = useSelector((state: FormState) => state.name);
  return (
    <SafeAreaView style={styles.container}>
      <TopActionBar
        title="About Us"
        items={[
          <Text style={styles.actionBarName} key={'Name'}>
            {name}
          </Text>,
        ]}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>
          Investec is a distinctive bank and wealth manager for
        </Text>

        <Text style={styles.smallText}>
          {`Investec's culture enables extraordinary people to perform in Out of
          the Ordinary ways. Our people are at the heart of your service needs.
          We believe in forming life-long partnerships with you.`}
        </Text>

        <Text style={styles.smallText}>
          {`Partner with an international Private Bank and Wealth Manager that is available to you 24/7. Our high-tech and high-touch digital offering gives you everything, everywhere, all of the time.`}
        </Text>

        <View style={{flex: 1}} />
        <AppButton
          label="Learn more"
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
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#B1BA5F',
  },
  actionBarName: {
    fontSize: 16,
    color: '#fff',
  },
  smallText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginTop: 30,
    maxWidth: 300,
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
});
