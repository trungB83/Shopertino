import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const DetailesButtons = ({ name, color, border, textColor, icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color, borderWidth: border }]}
    >
      {icon && (
        <AntDesign
          name={icon}
          size={26}
          color="black"
          style={styles.iconStyle}
        />
      )}
      <Text style={[styles.textStyle, { color: textColor }]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "47%",
    height: "50%",
    flexDirection: "row",
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowOffset: { width: 5, height: 5 },
  },
  textStyle: { fontSize: 17, fontWeight: "500", textTransform: "uppercase" },
  iconStyle: { margin: 5, alignSelf: "center", marginBottom: 10 },
});
export default DetailesButtons;
