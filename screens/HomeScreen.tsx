import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from '../assets/dummy-data/ChatRooms';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData}
        renderItem={ ({ item }) => <ChatRoomItem chatRoom={item} /> }
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {},
});
