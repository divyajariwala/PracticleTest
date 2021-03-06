import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import signin from '../Screens/Signin/Signin';
import signup from '../Screens/Signup/Signup';
import homescreen from '../Screens/ContactPage/ContactPage';
import editdetails from '../Screens/EditDetails/EditDetails';
import adddetails from '../Screens/AddDetails/AddDetails';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={signin} />
      <Stack.Screen name="Register" component={signup} />
      <Stack.Screen name="homescreen" component={homescreen} />
      <Stack.Screen name="editdetails" component={editdetails} />
      <Stack.Screen name="adddetails" component={adddetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
