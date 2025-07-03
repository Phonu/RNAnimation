import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const Basics = () => {
  // V C F
  // Animated Value
  // Connect to component
  // Animate with function

  const position = useRef(new Animated.Value(0)).current;
  // useRef is used to create a persistent reference to the Animated.Value.
  // initailzed only once and avoid re-rendering on change while Animation.Value changes.

  const startAnimation = () =>
    Animated.timing(position, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(position, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View>
      <Animated.View style={[styles.box, { marginLeft: position }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    marginBottom: 8,
  },
});

export default Basics;
