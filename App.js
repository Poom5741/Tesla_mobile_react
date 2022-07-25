import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native-web";
import { StyleSheet, Text, View, Imagebackground } from "react-native";
import CarItem from "./component/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
