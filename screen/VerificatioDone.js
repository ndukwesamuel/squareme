import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Modal } from "react-native";
import congrats from "../assets/congrats.png";

export default function VerificationDone({ navigation }) {
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      {/* <ImageBackground source={backgroundimg} resizeMode="cover" style={styles.child}> */}
      <View style={styles.coverchild}>
        <View
          style={{
            paddingHorizontal: 15,
            alignItems: "center",
            marginTop: 90,
            width: "100%",
            flex: 1,
          }}
        >
          <Image source={congrats} style={{ width: 150, height: 150 }} />
          <Text style={{ fontSize: 23, marginBottom: 20 }}>
            Verification Successful!
          </Text>
          <Text style={{ color: "#4D4D4D" }}>
            Your phone number has been verified successfully.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate("security")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Okay!</Text>
        </TouchableOpacity>
      </View>

      {/* </ImageBackground> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#cfd1d5",
    fontSize: 18,
    padding: 5,
    paddingBottom: 10,
    color: "#cfd1d5",
  },
  password: {
    fontSize: 18,
    padding: 5,
    paddingBottom: 10,
    flex: 1,
    color: "#cfd1d5",
  },
  child: {
    // width: "100%",
    // height: "55%"
    flex: 1,
  },
  coverchild: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    padding: 15,
  },
  loginbutton: {
    width: "100%",
    backgroundColor: "#000A4A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  newsign: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});
