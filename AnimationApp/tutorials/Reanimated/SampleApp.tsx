import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { View, Button } from "react-native";

export default function SampleApp() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(offset.value, {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
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
        title="Move"
        onPress={() => (offset.value = Math.random() * 300)}
      />
    </View>
  );
}
