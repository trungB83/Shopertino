import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Context as OrderContext } from "../../../context/OrdersContext";
import EmptyScreen from "../../../Components/EmptyScreen";
import OrdersFlatStyle from "./OrdersFlatStyle";
const Orders = () => {
  const { state } = useContext(OrderContext);

  return (
    <View style={styles.container}>
      {state.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={state}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <OrdersFlatStyle item={item} />;
          }}
        />
      ) : (
        <EmptyScreen name="OrderScreen" />
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
