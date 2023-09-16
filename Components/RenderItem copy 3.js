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
import Pagination from "../Components/Pagination";
import CustomButton from "../Components/CustomButton";

const RenderItem = ({
  index,
  x,
  item,
  flatListRef,
  flatListIndex,
  dataLength,
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

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

  // ... Other styles

  return (
    <ImageBackground
      source={item?.backgroundImage}
      style={[styles.backgroundImage, { width: SCREEN_WIDTH }]}
    >
      <Pagination data={dataLength} x={x} />
      <CustomButton
        flatListRef={flatListRef}
        flatListIndex={flatListIndex}
        dataLength={dataLength}
        x={x}
      />
      <Text style={[styles.itemText, { color: item.textColor }]}>
        {item.text}
      </Text>
    </ImageBackground>
  );
};

export default RenderItem;

// Pagination.js (unchanged)

// CustomButton.js (unchanged)
