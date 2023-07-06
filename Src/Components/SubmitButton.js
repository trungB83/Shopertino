import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import color from "../Constants/color";
const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.Submit}>Order</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "70%",
    backgroundColor: color.primary,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: { height: 3, width: 3 },
    shadowRadius: 2.5,
    elevation: 3,
  },
  Submit: { fontSize: 24, fontWeight: "bold", color: color.white },
});
