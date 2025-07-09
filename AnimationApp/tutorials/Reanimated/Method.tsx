import { View, Text, Button } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

// Alternative of doing the same with SampleApp
const Method = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "blue" },
          animatedStyles,
        ]}
      />
      <Button
        title="With timing"
        onPress={() => (offset.value = withTiming(200, { duration: 1000 }))}
      />
    </View>
  );
};

export default Method;
