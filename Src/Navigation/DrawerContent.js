import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <Drawer.Section style={styles.Body}>
        <DrawerItem
          label="Home"
          labelStyle={styles.labelStyle}
          onPress={() => props.navigation.navigate("Home")}
          icon={({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
          }}
        />
        <DrawerItem
          label="Shop"
          labelStyle={styles.labelStyle}
          onPress={() => {
            props.navigation.navigate("Shop");
          }}
          icon={({ color, size }) => {
            return <FontAwesome5 name="shopify" size={size} color={color} />;
          }}
        />
        <DrawerItem
          label="Bag"
          onPress={() => {
            props.navigation.navigate("Cart");
          }}
          labelStyle={styles.labelStyle}
          icon={({ color, size }) => {
            return <SimpleLineIcons name="handbag" size={size} color={color} />;
          }}
        />

        <DrawerItem
          label="Orders"
          onPress={() => {
            props.navigation.navigate("Orders");
          }}
          labelStyle={styles.labelStyle}
          icon={({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={size}
                color={color}
              />
            );
          }}
        />
        <DrawerItem
          label="Wishlist"
          labelStyle={styles.labelStyle}
          onPress={() => {
            props.navigation.navigate("WishList");
          }}
          icon={({ color, size }) => {
            return <AntDesign name="hearto" size={size} color={color} />;
          }}
        />

        <DrawerItem
          label="logout"
          labelStyle={styles.labelStyle}
          icon={({ color, size }) => {
            return <AntDesign name="logout" size={size} color={color} />;
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: { flex: 1 },
  Body: { justifyContent: "center", height: "80%" },
  labelStyle: { fontSize: 14, fontWeight: "bold", textTransform: "uppercase" },
});
