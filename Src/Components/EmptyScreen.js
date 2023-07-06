import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import color from "../Constants/color";

const EmptyScreen = ({ name }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.contaier}>
      <Text style={styles.textStyle}>Your {name} is empty</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonTitle}>continue shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  contaier: { flex: 1, justifyContent: "center", alignItems: "center" },
  textStyle: { fontSize: 20, fontWeight: "600", color: "gray" },
  button: {
    marginTop: 25,
    width: 240,
    height: 40,
    borderRadius: 5,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "300",
    textTransform: "uppercase",
    color: "white",
  },
});
