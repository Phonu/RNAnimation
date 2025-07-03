import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function NoLibrary() {
  // V C  F
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      setPosition((prev) => (prev < 200 ? prev + 5 : 0));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <View style={[styles.box, { marginLeft: position }]}></View>
      <View style={[styles.box, { marginLeft: position }]}></View>
      <View style={[styles.box, { marginLeft: position }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    marginBottom: 8,
  },
});
