import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';


const Register = ({navigation}) => {
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
                    <View style={styles.registerFormContainer}>
                        <View style={globalStyles.loginTextInput}>
                            <Image source={require('../assets/userIcon.png')} style={globalStyles.textInputImage}></Image>
                            <TextInput
                                style={styles.textInputText}
                                placeholder='Username...'
                                onChangeText={changeHandler} />
                        </View>
                        <View style={globalStyles.loginTextInput}>
                            <Image source={require('../assets/emailIcon2.png')} style={globalStyles.textInputImage}></Image>
                            <TextInput
                                style={styles.textInputText}
                                placeholder='Email...'
                                onChangeText={changeHandler} />
                        </View>
                        <View style={globalStyles.loginTextInput}>
                            <Image source={require('../assets/passwordIcon.png')} style={globalStyles.textInputImage}></Image>
                            <TextInput
                                style={styles.textInputText}
                                placeholder='Password...'
                                secureTextEntry={true}
                                onChangeText={changeHandler} />
                        </View>
                        <View style={globalStyles.loginTextInput}>
                            <Image source={require('../assets/passwordIcon.png')} style={globalStyles.textInputImage}></Image>
                            <TextInput
                                style={styles.textInputText}
                                placeholder='Confirm Password...'
                                secureTextEntry={true}
                                onChangeText={changeHandler} />
                        </View>
                        <View style={styles.termsContainer}>
                            <Text style={styles.termsText}>By creating an account you aggre to our Terms of Service and Privacy Policy</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={globalStyles.button} onPress={() => {navigation.navigate('WelcomeTagsForm', {formSubtitle: 'Before we start, tell us what you like!', confirmBackRoute: 'HomeTabs'})}}>
                        <Text style={globalStyles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    registerFormContainer: {
        display:'flex',
        flexWrap: 'nowrap',
        borderWidth:1,
        borderRadius:10,
        borderColor:'grey',
        paddingTop: 10,
        paddingBottom:30,
        marginTop: -25,
        marginBottom: 20
    },

    textInputText: {
        fontSize: 15,
        width: 150,
    },

    termsContainer: {
        marginTop: 10,
        width:220,
        alignSelf:'center'
    },

    termsText: {
        fontSize:10,
        textAlign:'center'
    },
});


export default Register;