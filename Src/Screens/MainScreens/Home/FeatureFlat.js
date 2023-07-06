import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import color from "../../../Constants/color";
import { FeatrueData } from "../../../Constants/ProdcutsItem";
import FeatrueFlatStyle from "./FeatrueFlatStyle";
const FeatureFlat = () => {
  return (
    <>
      <Text style={styles.titleStyle}>Featuerd</Text>
      <FlatList
        data={FeatrueData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => {
          item.id.toString();
        }}
        renderItem={({ item }) => {
          return <FeatrueFlatStyle item={item} FeatrueData={FeatrueData} />;
        }}
      />
    </>
  );
};

export default FeatureFlat;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 22,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: color.titleColor,
  },
});
