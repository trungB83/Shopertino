import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import color from "../../../Constants/color";
import { useNavigation } from "@react-navigation/native";
const FeatrueFlatStyle = ({ item, FeatrueData }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detailes", {
          ProductId: item.id,
          currentObj: FeatrueData,
        });
      }}
      style={styles.container}
    >
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{ uri: item.img }} />
      </View>
      <View style={styles.desrciptionView}>
        <Text style={styles.priceStyle}>{`$${item.price}`}</Text>
        <Text style={styles.nameStyle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeatrueFlatStyle;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2,
    marginHorizontal: 10,
    marginVertical: 10,
    width: Dimensions.get("window").width / 1.8,
  },
  imgCont: {
    height: "68%",
    shadowColor: "#000",
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  img: {
    width: "100%",
    height: "100%",

    borderRadius: 10,
  },
  desrciptionView: {
    height: Dimensions.get("window").height * 0.08,
    justifyContent: "center",
  },
  priceStyle: {
    fontSize: 16,
    color: color.primary,
    fontWeight: "bold",
    marginVertical: 5,
  },
  nameStyle: {
    fontSize: 13,
    color: color.secondary,
    fontWeight: "bold",
    textTransform: "capitalize",
    alignSelf: "flex-start",
    textAlign: "center",
  },
});
