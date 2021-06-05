import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function App({navigation}) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    /*Making all the "screen" touchable*/
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={globalStyles.container}>
        <StatusBar style="auto" />

        <Image source={require('../assets/FullColor_TransparentBg_1280x1024_72dpi_2.png')} style={globalStyles.appLogo}></Image>

        <View style={globalStyles.loginContainer}>
          <View style={globalStyles.loginTextInput}>
            <Image source={require('../assets/userIcon.png')} style={globalStyles.textInputImage}></Image>
            <TextInput
              style={globalStyles.textInputText}
              placeholder='Username...'
              onChangeText={changeHandler} />
          </View>
          <View style={globalStyles.loginTextInput}>
            <Image source={require('../assets/passwordIcon.png')} style={globalStyles.textInputImage}></Image>
            <TextInput
              style={globalStyles.textInputText}
              placeholder='Password...'
              secureTextEntry={true}
              onChangeText={changeHandler} />
          </View>

          <TouchableOpacity style={globalStyles.button} onPress={()=>{navigation.navigate('HomeTabs')}}>
            <Text style={globalStyles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.loginIconsContainer}>
            <TouchableOpacity style={styles.touchableIcons} onPress={()=>{navigation.navigate('Home')}}>
              <ImageBackground
                source={require('../assets/googleIcon.png')}
                style={styles.loginIcons}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableIcons}>
              <ImageBackground
                source={require('../assets/githubIcon.png')}
                style={styles.loginIcons}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableIcons}>
              <ImageBackground
                source={require('../assets/facebookIcon.png')}
                style={styles.loginIcons}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.button} onPress={()=>{navigation.navigate('Register')}}>
            <Text style={globalStyles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  loginIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 300,
    margin: 15
  },

  touchableIcons: {
    width: 50,
    height: 50
  },

  loginIcons: {
    flex: 1,
    resizeMode: 'cover',
  },
  forgotText: {
    fontStyle: 'italic',
    fontSize: 13,
    marginTop: 2,
    marginBottom: 40
  },

});
