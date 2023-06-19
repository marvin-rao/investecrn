import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ReduxProvider from './src/store';

export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomTabNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
