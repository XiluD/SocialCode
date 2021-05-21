import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

const ChatsOpen = ({route}) => {
    const { userTalkingWith } = route.params;
    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <View style={[globalStyles.textImageTag, { transform: [{ scale: 0.8 }] }]}>
                <Image source={userTalkingWith.userImage} style={globalStyles.userInfoImage} />
                <View style={globalStyles.userInfoTextContainer}>
                    <Text>{userTalkingWith.userName}</Text>
                    <Text>{userTalkingWith.userAccount}</Text>
                </View>
            </View>
        </View>
    );
}

export default ChatsOpen;