import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
const Confirmpin = ({ navigation }) => {
  const [input, setInput] = useState(Array(6).fill("")); // State to store the OTP digits

  console.log({ input });
  // Function to handle digit button press
  // const handleDigitPress = (digit) => {
  //   const updatedInput = [...input];

  //   console.log({ updatedInput });
  //   const emptyIndex = updatedInput.indexOf("");

  //   if (emptyIndex !== -1) {
  //     updatedInput[emptyIndex] = digit;
  //     setInput(updatedInput);
  //   }
  // };

  const handleDigitPress = (digit) => {
    const updatedInput = [...input];
    const emptyIndex = updatedInput.indexOf("");

    if (emptyIndex !== -1) {
      updatedInput[emptyIndex] = digit;
      setInput(updatedInput);

      // Check if all input fields are filled with digits
      if (!updatedInput.includes("")) {
        // Navigate to another screen (replace 'YourScreenName' with the actual screen name)
        navigation.navigate("pindone");
      }
    }
  };

  // Function to handle the decimal point
  const handleDecimalPress = () => {
    // Handle decimal press if needed
  };

  // Function to clear the input
  const handleClearPress = () => {
    setInput(Array(6).fill(""));
  };

  // Function to clear the last digit
  // const handleClearLastDigitPress = () => {
  //   const updatedInput = [...input];
  //   const lastFilledIndex = updatedInput.lastIndexOf("");

  //   if (lastFilledIndex !== -1) {
  //     updatedInput[lastFilledIndex - 1] = "";
  //     setInput(updatedInput);
  //   }
  // };

  const handleClearLastDigitPress = () => {
    const updatedInput = [...input];

    for (let i = updatedInput.length - 1; i >= 0; i--) {
      if (updatedInput[i] !== "") {
        updatedInput[i] = "";
        setInput(updatedInput);
        break; // Exit the loop after clearing the last non-empty digit
      }
    }
  };

  const digitsData = Array.from(Array(9).keys()).map((digit) => ({
    id: digit.toString(),
    digit: (digit + 1).toString(),
  }));

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#000A4A" />
        <Text style={{ color: "#000A4A", fontSize: 20, fontWeight: "700" }}>
          Confirm PIN
        </Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            color: "#4F4F4F",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          Input your six digit PIN again
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.otpContainer}>
            {input.map((digit, index) => (
              <View key={index} style={styles.otpBox}>
                <Text style={styles.otpDigit}>{digit}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: "30%",
        }}
      >
        <FlatList
          data={digitsData}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ paddingHorizontal: 20, margin: 20 }}
              onPress={() => handleDigitPress(item.digit)}
            >
              <Text
                style={{ color: "#000A4A", fontSize: 21, fontWeight: "400" }}
              >
                {item.digit}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleDecimalPress}>
            <Entypo name="dot-single" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDigitPress("0")}
          >
            <Text style={{ color: "#000A4A", fontSize: 21, fontWeight: "400" }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleClearLastDigitPress}
            className=""
          >
            <MaterialIcons
              onPress={handleClearLastDigitPress}
              name="arrow-back-ios"
              size={24}
              color="#BDBDBD"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 35,
  },
  input: {
    fontSize: 64,
    marginBottom: 10,
    color: "red",
  },
  buttonRow: {
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    margin: 15,
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  otpBox: {
    width: 40,
    height: 40,
    backgroundColor: "#F2F8FF",
    // backgroundColor: "red",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  otpDigit: {
    fontSize: 20,
    fontWeight: "400",
    color: "#0C0C26",
  },
});

export default Confirmpin;
