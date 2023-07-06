//Navigation Packtages
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Navigation bar Custom Components
import {
  DetailesButtons,
  LeftButton,
  RightButton,
} from "../Components/NavigationButtons";

//Main Screens
import Home from "../Screens/MainScreens/Home/Home";
import DrawerContent from "./DrawerContent";
import Shop from "../Screens/MainScreens/Shop";
import Detailes from "../Screens/MainScreens/Detailes";
import Cart from "../Screens/MainScreens/Cart/Cart";
import WishList from "../Screens/MainScreens/WishList/WishList";
import Orders from "../Screens/MainScreens/Orders/Orders";
// Stack & Drawer objects
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();
const WishStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="Orders"
        component={Orders}
        options={{
          title: "My Orders",
          headerTitleAlign: "center",
          headerRight: () => {
            return <RightButton />;
          },
          headerLeft: () => {
            return <LeftButton />;
          },
        }}
      />
    </OrdersStack.Navigator>
  );
};
const WishListStack = ({ navigation }) => {
  return (
    <WishStack.Navigator>
      <WishStack.Screen
        name="WishListScreen"
        component={WishList}
        options={{
          title: "WishList",
          headerTitleAlign: "center",
          headerRight: () => {
            return <RightButton />;
          },
          headerLeft: () => {
            return <LeftButton />;
          },
        }}
      />
      <WishStack.Screen
        name="Detailes"
        component={Detailes}
        options={{
          headerTransparent: true,
          title: "",
          headerRight: () => {
            return <DetailesButtons name="sharealt" />;
          },
          headerLeft: () => {
            return (
              <DetailesButtons
                name="back"
                onSubmit={() => {
                  navigation.navigate("WishListScreen");
                }}
              />
            );
          },
        }}
      />
    </WishStack.Navigator>
  );
};
const HomeStackNavi = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerRight: () => {
            return <RightButton />;
          },
          headerLeft: () => {
            return <LeftButton />;
          },
        }}
      />
      <HomeStack.Screen
        name="Detailes"
        component={Detailes}
        options={{
          headerTransparent: true,
          title: "",
          headerRight: () => {
            return <DetailesButtons name="sharealt" />;
          },
          headerLeft: () => {
            return (
              <DetailesButtons
                name="back"
                onSubmit={() => {
                  navigation.navigate("Home");
                }}
              />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Your Bag",
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <DetailesButtons
                name="close"
                color="black"
                onSubmit={() => {
                  navigation.navigate("Home");
                }}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

const ShopStackNavigation = () => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Shop",
          headerTitleAlign: "center",
          headerRight: () => {
            return <RightButton />;
          },
          headerLeft: () => {
            return <LeftButton />;
          },
        }}
      />
    </ShopStack.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="DHome" component={HomeStackNavi} />
        <Drawer.Screen name="Shop" component={ShopStackNavigation} />
        <Drawer.Screen name="WishList" component={WishListStack} />
        <Drawer.Screen name="Orders" component={OrdersStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
