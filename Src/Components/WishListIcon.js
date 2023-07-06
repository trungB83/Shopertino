import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Context as WishContext } from "../context/WishListContext";
const WishListIcon = ({ id }) => {
  const { state } = useContext(WishContext);
  const available = state.find((item) => {
    return item.id === id;
  });
  return (
    <View style={styles.container}>
      {available ? (
        <AntDesign name="heart" size={27} color="red" />
      ) : (
        <AntDesign name="hearto" size={27} color="black" />
      )}
    </View>
  );
};

export default WishListIcon;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
