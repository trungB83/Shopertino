import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import color from "../../../Constants/color";
import { useNavigation } from "@react-navigation/native";
const BestSellerFlatStyle = ({ item, BestSellerr }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Detailes", {
          ProductId: item.id,
          currentObj: BestSellerr,
        });
      }}
    >
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{ uri: item.img }} />
      </View>
      <View style={styles.descStyle}>
        <Text style={styles.priceStyle}>{`$${item.price}`}</Text>
        <Text style={styles.nameStyle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BestSellerFlatStyle;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2,
    height: StatusBar.currentHeight
      ? Dimensions.get("window").height * 0.39
      : Dimensions.get("window").height * 0.33,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imgCont: {
    width: 150,
    height: 180,
    shadowColor: "#000",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
  },
  img: { width: "100%", height: "100%", borderRadius: 10 },
  descStyle: {
    height: "25%",
    marginTop: 5,
    justifyContent: "space-between",
  },
  priceStyle: {
    fontSize: 16,
    color: color.primary,
    fontWeight: "bold",
    marginTop: 5,
  },
  nameStyle: {
    fontSize: 13,
    color: color.secondary,
    fontWeight: "bold",
    textTransform: "capitalize",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
});
