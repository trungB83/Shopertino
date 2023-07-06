import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import color from "../../../Constants/color";
import { useNavigation } from "@react-navigation/native";
const WishFlatListStyle = ({ item, state }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.imgCont}
        onPress={() => {
          navigation.navigate("Detailes", {
            ProductId: item.id,
            currentObj: state,
          });
        }}
      >
        <Image style={styles.img} source={{ uri: item.img }} />
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.priceStyle}>${item.price}</Text>
        <Text style={styles.nameStyle}>{item.name}</Text>
      </View>
    </View>
  );
};

export default WishFlatListStyle;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 2.5,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imgCont: {
    height: "70%",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  img: { width: "100%", height: "100%", resizeMode: "cover", borderRadius: 10 },
  description: { flex: 1 },
  priceStyle: {
    fontSize: 16,
    color: color.primary,
    fontWeight: "bold",
    marginVertical: 8,
  },
  nameStyle: {
    fontSize: 13,
    color: color.secondary,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
