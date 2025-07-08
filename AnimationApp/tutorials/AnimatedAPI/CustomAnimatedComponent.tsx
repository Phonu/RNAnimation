import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  useAnimatedValue,
} from "react-native";
import React from "react";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const CustomAnimatedComponent = () => {
  const scaleValue = useAnimatedValue(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedTouchableOpacity
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.text}>Press on me</Text>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    width: 150,
    alignSelf: "center",
    marginTop: 200,
  },
  text: {
    fontSize: 18,
  },
});

export default CustomAnimatedComponent;
