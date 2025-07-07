import {
  View,
  Text,
  Animated,
  useAnimatedValue,
  StyleSheet,
  PanResponder,
} from "react-native";
import React, { useEffect, useReducer, useRef } from "react";

// Pan Responder, Animated.event
const EventAnimation = () => {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const scale = useAnimatedValue(1);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        Animated.spring(scale, {
          toValue: 1.2,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      // If we won't release, it will stay on the same position
      onPanResponderRelease: (evt, gestureState) => {
        Animated.parallel([
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]).start();
      },
    })
  ).current;

  // useEffect(() => {
  //   const forkedEvent = Animated.
  // },[])
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.box1,
          { transform: [...pan.getTranslateTransform(), { scale }] },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "orange",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
  },
  box3: {
    width: 100,
    borderRadius: 10,
    height: 100,
    backgroundColor: "green",
  },
});

export default EventAnimation;
