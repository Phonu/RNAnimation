import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import NoLibrary from "./tutorials/AnimatedAPI/NoLibrary";
import Basics from "./tutorials/AnimatedAPI/Basics";
import ValueXY from "./tutorials/AnimatedAPI/ValueXY";
import Interpolation from "./tutorials/AnimatedAPI/Interpolation";
import AnimationTypes from "./tutorials/AnimatedAPI/AnimationTypes";
import EasingAnimation from "./tutorials/AnimatedAPI/EasingAnimation";
import NestedFunction from "./tutorials/AnimatedAPI/NestedFunction";
import EventAnimation from "./tutorials/AnimatedAPI/EventAnimation";
import CustomAnimatedComponent from "./tutorials/AnimatedAPI/CustomAnimatedComponent";
import LayoutAnim from "./tutorials/AnimatedAPI/LayoutAnim";
import ScrollEvent from "./tutorials/AnimatedAPI/ScrollEvent";
import RNTemplate from "./tutorials/Reanimated/RNTemplate";
import RNBasics from "./tutorials/Reanimated/RNBasics";
import SampleApp from "./tutorials/Reanimated/SampleApp";
import Method from "./tutorials/Reanimated/Method";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Animations</Text>
      </View>
      {/* ANIMATED API */}
      {/* ------------- */}
      {/* <NoLibrary /> */}
      {/* <Basics /> */}
      {/* <ValueXY /> */}
      {/* <Interpolation /> */}
      {/* <AnimationTypes /> */}
      {/* <EasingAnimation /> */}
      {/* <NestedFunction /> */}
      {/* <EventAnimation /> */}
      {/* <CustomAnimatedComponent /> */}
      {/* <LayoutAnim /> */}
      {/* <ScrollEvent /> */}
      {/* ------------- */}

      {/* Reanimated API */}
      {/* -------------- */}
      {/* <RNTemplate /> */}
      {/* <RNBasics /> */}
      {/* <SampleApp /> */}
      <Method />
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
