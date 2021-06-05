import React from 'react';
import { Image, StyleSheet, SafeAreaView, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Card from './Card';

const Posts = ({navigation}) => {
    const data = [
        {
        dataContainer : [
                        {
                            userImage: require('../assets/profileImage.jpg'),
                            userName: 'Patricia Conde',
                            userAccount : '@patri_conde',
                            userImagePost: require('../assets/insidePostContentImage.jpg'),
                            userPostTile: 'AdobeXd',
                            userPostSubtitle: 'Begginers Tutorial',
                            userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                            key : Math.random().toString(36).substr(2, 15)
                        },

                        {
                            userImage: require('../assets/profileImage4.jpg'),
                            userName: 'Patricia Conde',
                            userAccount : '@patri_conde',
                            userImagePost: require('../assets/insidePostContentImage.jpg'),
                            userPostTile: 'AdobeXd',
                            userPostSubtitle: 'Begginers Tutorial',
                            userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                            key : Math.random().toString(36).substr(2, 15)
                        },

                        {
                            userImage: require('../assets/profileImage3.jpg'),
                            userName: 'Patricia Conde',
                            userAccount : '@patri_conde',
                            userImagePost: require('../assets/insidePostContentImage.jpg'),
                            userPostTile: 'AdobeXd',
                            userPostSubtitle: 'Begginers Tutorial',
                            userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                            key : Math.random().toString(36).substr(2, 15)
                        },



                    ],
        key: '1'
        },

        {
            dataContainer : [
                            {
                                userImage: require('../assets/profileImage.jpg'),
                                userName: 'Patricia Conde',
                                userAccount : '@patri_conde',
                                userImagePost: require('../assets/insidePostContentImage.jpg'),
                                userPostTile: 'AdobeXd',
                                userPostSubtitle: 'Begginers Tutorial',
                                userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                                key : Math.random().toString(36).substr(2, 15)
                            },
    
                            {
                                userImage: require('../assets/profileImage4.jpg'),
                                userName: 'Patricia Conde',
                                userAccount : '@patri_conde',
                                userImagePost: require('../assets/insidePostContentImage.jpg'),
                                userPostTile: 'AdobeXd',
                                userPostSubtitle: 'Begginers Tutorial',
                                userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                                key : Math.random().toString(36).substr(2, 15)
                            },
    
                            {
                                userImage: require('../assets/profileImage3.jpg'),
                                userName: 'Patricia Conde',
                                userAccount : '@patri_conde',
                                userImagePost: require('../assets/insidePostContentImage.jpg'),
                                userPostTile: 'AdobeXd',
                                userPostSubtitle: 'Begginers Tutorial',
                                userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                                key : Math.random().toString(36).substr(2, 15)
                            },
    
    
    
                        ],
            key: '2'
            },

            {
                dataContainer : [
                                {
                                    userImage: require('../assets/profileImage.jpg'),
                                    userName: 'Patricia Conde',
                                    userAccount : '@patri_conde',
                                    userImagePost: require('../assets/insidePostContentImage.jpg'),
                                    userPostTile: 'AdobeXd',
                                    userPostSubtitle: 'Begginers Tutorial',
                                    userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                                    key : Math.random().toString(36).substr(2, 15)
                                },
        
                                {
                                    userImage: require('../assets/profileImage4.jpg'),
                                    userName: 'Patricia Conde',
                                    userAccount : '@patri_conde',
                                    userImagePost: require('../assets/insidePostContentImage.jpg'),
                                    userPostTile: 'AdobeXd',
                                    userPostSubtitle: 'Begginers Tutorial',
                                    userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                                    key : Math.random().toString(36).substr(2, 15)
                                },
        
                                {
                                    userImage: require('../assets/profileImage3.jpg'),
                                    userName: 'Patricia Conde',
                                    userAccount : '@patri_conde',
                                    userImagePost: require('../assets/insidePostContentImage.jpg'),
                                    userPostTile: 'AdobeXd',
                                    userPostSubtitle: 'Begginers Tutorial',
                                    userPostBody: 'In this tutorial we are gonna learn the basics of AdobeXd + how to prototype.',
                                    key : Math.random().toString(36).substr(2, 15)
                                },
                            ],
                key: '3'
                },

        
                    
    ]

    const renderContainer = ({item}) => {
        return(
        <View style = {globalStyles.parentItemContainer}>
            <View style = {[globalStyles.itemsContainer, {borderWidth: 0, marginLeft:25, maxWidth:380}]}>
                <View style={globalStyles.cardHeaderContainer}>
                    <View style={[globalStyles.userInfoContainer, { transform: [{ scale: 0.8 }] }]}>
                        <Image source={require('../assets/profileImage.jpg')} style={globalStyles.userInfoImage} />
                        <View style={globalStyles.userInfoTextContainer}>
                            <Text>Patricia Conde</Text>
                            <Text>@patri_conde</Text>
                        </View>
                    </View>
                    <Image style = {globalStyles.cardHeaderIcon} source={require('../assets/chevron_right_32px.png')}/>
                </View>
                <SafeAreaView>
                    <FlatList
                        data = {item.dataContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem = {({item}) => (<Card cardData = {item} showHeader = {false} navigation = {navigation}/>)}
                        extraData = {item.dataContainer}
                        keyExtractor = {item => item.key}
                    />
                </SafeAreaView>
            </View>
        </View>);
    };

    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <SafeAreaView>
                <FlatList
                    data = {data}
                    renderItem = {renderContainer}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {item => item.key}
                    extraData = {data}
                />
            </SafeAreaView>
        </View>
    );
}
 
export default Posts;