import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/CartContext";
export const LeftButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.toggleDrawer();
      }}
      style={styles.mainView}
    >
      <AntDesign name="bars" size={24} color="black" />
    </TouchableOpacity>
  );
};
export const RightButton = () => {
  const { state } = useContext(Context);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() => {
        navigation.navigate("Cart");
      }}
    >
      <FontAwesome5 name="shopping-bag" size={24} color="black" />
      {state.length > 0 && (
        <View style={styles.redDot}>
          <Text style={styles.numberStyle}>{state.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export const DetailesButtons = ({ name, onSubmit, color }) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onSubmit}>
      <AntDesign name={name} size={24} color={color} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  redDot: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "tomato",
    position: "absolute",
    right: 5,
    top: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  numberStyle: { fontWeight: "300", fontSize: 13, color: "white" },
});
