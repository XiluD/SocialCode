import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeTagsForm from "./components/WelcomeTagsForm";
import Home from "./components/Home";
import InsidePost from "./components/InsidePost";
import CreateNewPost from "./components/CreateNewPost";
import Search from "./components/Search";
import Chats from "./components/Chats";
import ChatsOpen from "./components/ChatsOpen";
import Posts from "./components/Posts";
import MyPosts from "./components/MyPosts";
import Profile from "./components/Profile";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const LoginStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const MyPostsStack = createStackNavigator();
  const SearchStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const ChatStack = createStackNavigator();

  const HeaderLogoutButton = ({ navigation }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("Login")}
    >
      <SimpleLineIcons name="logout" size={24} color="black" />
    </TouchableOpacity>
  );
  const HomeNavigation = ({ navigation }) => {
    return (
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => null,
            headerRight: () => <HeaderLogoutButton navigation={navigation} />,
            headerRightContainerStyle: { marginRight: 15 },
          }}
        />
        <HomeStack.Screen
          name="Posts"
          component={Posts}
          options={({ route }) => ({ title: route.params.name })}
        />
        <HomeStack.Screen name="InsidePost" component={InsidePost} />
      </HomeStack.Navigator>
    );
  };

  const MyPostsNavigation = ({ navigation }) => {
    return (
      <MyPostsStack.Navigator
        initialRouteName="MyPosts"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <MyPostsStack.Screen
          name="MyPosts"
          component={MyPosts}
          options={{
            headerLeft: () => null,
            headerRight: () => <HeaderLogoutButton navigation={navigation} />,
            headerRightContainerStyle: { marginRight: 15 },
          }}
        />
        <MyPostsStack.Screen name="CreateNewPost" component={CreateNewPost} />
        <MyPostsStack.Screen options={{ headerShown: false }} name="WelcomeTagsForm" component={WelcomeTagsForm}/>
        <MyPostsStack.Screen name="InsidePost" component={InsidePost} />
      </MyPostsStack.Navigator>
    );
  };

  const SearchNavigation = ({ navigation }) => {
    return (
      <SearchStack.Navigator
        initialRouteName="Search"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <SearchStack.Screen
          name="Search"
          component={Search}
          options={{
            headerLeft: () => null,
            headerRight: () => <HeaderLogoutButton navigation={navigation} />,
            headerRightContainerStyle: { marginRight: 15 },
          }}
        />
        <SearchStack.Screen name = "Profile" component={Profile}/>
      </SearchStack.Navigator>
    );
  };

  const ProfileNavigation = ({ navigation }) => {
    return (
      <ProfileStack.Navigator
        initialRouteName="Profile"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <ProfileStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerLeft: () => null,
            headerRight: () => <HeaderLogoutButton navigation={navigation} />,
            headerRightContainerStyle: { marginRight: 15 },
          }}
        />
        <ProfileStack.Screen name="InsidePost" component={InsidePost} />
      </ProfileStack.Navigator>
    );
  };

  const ChatNavigation = ({ navigation }) => {
    return (
      <ChatStack.Navigator
        initialRouteName="Chats"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <ChatStack.Screen
          name="Chats"
          component={Chats}
          options={{
            headerLeft: () => null,
            headerRight: () => <HeaderLogoutButton navigation={navigation} />,
            headerRightContainerStyle: { marginRight: 15 },
          }}
        />
        <ChatStack.Screen
          name="ChatsOpen"
          component={ChatsOpen}
          options={({ route }) => ({
            title: `Talking with ${route.params.name}`,
          })}
        />
      </ChatStack.Navigator>
    );
  };

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeNavigation") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "MyPostsNavigation") {
              iconName = focused ? "documents" : "documents";
            } else if (route.name === "SearchNavigation") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "ChatNavigation") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "ProfileNavigation") {
              iconName = focused ? "user-circle" : "user-circle-o";
              return <FontAwesome name={iconName} size={size} color={color} />;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#1B76FF",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{ title: "Home" }}
        />

        <Tab.Screen
          name="MyPostsNavigation"
          component={MyPostsNavigation}
          options={{ title: "My Posts" }}
        />

        <Tab.Screen
          name="SearchNavigation"
          component={SearchNavigation}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="ChatNavigation"
          component={ChatNavigation}
          options={{ title: "Chats" }}
        />
        <Tab.Screen
          name="ProfileNavigation"
          component={ProfileNavigation}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
        initialRouteName="Login"
      >
        <LoginStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <LoginStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <LoginStack.Screen
          options={{ headerShown: false }}
          name="WelcomeTagsForm"
          component={WelcomeTagsForm}
        />
        <LoginStack.Screen
          options={{ headerShown: false }}
          name="HomeTabs"
          component={HomeTabs}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
