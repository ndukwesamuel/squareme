import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Text,
  View,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({
  flatListRef,
  flatListIndex,
  dataLength,
  x,
  countdata,
}) => {
  // test

  // const onViewableItemsChanged = ({ viewableItems }) => {
  //   if (viewableItems[0].index !== null) {
  //     flatListIndex.value = viewableItems[0].index;
  //   }
  // };

  console.log({ s: flatListIndex.value });
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const navigation = useNavigation();

  // State to track whether we are on the last item
  const [isLastItem, setIsLastItem] = useState(false);

  console.log({ countdata: countdata });

  // Calculate the text to display on the button
  const buttonText = isLastItem ? "Get Started" : "Next";

  // Calculate the text to display on the skip button
  const skipButtonText = "Skip";

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width: isLastItem ? withSpring(140) : withSpring(60),
      height: 60,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity: isLastItem ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX: isLastItem ? withTiming(100) : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: isLastItem ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX: isLastItem ? withTiming(0) : withTiming(-100),
        },
      ],
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ["#005b4f", "#1e2169", "#F15937"]
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",

        width: "100%",
      }}
    >
      {!isLastItem && (
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Pressable
            style={{
              justifyContent: "center",
              paddingHorizontal: 36,
              paddingVertical: 14,
              // backgroundColor: "white",
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              {skipButtonText}
            </Text>
          </Pressable>
          {/* <Animated.View
            style={[styles.skipContainer, buttonAnimationStyle, animatedColor]}
          >
            <Text style={[styles.skipText]}>{skipButtonText}</Text>
          </Animated.View> */}
        </TouchableWithoutFeedback>
      )}
      <TouchableWithoutFeedback
        onPress={() => {
          if (isLastItem) {
            navigation.navigate("Home");
          } else {
            if (flatListIndex.value < dataLength - 1) {
              // Check if we are at the second last item to hide "Next"
              if (flatListIndex.value === dataLength - 2) {
                setIsLastItem(true);
              }
              flatListRef.current?.scrollToIndex({
                index: flatListIndex.value + 1,
              });
            }
          }
        }}
      >
        <Pressable
          style={{
            justifyContent: "center",
            paddingHorizontal: 36,
            paddingVertical: 14,
            backgroundColor: "white",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>{buttonText}</Text>
        </Pressable>

        {/*         
        <Animated.View
          style={[styles.container, buttonAnimationStyle, animatedColor]}
        >
          <Animated.Text style={[styles.textButton, textAnimationStyle]}>
            {buttonText}
          </Animated.Text>
          <Animated.Image
            source={require("../assets/images/ArrowIcon.png")}
            style={[styles.arrow, arrowAnimationStyle]}
          />
        </Animated.View> */}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e2169",
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row", // Display buttons horizontally
  },
  skipContainer: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    padding: 10,
    // borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row", // Display buttons horizontally
  },
  arrow: {
    position: "absolute",
  },
  textButton: { color: "white", fontSize: 16, position: "absolute" },
  skipText: { color: "white", fontSize: 16, position: "absolute" },
});
