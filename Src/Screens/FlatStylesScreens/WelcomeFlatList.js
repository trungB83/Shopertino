import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import color from "../../Constants/color";

const WelcomeFlatList = ({ item, index, intialData }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.icon}
        style={[styles.imgStyle, { resizeMode: "contain" }]}
      />
      <View style={styles.textCont}>
        <Text style={[styles.titleStyle]}>{item.title}</Text>
        <Text style={styles.subText}>{item.context}</Text>
      </View>
      {index === intialData.length - 1 && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FristScreen", { screen: "FristScreen" });
          }}
          style={[styles.buttonView]}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WelcomeFlatList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    height: "15%",
    justifyContent: "center",
    marginVertical: 50,
  },
  textCont: {
    height: "12%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 27,
    fontWeight: "bold",
    color: color.white,
    marginVertical: 20,
  },
  subText: {
    fontSize: 14,
    fontWeight: "600",
    color: color.white,
    textAlign: "center",
  },
  buttonView: {
    position: "absolute",
    width: "40%",
    height: "10%",
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
    borderWidth: 1,
    borderColor: color.white,
  },
  buttonText: {
    fontSize: 20,
    color: color.white,
    fontWeight: "300",
  },
});
