import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const RenderItem = ({ index, x, item }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  console.log({ index });

  console.log(item?.backgroundImage);
  console.log(item?.backgroundImage);

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
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <ImageBackground
        source={item.backgroundImage}
        style={styles.backgroundImage}
      >
        <Text>.</Text>

        {/* <View
          style={{
            position: "relative",
            top: "85%",
            flexDirection: "row",
            gap: 90,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <Pressable
              style={{
                paddingHorizontal: 36,
                paddingVertical: 14,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Skip</Text>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              justifyContent: "space-between",
              gap: 20,
              borderRadius: 8,
            }}
          >
            <Pressable
              style={{
                paddingHorizontal: 36,
                paddingVertical: 14,
              }}
            >
              <Text style={{ color: "black", fontSize: 16 }}>Next</Text>
            </Pressable>
          </View>
        </View> */}
      </ImageBackground>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
    // marginBottom: 120,
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
