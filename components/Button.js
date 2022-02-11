import React, { Children } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ onPress, style, children }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{ ...styles.button, ...style }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    backgroundColor: "#ff9f00",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
});
