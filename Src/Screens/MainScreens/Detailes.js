import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import WishListIcon from "../../Components/WishListIcon";
import color from "../../Constants/color";
import DetailesButtons from "../../Components/DetailesButtons";
import { Context as CarContext } from "../../context/CartContext";
import { Context as WishContext } from "../../context/WishListContext";

const Detailes = ({ route, navigation }) => {
  const { addItem } = useContext(CarContext);
  const { addWish } = useContext(WishContext);
  const id = route.params.ProductId;
  const myObj = route.params.currentObj;
  const currentItem = myObj.find((index) => {
    return index.id === id;
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={styles.imgStyle}
          source={{ uri: currentItem.img }}
          style={styles.imgCard}
        >
          <View style={styles.icontCont}>
            <TouchableOpacity
              onPress={() => {
                addWish(
                  currentItem.id,
                  currentItem.name,
                  currentItem.price,
                  currentItem.img
                );
              }}
            >
              <WishListIcon id={currentItem.id} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.description}>
          <Text style={styles.titleStyle}>{currentItem.name}</Text>
          <Text style={styles.priceStyle}>{` $${currentItem.price}`}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: Dimensions.get("window").height * 0.15,
            alignItems: "center",
          }}
        >
          <DetailesButtons
            name="add to bag"
            color={color.primary}
            textColor="white"
            onPress={() => {
              navigation.navigate("Home");
              addItem(
                currentItem.id,
                currentItem.name,
                currentItem.price,
                currentItem.img
              );
            }}
          />
          <DetailesButtons
            name="Pay"
            color="transparent"
            border={2}
            icon="apple1"
            textColor="black"
            onPress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Detailes;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imgCard: {
    height: Dimensions.get("window").height * 0.69,
  },
  imgStyle: { width: Dimensions.get("window").width, height: "100%" },
  icontCont: {
    padding: 20,
    justifyContent: "flex-end",
    width: 100,
    height: "100%",
  },
  description: { padding: 20, flex: 0.12, justifyContent: "center" },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.titleColor,
  },
  priceStyle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "gray",
    marginTop: 10,
  },
});
