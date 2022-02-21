import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../styles/colors";

const Hours = () => {
  return (
    <View style={styles.container}>
      <View style={styles.disponibleTimeContainer}>
        <Text style={styles.text}>9:12</Text>
      </View>
      <View style={styles.desableTimeContainer}>
        <Text style={styles.text}>-</Text>
      </View>
      <View style={styles.disponibleTimeContainer}>
        <Text style={styles.text}>9:12</Text>
      </View>
    </View>
  );
};

export default Hours;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disponibleTimeContainer: {
    backgroundColor: colors.secondary,
    paddingVertical: 5,
    height: 30,
    width: 50,
    borderRadius: 5,
    fontSize: 13,
    opacity: 0.7,
  },
  desableTimeContainer: {
    backgroundColor: colors.text,
    paddingVertical: 5,
    height: 30,
    width: 50,
    borderRadius: 5,
    fontSize: 13,
    opacity: 0.7,
  },
  text: {
    color: "rgb(255, 255, 255)",
    textAlign: "center",
  },
});
