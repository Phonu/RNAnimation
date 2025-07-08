import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import React, { useState } from "react";

//resize, adding and removing views

const LayoutAnim = () => {
  const [expand, setExpand] = useState(false);

  const toogleExpand = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    LayoutAnimation.spring();
    setExpand(!expand);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toogleExpand}>
        <Text style={styles.button}>{expand ? "Collapse" : "Expand"}</Text>
      </TouchableOpacity>

      {expand && (
        <View style={styles.box}>
          <Text>This box expands and collapse</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
  box: {
    marginTop: 10,
    width: 200,
    height: 100,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LayoutAnim;
