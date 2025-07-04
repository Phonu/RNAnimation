import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";
import React, { useEffect, useRef } from "react";

const ValueXY = () => {
  // V C F

  //   const position1 = useAnimatedValue(0);
  //   const position2 = useAnimatedValue(15);
  //   const combinedPosition = Animated.add(position1, position2);

  //   const position = useRef(new Animated.Value(0)).current;
  const position = useAnimatedValue(0);
  const xyValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const startAnimationXy = () => {
    Animated.timing(xyValue, {
      toValue: { x: 50, y: -150 },
      useNativeDriver: true,
      duration: 5000,
    }).start();
  };

  const oscillation = useAnimatedValue(0);
  const startOscillation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(oscillation, {
          toValue: 100,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(oscillation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 5 }
    ).start();
  };

  useEffect(() => {
    // startAnimation();
    // startAnimationXy();
    startOscillation();
  }, []);

  return (
    <View>
      <Animated.View style={[styles.box1, { marginLeft: position }]} />
      {/* not supporting left top in native module */}
      {/* <Animated.View style={[styles.box2, xyValue.getLayout()]} /> */}
      <Animated.View
        style={[styles.box2, { transform: xyValue.getTranslateTransform() }]}
      />
      {/*  oscillation animation using loop and sequence */}
      <Animated.View
        style={[styles.circle, { transform: [{ translateX: oscillation }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    marginBottom: 8,
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: "orange",
    marginBottom: 8,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "green",
    marginBottom: 8,
  },
});

export default ValueXY;
