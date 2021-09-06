import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

const HomeHeader = () => {
    return (
        <View style={styles.root}>
            <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg"}} style={styles.image}/>
            <View style={styles.textView}>
                <Text style={styles.text}>uChat</Text>
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
        width: '98%',
        justifyContent: 'space-between'
    },
    image: {
        margin: 10,
        marginLeft: 0,
        height: 35,
        width: 35,
        borderRadius: 20,
    },
    textView: {
        alignItems: 'center',
        paddingLeft: 25,
    },
    text: {
        fontSize: 20,
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

export default HomeHeader;
