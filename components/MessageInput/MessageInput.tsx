import React, { useState } from "react";
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform 
} from "react-native";
import { AntDesign, Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        // send message
        console.warn('sending: ', message);
        // reset input box
        setMessage('');
    };

    const onPlusClicked = () => {
        console.warn('Plus button clicked');
    };

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    };

    return (
        <KeyboardAvoidingView 
          style={styles.root} 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
        >
          <View style={styles.inputContainer}>
            <FontAwesome5 name="smile" size={22} color="#5c5a57" style={styles.icon}/>  
            <TextInput
              value={message} 
              onChangeText={setMessage} 
              style={styles.input} 
              placeholder="Message"
            />
            <FontAwesome name="microphone" size={22} color="#5c5a57" style={styles.icon}/>
            <FontAwesome name="camera" size={22} color="#5c5a57" style={styles.icon}/>
          </View>
          <Pressable onPress={onPress} style={styles.buttonContainer}>
            { message ? <Ionicons name="send" size={20} color="white"/> : <AntDesign name="plus" size={24} color="white"/>}
          </Pressable>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 5,
    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        borderRadius: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingRight: 4,
        flex: 1,
    },
    icon: {
        margin: 10,
        alignSelf: 'center',
    },
    input: {
        fontSize: 18,
        flex: 1
    },
    buttonContainer: {
        height: 45,
        width: 45,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
});

export default MessageInput;
