import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import React, { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from "react-native-reanimated";

import Pagination from "../Components/Pagination";
import CustomButton from "../Components/CustomButton";
import RenderItem from "../Components/RenderItem";

const OnboardingScreen = () => {
  const backgroundImages = [
    require("../assets/Onboarding1.png"),
    require("../assets/Onboarding1.png"),
    require("../assets/Onboarding1.png"),
    require("../assets/Onboarding1.png"),
  ];
  let data = [
    {
      id: 1,
      animation: require("../assets/animations/Lottie1.json"),
      text: "Lorem Ipsum dolor sit amet",
      textColor: "#005b4f",
      backgroundImage: require("../assets/Onboarding1.png"),
    },
    {
      id: 2,
      animation: require("../assets/animations/Lottie2.json"),
      text: "Lorem Ipsum dolor sit amet",
      textColor: "#1e2169",
      backgroundImage: require("../assets/Onboarding2.png"),
    },
    {
      id: 3,
      animation: require("../assets/animations/Lottie3.json"),
      text: "Lorem Ipsum dolor sit amet",
      textColor: "#F15937",
      backgroundImage: require("../assets/Onboarding3.png"),
    },
  ];

  const flatListRef = useAnimatedRef();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const [count, setCount] = useState(false);
  let numcount;

  const onViewableItemsChanged = React.useCallback(
    ({ viewableItems }) => {
      if (viewableItems[0].index !== null) {
        flatListIndex.value = viewableItems[0].index;
        numcount = viewableItems[0].index;

        // Log the currently displayed item index
        console.log("Currently displayed item index:", numcount);

        // Set the 'count' state based on the currently displayed item index
        setCount(numcount === 2);

        // Update any other logic based on the currently displayed item here
      }
    },
    [numcount]
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} x={x} />;
        }}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.bottomContainer}>
        {/* Conditionally render content based on the currently displayed item */}
        {numcount === 2 ? (
          <Text style={{ color: "white" }}>Full Screen</Text>
        ) : (
          <Text style={{ color: "white" }}>Empty Screen</Text>
        )}
        <View
          style={{
            position: "relative",
            top: "70%",
            flexDirection: "row",
            gap: 90,
          }}
        >
          <View
            style={{
              flexDirection: "row",
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
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 30,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
