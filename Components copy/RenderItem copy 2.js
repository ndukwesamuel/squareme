import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const RenderItem = ({ index, x, item }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  console.log(item?.backgroundImage);
  console.log(item?.text);

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  const backgroundImageStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  return (
    <ImageBackground
      source={item?.backgroundImage}
      style={backgroundImageStyle}
    >
      <Text style={[styles.itemText, { color: item.textColor }]}>
        {item.text}
      </Text>
    </ImageBackground>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 120,
  },
  itemText: {
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // You can also use 'contain' or 'stretch'
    justifyContent: "center", // Align content vertically
    alignItems: "center", // Align content horizontally
  },
});
