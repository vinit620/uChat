import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: chatRoom.users[1].imageUri }}
        style={styles.image}
      />

      {chatRoom.numberOfMessages ? (
        <View style={styles.numberView}>
          <Text style={styles.number}>{chatRoom.numberOfMessages}</Text>
        </View>
      ) : null}

      <View style={styles.row}>
        <View style={styles.rightTop}>
          <Text style={styles.name}>{chatRoom.users[1].name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  );
}
