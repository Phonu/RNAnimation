import {
  View,
  Text,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";
import React from "react";

const HEADER_HEIGHT = 80;
const DATA = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

const ScrollEvent = () => {
  const scrollY = useAnimatedValue(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 40],
    extrapolate: "clamp",
  });
  const renderItem = ({ item }: any) => {
    console.log("checking itmes", item);
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Text style={styles.headerText}>Collapsible Header</Text>
      </Animated.View>

      <Animated.FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={{ marginTop: 36 }}
        contentContainerStyle={{ paddingTop: 60 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    // bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 5,
    padding: 10,
    height: HEADER_HEIGHT,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  itemContainer: {
    backgroundColor: "green",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    zIndex: 2000,
  },
  itemText: {
    fontSize: 16,
    color: "white",
  },
});
export default ScrollEvent;
