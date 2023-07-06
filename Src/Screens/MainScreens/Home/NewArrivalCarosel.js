import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { newArrivel } from "../../../Constants/ProdcutsItem";
import color from "../../../Constants/color";
const NewArrivalCarosel = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>New Arrivals</Text>
      <Carousel
        horizontal={true}
        data={newArrivel}
        sliderWidth={350}
        itemWidth={250}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.Carousel}
              onPress={() => {
                navigation.navigate("Detailes", {
                  ProductId: item.id,
                  currentObj: newArrivel,
                });
              }}
            >
              <View style={styles.imgCont}>
                <Image style={styles.img} source={{ uri: item.img }} />
              </View>
              <View style={styles.descView}>
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.priceStyle}>{` $${item.price}`}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default NewArrivalCarosel;

const styles = StyleSheet.create({
  Carousel: {
    width: 250,
    height: "100%",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: color.titleColor,
  },
  imgCont: {
    height: "85%",
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 9,
  },
  img: { width: "100%", height: "100%", borderRadius: 10 },
  descView: {
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 12,
    color: color.primary,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 20,
  },
  priceStyle: {
    color: color.secondary,
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
  },
});
