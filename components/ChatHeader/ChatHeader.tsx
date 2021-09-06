import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

const ChatHeader = (props) => {
    
    return (
        <View style={styles.root}>
            <View  style={styles.left}>
                <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg"}} style={styles.image}/>
                <Text style={styles.text}>{props.children}</Text>
            </View>
            <View style={styles.iconView}>
                <Entypo name="camera" size={24} color="black" style={styles.icons} />
                <Feather name="edit-2" size={22} color="black" style={styles.icons} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 0.9
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        margin: 10,
        marginLeft: 0,
        height: 35,
        width: 35,
        borderRadius: 20,
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    iconView: {
        flexDirection: 'row',
        marginRight: 5,
    },
    icons: {
        marginHorizontal: 10
    },
});

export default ChatHeader;
