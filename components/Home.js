import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, SafeAreaView, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../styles/global';
import Card from './Card';

const Home = ({navigation}) => {
    const data = [
        {
        titleContainer : 'Following',
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
            titleContainer : 'Python',
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
            titleContainer : 'Github',
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
        }
    ]

    const renderContainer = ({item}) => {
        return(
        <View style = {globalStyles.parentItemContainer}>
            <Text style = {globalStyles.itemContainerTitle}>{item.titleContainer}</Text>
            <View style = {globalStyles.itemsContainer}>
                <SafeAreaView>
                    <FlatList
                        data = {item.dataContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem = {({item}) => (<Card cardData = {item} showHeader = {true} navigation = {navigation}/>)}
                        extraData = {item.dataContainer}
                        keyExtractor = {item => item.key}
                    />
                </SafeAreaView>
            </View>
            <TouchableOpacity style={styles.showMoreButton} onPress={() => {navigation.navigate('Posts', {name: item.titleContainer})}}>
                <Text style={styles.showMoreButtonText}>Show more</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    showMoreButton: {
        alignSelf:'center',
        alignItems: "center",
        paddingVertical: 10,
        marginTop:15,
        borderRadius: 30,
        width: 150,
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
    showMoreButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default Home;