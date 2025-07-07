import {
  View,
  Text,
  StyleSheet,
  useAnimatedValue,
  Animated,
  Button,
  Easing,
} from "react-native";
import React from "react";

const EasingAnimation = () => {
  const animatedValue = useAnimatedValue(0);
  const startAnimation = (easingFunction: (value: number) => number) => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: easingFunction,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={[
          styles.box1,
          {
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      />
      <Button title="step0" onPress={() => startAnimation(Easing.step0)} />
      <Button title="step1" onPress={() => startAnimation(Easing.step1)} />
      <Button title="linear" onPress={() => startAnimation(Easing.linear)} />
      <Button title="bounce" onPress={() => startAnimation(Easing.bounce)} />
      <Button title="sin" onPress={() => startAnimation(Easing.sin)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    width: 100,
    height: 100,
    borderRadius: 120,
    backgroundColor: "green",
  },
});
export default EasingAnimation;
