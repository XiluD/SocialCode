import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';
import cardsData from './cardsInfo';


const Search = ({navigation}) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
      setText(val);
    };

    const [cards, setCards] = useState(cardsData);

    const users = [
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            key: '1',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            key: '2',
        },
        {
            userName: 'Lil Bokeron',
            userImage: require('../assets/profileImage3.jpg'),
            userAccount: '@bokeron',
            key: '3',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            key: '4',
        },
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            key: '5',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            key: '6',
        },
        {
            userName: 'Lil Bokeron',
            userImage: require('../assets/profileImage3.jpg'),
            userAccount: '@bokeron',
            key: '7',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            key: '8',
        },
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            key: '9',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            key: '10',
        },
        {
            userName: 'Lil Bokeron',
            userImage: require('../assets/profileImage3.jpg'),
            userAccount: '@bokeron',
            key: '11',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            key: '12',
        },
        {
            userName: 'Carla Hash',
            userImage: require('../assets/profileImage2.jpg'),
            userAccount: '@carla_h',
            key: '13',
        },
        {
            userName: 'Net Ninja',
            userImage: require('../assets/profileImage5.jpg'),
            userAccount: '@net_ninja',
            key: '14',
        },
        {
            userName: 'John Howards',
            userImage: require('../assets/profileImage4.jpg'),
            userAccount: '@pip_john',
            key: '15',
        },
    ];

    const Card = ({ item, onPress }) => (
        <TouchableOpacity activeOpacity={0.45} onPress={onPress} style={[globalStyles.tagsCard, {marginLeft:0,marginRight:15,backgroundColor: item.backgroundColor, opacity: item.isSelected ? 0.45 : 1}]}>
            <View style={globalStyles.textImageTag}>
                <Image source={item.img} style={globalStyles.cardImage}></Image>
                <Text style={globalStyles.textImage}>{item.title}</Text>
            </View>
            <Text style={globalStyles.textTag}>{item.subtitle}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        return (
            <Card
                item={item}
                onPress={() => {
                    setCards(
                        cards.map((x) => {
                            if (item.key === x.key){
                                return {...x, isSelected: !x.isSelected}
                            }
                            return x;
                        })
                    )
                }}
            />
        );
    };
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.container}>
            <StatusBar style="auto" />
                <View style={styles.textInputContainer}>
                    <Image source={require('../assets/search_52px.png')} style={styles.textInputImage}/>
                    <TextInput
                        style = {styles.textInputs}
                        placeholder='Search categories or users...'
                        onChangeText={changeHandler} 
                    />
                </View>

                <View style={[styles.categoriesSearchContainer, {maxHeight:145}]}>
                    <Text style={styles.titleContainer}>Categories</Text>
                    <SafeAreaView>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={cards}
                            renderItem={renderItem}
                            extraData={cards}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.categoriesSearchContainer}>
                    <Text style={[styles.titleContainer, {marginLeft:1}]}>Users</Text>
                    <SafeAreaView style={{flex:1, maxHeight: 380}}>
                        <FlatList
                            data={users}
                            numColumns = {2}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
                                    <View style={[globalStyles.textImageTag, {transform: [{ scale: 0.8 }],paddingRight:45, marginLeft:-15}]}>
                                        <Image source={item.userImage} style={globalStyles.userInfoImage}/>
                                        <View style={globalStyles.userInfoTextContainer}>
                                            <Text>{item.userName}</Text>
                                            <Text>{item.userAccount}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </SafeAreaView>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    textInputContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop:30
    },
    textInputs: {
        padding: 5,
        marginVertical: 5,
        fontSize: 15,
    },
    textInputImage: {
        width:20,
        height: 20,
        marginRight:10
    },
    categoriesSearchContainer: {
        marginTop: 30,
        marginLeft:30,
    },
    titleContainer: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10
    },
});
 
export default Search;