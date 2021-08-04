import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatsOpen = ({ route }) => {
    const { userTalkingWith } = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Would you like to join us ??? We are looking for people that would like to collaborate!",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: userTalkingWith.userImage,
                },

            },
            {
                _id: 2,
                text: "I'm fine thanks!. Working in a new project with some guys I met in the App.",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: userTalkingWith.userImage,
                },

            },
            {
                _id: 3,
                text: "Hey what's up brother!",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: userTalkingWith.userImage,
                },

            },
            {
                _id: 4,
                text: 'How are you today? Have you seen the last post of Carla?',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: userTalkingWith.userImage,
                },

            },
            {
                _id: 5,
                text: 'Ey',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: userTalkingWith.userImage,
                },

            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            placeholder="Send a message..."
        />
    );
}

export default ChatsOpen;