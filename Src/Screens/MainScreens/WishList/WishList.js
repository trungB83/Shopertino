import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import EmptyScreen from "../../../Components/EmptyScreen";
import { Context as WishContext } from "../../../context/WishListContext";
import WishFlatListStyle from "./WishFlatListStyle";
const WishList = () => {
  const { state } = useContext(WishContext);
  return (
    <View style={styles.container}>
      {state.length > 0 ? (
        <FlatList
          data={state}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <WishFlatListStyle item={item} state={state} />;
          }}
        />
      ) : (
        <EmptyScreen name="WishList" />
      )}
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
