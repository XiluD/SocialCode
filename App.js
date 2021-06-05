import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from './components/Login';
import Register from './components/Register';
import WelcomeTagsForm from './components/WelcomeTagsForm';
import Home from './components/Home';
import InsidePost from './components/InsidePost';
import CreateNewPost from './components/CreateNewPost';
import Search from './components/Search';
import Chats from './components/Chats';
import ChatsOpen from './components/ChatsOpen';
import Posts from './components/Posts';

export default function App() {
  const LoginStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const SearchStack = createStackNavigator();
  const ChatStack = createStackNavigator();

  const HomeNavigation = () => {
    return(
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name = "Home" component={Home}/>
      <HomeStack.Screen name = 'Posts' component={Posts} 
          options={({ route }) => ({ title: route.params.name })}/>
      <HomeStack.Screen name = 'InsidePost' component={InsidePost}/>
    </HomeStack.Navigator>
    );
  }

  const ProfileNavigation = () => {
    /*return (
      <ProfileStack.Navigator initialRouteName = "MyPosts">
        <ProfileStack.Screen name = "MyPosts" component={MyPosts} />
        <ProfileStack.Screen name = "CreateNewPost" component={CreateNewPost} />
        <ProfileStack.Screen name = "WelcomeTagsForm" component={WelcomeTagsForm} />
      </ProfileStack.Navigator>
    );*/
  }

  const SearchNavigation = () => {
    return (
      <SearchStack.Navigator initialRouteName="Search">
        <SearchStack.Screen name = "Search" component={Search}/>
        {/*<SearchStack.Screen name = "Profile" component={Profile}/>*/}
      </SearchStack.Navigator>
    );
  }

  const ChatNavigation = () => {
    return(
    <ChatStack.Navigator initialRouteName="Chats">
      <ChatStack.Screen name = "Chats" component={Chats} />
      <ChatStack.Screen name = "ChatsOpen" component={ChatsOpen} 
        options={({ route }) => ({ title: `Talking with ${route.params.name}` })}/>
    </ChatStack.Navigator>
    );
  }

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeNavigation') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'SearchNavigation') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'ChatNavigation') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1B76FF',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="HomeNavigation" component={HomeNavigation} options={{title : 'Home'}}/>
        <Tab.Screen name="SearchNavigation" component={SearchNavigation} options={{title : 'Search'}}/>
        <Tab.Screen name="ChatNavigation" component={ChatNavigation} options={{title : 'Chats'}} />
    </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }} initialRouteName="Login">
        
        <LoginStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <LoginStack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <LoginStack.Screen options={{ headerShown: false}} name = 'WelcomeTagsForm' component={WelcomeTagsForm} />
        <LoginStack.Screen options={{ headerShown: false}} name = "HomeTabs" component = {HomeTabs}/>
        {/*
        <LoginStack.Screen options={{ headerShown: true}} name = 'Home' component={Home} />
        <LoginStack.Screen options={{ headerShown: true}} name = 'Posts' component={Posts} 
          options={({ route }) => ({ title: route.params.name })}/>

        <LoginStack.Screen options={{ headerShown: true}} name = 'InsidePost' component={InsidePost} />
        <LoginStack.Screen options={{ headerShown: true}} name = 'CreateNewPost' component={CreateNewPost} />
        <LoginStack.Screen options={{ headerShown: true}} name = 'Search' component={Search} />
        <LoginStack.Screen options={{ headerShown: true}} name = 'Chats' component={Chats} />
        <LoginStack.Screen options={{ headerShown: true}} name = 'ChatsOpen' component={ChatsOpen} />*/}
      </LoginStack.Navigator>
    </NavigationContainer>

  );
}