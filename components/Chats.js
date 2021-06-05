import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

const Chats = ({ navigation }) => {
    const userChats = [
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            date: '16:59',
            key: '1',
        },
        {
            userName: 'Lilia Donuts',
            userImage: require('../assets/profileImage6.jpg'),
            userAccount: '@lilii',
            date: '09:25',
            key: '2',
        },
        {
            userName: 'Lil Bokeron',
            userImage: require('../assets/profileImage3.jpg'),
            userAccount: '@bokeron',
            date: '13:01',
            key: '3',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            date: '21:43',
            key: '4',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            date: '14:37',
            key: '5',
        },
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            date: '16:59',
            key: '6',
        },
        {
            userName: 'Lilia Donuts',
            userImage: require('../assets/profileImage6.jpg'),
            userAccount: '@lilii',
            date: '09:25',
            key: '7',
        },
        {
            userName: 'Lil Bokeron',
            userImage: require('../assets/profileImage3.jpg'),
            userAccount: '@bokeron',
            date: '13:01',
            key: '8',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            date: '21:43',
            key: '9',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            date: '14:37',
            key: '10',
        },
    ];

    const UserContainer = ({ item, onPress }) => (
        <TouchableOpacity style={styles.userContainer} onPress={onPress}>
            <View style={[globalStyles.textImageTag, { transform: [{ scale: 0.8 }] }]}>
                <Image source={item.userImage} style={globalStyles.userInfoImage} />
                <View style={globalStyles.userInfoTextContainer}>
                    <Text>{item.userName}</Text>
                    <Text>{item.userAccount}</Text>
                </View>
            </View>
            <Text>{item.date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <StatusBar style="auto" />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={userChats}
                renderItem={({item}) => (
                    <UserContainer
                        item = {item}
                        onPress={()=>navigation.navigate('ChatsOpen', {name: item.userName, userTalkingWith: item})}
                    />
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        alignItems:'center',
        width:360,
        marginVertical:8,
        marginEnd:5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
});

export default Chats;