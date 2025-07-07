import {
  View,
  StyleSheet,
  Animated,
  useAnimatedValue,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";

/*  
Interpolation is way of estimating a function at intermediate points, 
learning from the range you provided.

Its a process of estimating values between the known data points. Its like keyframes.]
you can interpolate animated values using .interpolate which takes an input range that
interpolates and maps the values to an output Range 

TYPES: "clamp", "extent", "identity"
clamp: restricting within a range
extent: allow output to go beyond the range.
identity: output matches the input directly.

Extrapolation
Predicting something beyond tge known range.

Types: "extraPoldateLeft", "extraPoldateRight"

Animation: 
1. Animation.timing
2. Animation.decay
3. Animation.spring

Easing: way of animation or movement starts and ends, instead moving at constant speed.
variant of transistion 
Easying function cheet sheet: https://easings.net/
custom easying:  https://cubic-bezier.com/

*/

const Interpolation = () => {
  const animatedValue = useAnimatedValue(0);
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const startInterpolation = () => {
    Animated.timing(animatedValue, {
      toValue: 4,
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startInterpolation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-200, 200],
                  extrapolate: "clamp", //clamp, extent, identity
                  //   extrapolateLeft: "clamp",
                  //   extrapolateRight: "extend",
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 120,
    backgroundColor: "green",
  },
});

export default Interpolation;
