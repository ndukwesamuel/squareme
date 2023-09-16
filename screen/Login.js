import { View, Text, Image, Button, Pressable } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#000A4A", flex: 1 }}>
      <View
        style={{
          flex: 0.9,
          alignItems: "center",
          justifyContent: "center",
          height: "70%",
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: "100%", aspectRatio: 4 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ paddingHorizontal: 30, gap: 20, flex: 0.25 }}>
        <Pressable
          style={{
            backgroundColor: "white",
            paddingVertical: 16,
            alignItems: "center",

            borderRadius: 8,
          }}
          onPress={() => navigation.navigate("signup")}
        >
          <Text
            style={{
              color: "#000A4A",
              fontWeight: 500,
              fontSize: 16,
              alignItems: "center",
            }}
          >
            Create an account
          </Text>
        </Pressable>

        <Pressable
          style={{
            paddingVertical: 16,
            alignItems: "center",

            borderRadius: 8,
            borderWidth: 1,
            borderColor: "white",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              fontSize: 16,
              alignItems: "center",
            }}
          >
            I have an account
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
