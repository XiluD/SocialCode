import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, SafeAreaView, Button, TextInput, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import * as ImagePicker from 'expo-image-picker';

const CreateNewPost = ({navigation}) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [16, 9],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.container}>
            <StatusBar style="auto" />
                <View style={[globalStyles.userInfoContainer, { marginTop: 25, marginBottom: 5 }]}>
                    <Image source={require('../assets/profileImage.jpg')} style={globalStyles.userInfoImage} />
                    <View style={globalStyles.userInfoTextContainer}>
                        <Text>Patricia Conde</Text>
                        <Text>@patri_conde</Text>
                    </View>
                </View>
                <View style={styles.textInputsContainer}>
                    <TextInput
                        style = {styles.textInputs}
                        placeholder = 'Title...'
                        onChangeText = {changeHandler}
                    />
                    <TextInput
                        style = {styles.textInputs}
                        placeholder = 'Subtitle...'
                        onChangeText = {changeHandler}
                    />
                </View>
                <TouchableOpacity style = {styles.uploadImageButton} onPress = {pickImage}>
                    <Image source = {require('../assets/image_48px.png')} style = {{width: 25, height: 25, marginRight: 10}}/>
                    <Text style = {{fontSize:15,fontWeight:'bold'}}>Add Image...</Text>
                </TouchableOpacity>
                <View style = {styles.bodyContainer}>
                    <View style = {styles.bodyHeader}>
                        <TouchableOpacity>
                            <Text style = {[styles.bodyHeaderIcon, {fontWeight:'bold'}]}>B</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {[styles.bodyHeaderIcon, {fontStyle:'italic', fontFamily: 'monospace'}]}>I</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {[styles.bodyHeaderIcon, {textDecorationLine:'underline'}]}>U</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {[styles.bodyHeaderIcon, {textDecorationLine:'line-through'}]}>U</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {styles.bodyHeaderIcon}>😄</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {styles.bodyHeaderIcon}>◀</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style = {styles.bodyHeaderIcon}>▶</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style = {styles.bodyTextInput}
                        placeholder = "Let's write something cool!..."
                        multiline
                        numberOfLines = {14}
                    />
                </View>
                <View style = {styles.footerButtonsContainer}>
                    <TouchableOpacity style = {styles.footerButton} onPress={() => {navigation.navigate('WelcomeTagsForm', {formSubtitle: 'Select what flags apply to your post!', confirmBackRoute: 'CreateNewPost'})}}>
                        <Image source = {require('../assets/categorize_52px.png')} style = {{width: 25, height: 25, marginRight: 10}}/>
                        <Text style = {{fontSize:15,fontWeight:'bold'}}>Flags</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.footerButton} onPress={()=> {navigation.navigate('Search')}}>
                        <Image source = {require('../assets/enter_48px.png')} style = {{width: 25, height: 25, marginRight: 10}}/>
                        <Text style = {{fontSize:15,fontWeight:'bold'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
 
const styles = StyleSheet.create({
    textInputsContainer: {
        
    },
    textInputs: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginVertical: 5,
        fontSize: 15,
        width: 290
    },
    uploadImageButton: {
        display:'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'center',
        paddingVertical: 15,
        borderRadius: 30,
        width: 290,
        marginTop:20,
        marginBottom: 20,
        backgroundColor:'#1B76FF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    bodyContainer: {
        display: 'flex',
        maxWidth: 290,
        borderWidth: 1,
        borderColor: 'grey'
    },

    bodyHeader: {
        display:'flex',
        flexDirection:'row',
        width: 290,
        justifyContent: 'space-between',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    bodyHeaderIcon: {
        fontSize: 20
    },

    bodyTextInput: {
        textAlignVertical:'top',
        paddingHorizontal: 10,
        textAlign: 'justify',
    },

    footerButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        width: 290,
    },

    footerButton: {
        display:'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'center',
        paddingVertical: 15,
        borderRadius: 30,
        width: 130,
        marginTop:15,
        marginBottom: 20,
        backgroundColor:'#1B76FF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
export default CreateNewPost;