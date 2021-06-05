import React, {useState} from "react";
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';


const FeedIconsBar = () => {


    const [heartCount, setHeartCount] = useState(50);
    const [retweetCount, setRetweetCount] = useState(38);
    const [commentCount, setCommentCount] = useState(15);

    const handleIconClick = (iconClicked) => {
        if (iconClicked === 'h') {
            setHeartCount(heartCount + 1);
        }
        else{
            setRetweetCount(retweetCount + 1);
        }
    };

    return (
        <View style={globalStyles.feedButtonsContainer}>
            <View style={globalStyles.feedButtonContainer}>
                <TouchableOpacity style={globalStyles.feedButtonsIcons} onPress = {() => handleIconClick('h')}>
                    <ImageBackground
                        style={globalStyles.feedIcons}
                        source={require('../assets/heart_48px.png')}
                    />
                </TouchableOpacity>
                <Text style={globalStyles.feedButtonsTextContainer}>{heartCount}</Text>
            </View>
            <View style={globalStyles.feedButtonContainer}>
                <TouchableOpacity style={globalStyles.feedButtonsIcons} onPress = {() => handleIconClick('r')}>
                    <ImageBackground
                        style={globalStyles.feedIcons}
                        source={require('../assets/retweet_100px.png')}
                    />
                </TouchableOpacity>
                <Text style={globalStyles.feedButtonsTextContainer}>{retweetCount}</Text>
            </View>
            <View style={globalStyles.feedButtonContainer}>
                <TouchableOpacity style={globalStyles.feedButtonsIcons}>
                    <ImageBackground
                        style={globalStyles.feedIcons}
                        source={require('../assets/chat_52px.png')}
                    />
                </TouchableOpacity>
                <Text style={globalStyles.feedButtonsTextContainer}>{commentCount}</Text>
            </View>
        </View>
    );
}
 
export default FeedIconsBar;