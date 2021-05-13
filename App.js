import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './components/Login';
import Register from './components/Register';
import WelcomeTagsForm from './components/WelcomeTagsForm';
import InsidePost from './components/InsidePost';

const LoginStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }} initialRouteName="Login">
        <LoginStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <LoginStack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <LoginStack.Screen options={{ headerShown: false}} name = 'WelcomeTagsForm' component={WelcomeTagsForm} />
        <LoginStack.Screen options={{ headerShown: true}} name = 'InsidePost' component={InsidePost} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}