import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ScrollView, ImageBackground, TextInput, SafeAreaView, FlatList } from 'react-native';
import FeedIconsBar from './FeedIconsBar';
import { globalStyles } from '../styles/global';

const InsidePost = () => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const comments = [
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            userComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😃 😃 😃.",
            key: '1',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            userComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            key: '2',
        },
        {
            userName: 'Lil Bokeron',
            userImage: require('../assets/profileImage3.jpg'),
            userAccount: '@bokeron',
            userComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit 💘 !",
            key: '3',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            userComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            key: '4',
        },
    ]
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <ScrollView>
                <View style={globalStyles.container}>
                    <StatusBar style="auto" />
                    <View style={[globalStyles.userInfoContainer, { marginTop: 25, marginBottom: 30 }]}>
                        <Image source={require('../assets/profileImage.jpg')} style={globalStyles.userInfoImage} />
                        <View style={globalStyles.userInfoTextContainer}>
                            <Text>Patricia Conde</Text>
                            <Text>@patri_conde</Text>
                        </View>
                    </View>

                    <Image source={require('../assets/insidePostContentImage.jpg')} style={styles.postMainImage} />

                    <Text style={styles.textSubtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>

                    <Text style={styles.textBody}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea comm-
                        odo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </Text>

                    <Image source={require('../assets/insidePostBodyImage.jpg')} style={styles.bodyImages} />

                    <Text style={styles.textBody}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea comm-
                        odo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </Text>

                    <View style={styles.bodyFooterContainer}>
                        <FeedIconsBar/>
                        <Text style={styles.feedDateText}>1 Week</Text>
                    </View>

                    <Text style={{ marginTop: 30, marginRight: 185, fontSize: 18, fontWeight: 'bold'}}>Comments...</Text>
                    <View style={styles.commentInputContainer}>
                        <TextInput
                            style={styles.commentInput}
                            placeholder='Add comment...'
                            onChangeText={changeHandler}
                        />
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <SafeAreaView>
                        {comments.map(item => (
                            <View style={styles.commentContainer} key={item.key}>
                                <View style={[globalStyles.userInfoContainer,
                                { transform: [{ scale: 0.8 }], marginBottom: 20, marginTop: 10, marginRight: 180 }]}>
                                    <Image source={item.userImage} style={globalStyles.userInfoImage} />
                                    <View style={globalStyles.userInfoTextContainer}>
                                        <Text>{item.userName}</Text>
                                        <Text>{item.userAccount}</Text>
                                    </View>
                                </View>
                                <Text style={styles.commentText}>{item.userComment}</Text>
                            </View>
                        ))}
                    </SafeAreaView>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    postMainImage: {
        height: 190,
        width: 310,
        borderWidth: 1,
        borderColor: 'grey'
    },
    textSubtitle: {
        width: 300,
        textAlign: 'justify',
        marginVertical: 20,
        fontWeight: 'bold',
    },
    textBody: {
        width: 300,
        textAlign: 'justify',
    },
    bodyImages: {
        height: 180,
        width: 300,
        borderWidth: 1,
        marginVertical: 20,
        borderColor: 'grey',
    },
    bodyFooterContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        width: 290,
        justifyContent: 'space-between',
    },
    feedDateText: {
        alignSelf: 'center',
    },
    commentInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        width: 290,
    },
    commentInput: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: 200,
        marginRight: 15
    },
    submitButton: {
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 30,
        width: 100,
        backgroundColor: '#1B76FF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    submitButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'grey',
        maxWidth: 320,
        margin: 8
    },
    commentText: {
        textAlign: 'justify',
        width: 275,
        alignSelf: 'center',
        marginBottom: 20
    },
});

export default InsidePost;