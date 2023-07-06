import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import color from "../../../Constants/color";
const HorizontalFlatStyle = ({ item }) => {
  return (
    <View style={styles.FlatView}>
      <TouchableOpacity style={styles.cardView}>
        <ImageBackground
          resizeMode={"cover"}
          style={styles.imgBackgroundStyle}
          source={{ uri: item.img }}
          imageStyle={styles.imgStyle}
        >
          <Text style={styles.titleStyle}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default HorizontalFlatStyle;

const styles = StyleSheet.create({
  FlatView: {
    width: Dimensions.get("window").width / 2.2,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },
  cardView: {
    width: "100%",
    height: "80%",
  },
  imgBackgroundStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: color.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  imgStyle: { width: "100%", height: "100%", borderRadius: 5, opacity: 0.5 },
  titleStyle: {
    fontSize: 22,
    fontWeight: "600",
    color: color.white,
    textTransform: "uppercase",
  },
});
