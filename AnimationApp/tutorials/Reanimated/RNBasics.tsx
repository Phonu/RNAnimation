import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

// progress bar example

const RNBasics = () => {
  // V C F
  const width = useSharedValue(100);
  const handlePress = () => {
    // width.value = width.value + 50;
    width.value = withSpring(width.value + 50, { duration: 3000 });
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 30 }}>
      <Animated.View style={[styles.container, { width }]} />
      <Button title="Click" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "violet",
  },
});
export default RNBasics;
