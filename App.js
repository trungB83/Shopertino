import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navigation from "./Src/Navigation/Navigation";
import { Provider as WishProvider } from "./Src/context/WishListContext";
import { Provider as CartProvider } from "./Src/context/CartContext";
import { Provider as OrderProvider } from "./Src/context/OrdersContext";

const App = () => {
  return (
    <CartProvider>
      <WishProvider>
        <OrderProvider>
          <View style={styles.container}>
            <Navigation />
            <StatusBar style="auto" />
          </View>
        </OrderProvider>
      </WishProvider>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
