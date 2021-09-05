import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatRoomItem() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"}} style={styles.image}/>
      <View style={styles.numberView}>
        <Text style={styles.number}>4</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.rightTop}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>2 hrs</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hii there! Which tech stack are u currently working on?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  numberView: {
    backgroundColor: '#3777f0',
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    top: 10,
    left: 46
  },
  number: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 13,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  rightTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15,
    color: 'grey'
  }
});
