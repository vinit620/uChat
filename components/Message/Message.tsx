import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const blue = '#3777f0';
const grey = 'lightgrey';
const myID = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id === myID;

    return (
        <View style={[styles.container, isMe ? styles.right : styles.left]}>
            <Text style={{ fontSize: 16, color: isMe ? 'black': 'white' }}>{message.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        margin: 7,
        borderRadius: 10,
        maxWidth: '75%',
    },
    left: {
        backgroundColor: blue,
        marginLeft: 10,
        marginRight: 'auto',
    },
    right: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10,
    }
});

export default Message;
