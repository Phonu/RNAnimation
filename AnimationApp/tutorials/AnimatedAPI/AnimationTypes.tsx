import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";
import React, { useEffect } from "react";
import { transform } from "@babel/core";

// V C F
// Decy Spring Timings

const AnimationTypes = () => {
  const decayValue = useAnimatedValue(0);
  const animatedDecayX = decayValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 300],
  });
  const startDecay = () => {
    Animated.decay(decayValue, {
      velocity: 2,
      deceleration: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const springValue = useAnimatedValue(0);
  const animatedSpringX = {
    transform: [
      {
        translateX: springValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200],
        }),
      },
    ],
  };
  const startSpring = () => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const timingValue = useAnimatedValue(0);
  const animatedTimingX = {
    transform: [
      {
        translateX: timingValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200],
        }),
      },
    ],
  };
  const startTiming = () => {
    Animated.timing(timingValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startDecay();
    startSpring();
    startTiming();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box1, { transform: [{ translateX: animatedDecayX }] }]}
      />
      <Animated.View style={[styles.box2, animatedSpringX]} />
      <Animated.View style={[styles.box3, animatedTimingX]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    marginVertical: 10,
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});

export default AnimationTypes;
