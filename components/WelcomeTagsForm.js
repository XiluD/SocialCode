import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, FlatList, SafeAreaView, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import cardsData from './cardsInfo';

const WelcomeTagsForm = ({ route, navigation }) => {
    const { formSubtitle, confirmBackRoute } = route.params;
    const [cards, setCards] = useState(cardsData);

    const Card = ({ item, onPress }) => (
        <TouchableOpacity activeOpacity={0.45} onPress={onPress} style={[globalStyles.tagsCard, { backgroundColor: item.backgroundColor, opacity: item.isSelected ? 0.45 : 1 }]}>
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
                            if (item.key === x.key) {
                                return { ...x, isSelected: !x.isSelected }
                            }
                            return x;
                        })
                    )
                }}
            />
        );
    };

    return (
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
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate(confirmBackRoute) }}>
                <Text style={globalStyles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeTagsForm;

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
    button: {
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 30,
        width: 280,
        marginTop: 20,
        marginBottom: 20,
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
});