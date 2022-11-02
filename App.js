import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "./src/screens/Home";

export default function App() {
  const person = {
    name: "Maik",
    lastName: "Broisler",
  };
  function fullName() {
    return person.name + " " + person.lastName;
  }
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
