import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { HORIZONTAL_ITEMS } from "../../Constants/ProdcutsItem";

const Shop = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={HORIZONTAL_ITEMS}
        keyExtractor={(item) => {
          item.id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.itemsCont}>
              <ImageBackground
                imageStyle={styles.img}
                source={{ uri: item.img }}
                style={styles.imgCont}
              >
                <Text style={styles.title}>{item.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  itemsCont: {
    height: Dimensions.get("window").height / 7,
    marginBottom: 15,
    borderRadius: 10,
  },
  imgCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },
  img: { width: "100%", height: "100%", borderRadius: 10, opacity: 0.5 },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});
