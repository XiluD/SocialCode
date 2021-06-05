import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard, ImageBackground } from 'react-native';
import FeedIconsBar from './FeedIconsBar';
import { globalStyles } from '../styles/global';

const Card = ({cardData, showHeader}) => {
    console.log(cardData);
    return (
        <View style={globalStyles.cardContainer}>

            {showHeader && <View style={globalStyles.cardHeaderContainer}>
                <View style={[globalStyles.userInfoContainer, { transform: [{ scale: 0.8 }] }]}>
                    <Image source={require('../assets/profileImage.jpg')} style={globalStyles.userInfoImage} />
                    <View style={globalStyles.userInfoTextContainer}>
                        <Text>Patricia Conde</Text>
                        <Text>@patri_conde</Text>
                    </View>
                </View>
                <Image style = {globalStyles.cardHeaderIcon} source={require('../assets/chevron_right_32px.png')}/>
            </View>}

            
            <TouchableOpacity style={globalStyles.cardInnerContainer}>
                <Image source={require('../assets/insidePostContentImage.jpg')} style={globalStyles.cardContainerImage} />
                <View style={globalStyles.cardContainerText}>
                    <View style={globalStyles.cardContainerTextHeader}>
                        <Text>Adobe Xd</Text>
                        <Text>Begginers Tutorial</Text>
                    </View>
                    <Text style={globalStyles.cardContainerTextBody}>
                        In this tutorial we are
                        gonna learn the basics
                        of AdobeXd + how to
                        prototype.
                    </Text>
                </View>
            </TouchableOpacity>
            <FeedIconsBar />
        </View>
    );
}

export default Card;