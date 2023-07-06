import React from "react";
import { FlatList } from "react-native";
import { HORIZONTAL_ITEMS } from "../../../Constants/ProdcutsItem";
import HorizontalFlatStyle from "./HorizontalFlatStyle";
const HorizontalFlat = () => {
  return (
    <FlatList
      data={HORIZONTAL_ITEMS}
      pagingEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return <HorizontalFlatStyle item={item} />;
      }}
    />
  );
};
export default HorizontalFlat;
