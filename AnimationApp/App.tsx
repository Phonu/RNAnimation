import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import NoLibrary from "./tutorials/AnimatedAPI/NoLibrary";
import Basics from "./tutorials/AnimatedAPI/Basics";
import ValueXY from "./tutorials/AnimatedAPI/ValueXY";
import Interpolation from "./tutorials/AnimatedAPI/Interpolation";
import AnimationTypes from "./tutorials/AnimatedAPI/AnimationTypes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Animations</Text>
      </View>
      {/* ANIMATED API */}
      {/* <NoLibrary /> */}
      {/* <Basics /> */}
      {/* <ValueXY /> */}
      {/* <Interpolation /> */}
      <AnimationTypes />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
