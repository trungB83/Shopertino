import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import color from "../../../Constants/color";
import { BestSellerr } from "../../../Constants/ProdcutsItem";
import BestSellerFlatStyle from "./BestSellerFlatStyle";
const BestSeller = () => {
  const NUM_COLOMS = 2;
  return (
    <>
      <Text style={styles.titleStyle}>Best Seller</Text>
      <FlatList
        data={BestSellerr}
        numColumns={NUM_COLOMS}
        keyExtractor={(item) => {
          item.id.toString();
        }}
        renderItem={({ item }) => {
          return <BestSellerFlatStyle item={item} BestSellerr={BestSellerr} />;
        }}
      />
    </>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 22,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: color.titleColor,
  },
});
