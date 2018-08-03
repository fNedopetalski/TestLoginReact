import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TestScreen from '../screens/TestScreen';

const TestStack = createStackNavigator({
  Test: TestScreen,
});


export default createBottomTabNavigator({
  TestStack,
});
