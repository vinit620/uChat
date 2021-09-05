import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ChatRoomItem({ chatRoomData }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: chatRoomData.users[1].imageUri }}
        style={styles.image}
      />

      {chatRoomData.numberOfMessages ? (
        <View style={styles.numberView}>
          <Text style={styles.number}>{chatRoomData.numberOfMessages}</Text>
        </View>
      ) : null}

      <View style={styles.row}>
        <View style={styles.rightTop}>
          <Text style={styles.name}>{chatRoomData.users[1].name}</Text>
          <Text style={styles.text}>{chatRoomData.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoomData.lastMessage.content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  numberView: {
    backgroundColor: "#3777f0",
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    position: "absolute",
    top: 10,
    left: 46,
  },
  number: {
    alignSelf: "center",
    color: "white",
    fontSize: 13,
  },
  row: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  rightTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
  },
});
