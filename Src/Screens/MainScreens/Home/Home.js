import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import color from "../../../Constants/color";
import HorizontalFlat from "./HorizontalFlat";
import NewArrivalCarosel from "./NewArrivalCarosel";
import FeatureFlat from "./FeatureFlat";
import BestSeller from "./BestSeller";
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageSeletorCont}>
        <HorizontalFlat />
      </View>
      <View style={styles.newArrivalItems}>
        <NewArrivalCarosel />
      </View>
      <View style={styles.FeatherItemsContainer}>
        <FeatureFlat />
      </View>
      <View style={styles.BestSellerContainer}>
        <BestSeller />
      </View>
      <TouchableOpacity style={styles.browersButtonStyle}>
        <Text style={styles.buttonTextStyle}>Browse all</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
  },
  pageSeletorCont: {
    height: Dimensions.get("window").height * 0.12,
  },
  newArrivalItems: {
    marginTop: 10,
    height:
      StatusBar.currentHeight === null
        ? Dimensions.get("window").height * 0.6
        : Dimensions.get("window").height * 0.7,
    alignItems: "center",
  },
  FeatherItemsContainer: {
    height: Dimensions.get("window").height * 0.52,
    paddingTop: 20,
  },
  BestSellerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  browersButtonStyle: {
    margin: 10,
    marginVertical: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "transparent",
    borderWidth: 1.5,
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: color.titleColor,
  },
});
