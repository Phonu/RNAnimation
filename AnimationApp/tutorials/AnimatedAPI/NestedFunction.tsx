import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";
import React, { useEffect } from "react";

// loop parallel stagger delay sequence

const NestedFunction = () => {
  const animatedValue1 = useAnimatedValue(0);
  const animatedValue2 = useAnimatedValue(0);
  const animatedValue3 = useAnimatedValue(0);

  useEffect(() => {
    const sequenceAnimation = Animated.sequence([
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 0.4,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue3, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]);

    const parallelAnimation = Animated.parallel([
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 0.4,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue3, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]);

    const staggerAnimation = Animated.stagger(500, [
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 0.4,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue3, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]);
    const loopAnimation = Animated.loop(
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      { iterations: 5 }
    );
    // sequenceAnimation.start();
    // parallelAnimation.start();
    // staggerAnimation.start();
    loopAnimation.start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box1, { opacity: animatedValue1 }]} />
      <Animated.View style={[styles.box2, { opacity: animatedValue2 }]} />
      <Animated.View style={[styles.box3, { opacity: animatedValue3 }]} />
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

export default NestedFunction;
