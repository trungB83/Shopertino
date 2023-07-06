import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import color from "../../../Constants/color";
import { AntDesign } from "@expo/vector-icons";
import { Context as CartContext } from "../../../context/CartContext";
const CartFlatList = ({ dataList }) => {
  const { removeItem, increment } = useContext(CartContext);
  return (
    <>
      <FlatList
        data={dataList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.Card}>
              <View style={styles.imgCont}>
                <Image style={styles.img} source={{ uri: item.img }} />
              </View>
              <View style={styles.descption}>
                <Text style={styles.title}>{item.name}</Text>
                <Text
                  style={[styles.title, { fontSize: 19 }]}
                >{`$${item.price}`}</Text>
              </View>
              <View style={styles.quantatyCont}>
                <TouchableOpacity
                  style={styles.quantatyButtons}
                  onPress={() => {
                    increment(item.id, item.price, item.quantaty);
                  }}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.counterStyle}>{item.quantaty}</Text>
                <TouchableOpacity
                  style={styles.quantatyButtons}
                  onPress={() => {
                    {
                      item.quantaty > 1
                        ? removeItem(item.id, item.quantaty, item.price)
                        : Alert.alert(
                            "Remove from cart",
                            "This product will be removed from the cart",
                            [
                              {
                                text: "Remove",
                                style: "destructive",
                                onPress: () => {
                                  removeItem(
                                    item.id,
                                    item.quantaty,
                                    item.price
                                  );
                                },
                              },
                              {
                                text: "Cancel",
                                style: "default",
                                onPress: () => {
                                  return;
                                },
                              },
                            ]
                          );
                    }
                  }}
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};

export default CartFlatList;

const styles = StyleSheet.create({
  Card: {
    height: Dimensions.get("window").height / 3,
    backgroundColor: color.white,
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 15,
  },
  imgCont: {
    width: Dimensions.get("window").width / 2.8,
  },
  img: { width: "100%", height: "100%", borderRadius: 15 },
  descption: {
    width: Dimensions.get("window").width / 2.2,
    paddingVertical: 20,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.primary,
    marginBottom: 15,
  },

  quantatyCont: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  quantatyButtons: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  counterStyle: { fontSize: 20, fontWeight: "bold", color: color.primary },
});
