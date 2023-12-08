import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CalculatorScreen from './screens/CalculatorScreen';
import AboutScreen from './screens/AboutScreen';
import PreferencesScreen from './screens/PreferencesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CalculatorStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Calculator" component={CalculatorScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Calculator" component={CalculatorStack} />
        <Tab.Screen name="Preferences" component={PreferencesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
