import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context as CartContext } from "../../../context/CartContext";
import color from "../../../Constants/color";
import getCurrentDate from "../../../Constants/currentdate";
const OrdersFlatStyle = ({ item }) => {
  const { reOrder } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <ImageBackground
        imageStyle={styles.img}
        source={{ uri: item.orders[0].img }}
        style={styles.imgCont}
      >
        <View style={styles.titleCont}>
          <Text style={styles.title}>Order Placed</Text>
        </View>
        <View style={styles.dateCont}>
          <Text style={[styles.title, { fontWeight: "400", fontSize: 18 }]}>
            Ordered on {getCurrentDate()}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.descriptionContainer}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {item.orders.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  padding: 5,
                  flex: 1,
                  borderBottomWidth: 0.2,
                }}
              >
                <View style={styles.smallImgCont}>
                  <Image style={styles.smallImg} source={{ uri: item.img }} />
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={styles.nameStyle}>{item.name}</Text>
                  <Text style={[styles.nameStyle, { alignSelf: "center" }]}>
                    x {item.quantaty}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.fotterCont}>
        <Text style={styles.totalPriceStyle}>Total:${item.totalPrice}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack(), reOrder(item.orders);
          }}
        >
          <Text style={styles.buttonText}>reorder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersFlatStyle;

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get("window").height / 1.9,
    padding: 5,
    backgroundColor: color.white,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgCont: {
    width: "100%",
    height: "30%",
    backgroundColor: "black",
    borderRadius: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
    borderRadius: 8,
  },
  titleCont: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  title: { fontSize: 20, fontWeight: "500", color: "white" },
  dateCont: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  descriptionContainer: {
    height: Dimensions.get("window").height / 3.7,
    width: "100%",
  },
  smallImgCont: {
    width: "25%",
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },
  smallImg: { width: "100%", height: "100%", borderRadius: 10 },
  nameStyle: {
    fontSize: 17,
    fontWeight: "400",
    color: color.titleColor,
    alignSelf: "center",
    marginLeft: 10,
    marginVertical: 5,
  },
  totalPriceStyle: { fontSize: 20, fontWeight: "500", color: color.black },
  fotterCont: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "50%",
    height: "90%",
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: color.white,
    textTransform: "uppercase",
  },
});
