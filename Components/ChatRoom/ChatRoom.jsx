import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { Chats, Navbar, styles, Typewriter } from '../index'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { useRef, useState, useEffect } from 'react';
import { FetchFromApi } from '../../utils/FetchFromApi';
const ChatRoom = () => {
    const scrollViewRef = useRef();
    const [input, setInput] = useState('')
    const [message, setMessage] = useState('')
    const [placeholder, setPlaceholder] = useState('')
    const [chatLog, setChatLog] = useState([])
    useEffect(() => {
        FetchFromApi(message)
            .then((data) => {
                // console.log(data)r;
                !message ? '' :
                    setChatLog([...chatLog,
                    {
                        user: 'zChat',
                        query: data
                    }
                    ]);
            })
    }, [message])
    useEffect(() => {
        // setInterval(() => {
            scrollViewRef.current.scrollToEnd({ animated: true });
        // }, 1000);
      }, [chatLog]);
    setTimeout(() => {
        setPlaceholder('')
    }, 5000);
    return (
        <>
            <StatusBar style="auto" />
            <Navbar/>
            <View style={styles.container}>
                <View style={styles.text} />
                <View style={styles.bodyContainer}>
                    <View style={styles.chatContainer}>
                        <Text style={styles.name}>zChat</Text>
                        <ScrollView style={styles.Chats} ref={scrollViewRef}>
                            {
                                !chatLog.length ? '' :
                                    chatLog.map((query, index) => (
                                        <Chats
                                            message={query.query}
                                            key={index}
                                            bgColor={
                                                query.user === 'zChat' && '#1f1d1dcf'
                                            }
                                        // logo={
                                        //     query.user === 'zChat' ? logo : 'rgb(68 70 84)'
                                        // }
                                        // avtarBG={
                                        //     query.user === 'zChat' ? 'cyan' : 'transparent'
                                        // }
                                        />
                                    ))
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder={placeholder}
                            style={styles.input}
                            // onChange={(e) => setInput(e.target.)}
                            onChangeText={text => setInput(text)}
                            value={input}
                            placeholderTextColor="red"

                        />
                        <FontAwesome
                            name='paper-plane'
                            color='red'
                            onPress={() => {
                                setMessage(input)
                                input === '' ?
                                    setPlaceholder('Please enter input...') :
                                    setChatLog([...chatLog,
                                    {
                                        user: 'me',
                                        query: input
                                    }
                                    ]);
                                setInput('')
                            }}
                            style={styles.Search}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

export default ChatRoom