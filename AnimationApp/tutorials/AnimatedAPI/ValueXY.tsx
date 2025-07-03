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

  useEffect(() => {
    // startAnimation();
    startAnimationXy();
  }, []);

  return (
    <View>
      <Animated.View style={[styles.box1, { marginLeft: position }]} />
      {/* not supporting left top in native module */}
      {/* <Animated.View style={[styles.box2, xyValue.getLayout()]} /> */}
      <Animated.View
        style={[styles.box2, { transform: xyValue.getTranslateTransform() }]}
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
});

export default ValueXY;
