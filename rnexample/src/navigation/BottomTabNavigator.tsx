import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {OtherScreen} from '../screens/home/OtherScreen';
import {FormScreen} from '../screens/FormScreen/FormScreen';
import {ButtonsScreen} from '../screens/ButtonsScreen/ButtonsScreen';
import {Colors} from '../style/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {color: 'white'},
        tabBarStyle: {backgroundColor: Colors.primary},
      }}>
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Info" component={OtherScreen} />
      <Tab.Screen name="Buttons" component={ButtonsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
