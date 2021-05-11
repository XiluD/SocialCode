import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, FlatList, SafeAreaView, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const WelcomeForm = ({ route, navigation }) => {
    const { formSubtitle } = route.params;
    const [cards, setCards] = useState([
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/python_64px.png'),
            backgroundColor: '#7AD0FF',
            key: '1'
        },
        {
            title: 'Java',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/java_96px.png'),
            backgroundColor: '#D86666',
            key: '2'
        },
        {
            title: 'Github',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/github_64px.png'),
            backgroundColor: 'white',
            key: '3'
        },
        {
            title: 'Angular',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/angularjs_96px.png'),
            backgroundColor: '#CEFFB9',
            key: '4'
        },
        {
            title: 'React',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/react_native_128px.png'),
            backgroundColor: '#FFA1D7FF',
            key: '5'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/python_64px.png'),
            backgroundColor: '#7AD0FF',
            key: '6'
        },
        {
            title: 'Java',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/java_96px.png'),
            backgroundColor: '#D86666',
            key: '7'
        },
        {
            title: 'Github',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/github_64px.png'),
            backgroundColor: 'white',
            key: '8'
        },
        {
            title: 'Angular',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/angularjs_96px.png'),
            backgroundColor: '#CEFFB9',
            key: '9'
        },
        {
            title: 'React',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/react_native_128px.png'),
            backgroundColor: '#FFA1D7FF',
            key: '10'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/python_64px.png'),
            backgroundColor: '#7AD0FF',
            key: '11'
        },
        {
            title: 'Java',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/java_96px.png'),
            backgroundColor: '#D86666',
            key: '12'
        },
        {
            title: 'Github',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/github_64px.png'),
            backgroundColor: 'white',
            key: '13'
        },
        {
            title: 'Angular',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/angularjs_96px.png'),
            backgroundColor: '#CEFFB9',
            key: '14'
        },
        {
            title: 'React',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/react_native_128px.png'),
            backgroundColor: '#FFA1D7FF',
            key: '15'
        },
        {
            title: 'React',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/react_native_128px.png'),
            backgroundColor: '#FFA1D7FF',
            key: '16'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/python_64px.png'),
            backgroundColor: '#7AD0FF',
            key: '17'
        },
        {
            title: 'Java',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/java_96px.png'),
            backgroundColor: '#D86666',
            key: '18'
        },
        {
            title: 'Github',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/github_64px.png'),
            backgroundColor: 'white',
            key: '19'
        },
        {
            title: 'Angular',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            img : require('../assets/angularjs_96px.png'),
            backgroundColor: '#CEFFB9',
            key: '20'
        },
    ]);


    const Card = ({ item, onPress }) => (
        <TouchableOpacity activeOpacity={0.45} onPress={onPress} style={[styles.tagsCard, {backgroundColor: item.backgroundColor, opacity: item.isSelected ? 0.45 : 1}]}>
            <View style={styles.textImageTag}>
                <Image source={item.img} style={styles.cardImage}></Image>
                <Text style={styles.textImage}>{item.title}</Text>
            </View>
            <Text style={styles.textTag}>{item.subtitle}</Text>
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
        /*Making all the "screen" touchable*/
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={globalStyles.container}>
                <StatusBar style="auto" />
                <Image source={require('../assets/FullColor_TransparentBg_1280x1024_72dpi_2.png')} style={globalStyles.appLogo}></Image>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitleText}>{formSubtitle}</Text>
                </View>

                <SafeAreaView style={styles.tagsCardsContainer}>
                    <FlatList
                        data={cards}
                        numColumns={2}
                        renderItem={renderItem}
                        extraData={cards}
                    />
                </SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Register')}}>
                        <Text style={globalStyles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default WelcomeForm;

const styles = StyleSheet.create({
    subtitleContainer: {
        width: 150,
        marginTop: -90
    },

    subtitleText: {
        fontSize: 15,
        textAlign: 'center'
    },

    tagsCardsContainer: {
        flex: 1,
        marginTop: 10,
    },

    tagsCard: {
        width: 150,
        height: 105,
        margin: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
    },
    textImageTag: {
        display:'flex',
        flexDirection: 'row',
        flexWrap:'nowrap',
        padding: 11,
        alignItems:'center',
    },
    textImage: {
        fontSize: 25,
        marginLeft:8,
    },
    cardImage: {
        maxWidth:30,
        maxHeight: 30,
    },
    textTag: {
        fontSize: 10,
        width: 120,
    },
    button: {
      alignItems: "center",
      paddingVertical: 15,
      borderRadius: 30,
      width: 280,
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
});