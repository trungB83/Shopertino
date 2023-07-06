import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { Context as CartContext } from "../../../context/CartContext";
import { Context as OrderContext } from "../../../context/OrdersContext";
import color from "../../../Constants/color";
import CartFlatList from "./CartFlatList";
import SubmitButton from "../../../Components/SubmitButton";
import EmptyScreen from "../../../Components/EmptyScreen";
const Cart = ({ navigation }) => {
  const { state, clearItems } = useContext(CartContext);
  const { addOrders } = useContext(OrderContext);
  console.log(state);
  let totalPrice = 0;
  state.map((item) => {
    return (totalPrice += item.price);
  });

  return (
    <>
      {state.length > 0 ? (
        <View style={styles.container}>
          <View style={styles.body}>
            <CartFlatList dataList={state} />
          </View>

          <View style={styles.buttonCont}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={styles.TotalStlye}>Total :</Text>
              <Text style={styles.priceStyle}>{`$${totalPrice}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <SubmitButton
                onPress={() => {
                  Alert.alert(
                    "Order Placement",
                    "Do You want To Place This Order ? ",
                    [
                      {
                        text: "Yes",
                        style: "default",
                        onPress: () => {
                          navigation.navigate("Orders");
                          addOrders(state, totalPrice);
                          clearItems();
                        },
                      },
                      {
                        text: "No",
                        style: "default",
                        onPress: () => {
                          return;
                        },
                      },
                    ]
                  );
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <EmptyScreen name="Bag" />
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5 },
  body: {
    height: Dimensions.get("window").height * 0.7,
  },
  buttonCont: {
    flex: 1,
    paddingVertical: 10,
  },

  TotalStlye: { fontSize: 18, color: color.primary, fontWeight: "400" },
  priceStyle: { fontSize: 20, color: color.primary, fontWeight: "bold" },
});
