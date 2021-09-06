import { StyleSheet } from "react-native";

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

export default styles;
