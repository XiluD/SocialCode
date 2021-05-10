import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, FlatList, SafeAreaView, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const WelcomeForm = ({ route }) => {
    const { formSubtitle } = route.params;
    const [selectedId, setSelectedId] = useState(null);
    const [cards, setCards] = useState([
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            backgroundColor: '#7AD0FF',
            key: '1'
        },
        {
            title: 'Java',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            backgroundColor: '#D86666',
            key: '2'
        },
        {
            title: 'Github',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            backgroundColor: 'white',
            key: '3'
        },
        {
            title: 'Angular',
            subtitle: "People's choice! Easy, fast and effective",
            isSelected: false,
            backgroundColor: '#CEFFB9',
            key: '4'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'blue',
            key: '5'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '6'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '7'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '8'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '9'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '10'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '11'
        },
        {
            title: 'Python',
            subtitle: "People's choice! Easy, fast and effective",
            backgroundColor: 'coral',
            key: '12'
        },
    ]);


    const Card = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={[styles.tagsCard, {backgroundColor: item.isSelected ? 'blue' : 'green'}]}>
            <View style={styles.textImageTag}>
                <Image source={require('../assets/passwordIcon.png')} style={styles.cardImage}></Image>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
            </View>
            <Text style={{ fontSize: 10 }}>{item.subtitle}</Text>
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
                /*
                onPress={() => {setSelectedId(item.key);
                item.isSelected = item.isSelected === true ? false: true;
                console.log(item.key)
                console.log(item.isSelected)}}  //Corregir con un setCards para un buen renderizado*/
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
                <Button title="Click Me!" />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default WelcomeForm;

const styles = StyleSheet.create({
    subtitleContainer: {
        width: 150,
        marginTop: -80
    },

    subtitleText: {
        fontSize: 15,
        textAlign: 'center'
    },

    tagsCardsContainer: {
        flex: 1,
        marginTop: 15,
        marginBottom: 30,
    },

    tagsCard: {
        width: 150,
        height: 110,
        margin: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
    },

    textImageTag: {
        display:'flex',
        flexDirection: 'row',

    },
    cardImage: {
        maxWidth:15,
        maxHeight: 15,
    },
});