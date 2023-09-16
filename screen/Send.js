import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";

const Send = ({ navigation }) => {
  const [input, setInput] = useState(""); // State to store the input digits

  // Function to handle digit button press
  const handleDigitPress = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };

  // Function to handle the decimal point
  const handleDecimalPress = () => {
    if (!input.includes(".")) {
      setInput((prevInput) => prevInput + ".");
    }
  };

  // Function to clear the input
  const handleClearPress = () => {
    setInput("0");
  };

  // Function to clear the last digit
  const handleClearLastDigitPress = () => {
    if (input.length > 1) {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput("0");
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
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../assets/scan-barcode.png")} />

        <View
          style={{
            backgroundColor: "rgba(159, 86, 212, 0.10)",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderRadius: 12,
            paddingHorizontal: 24,
            paddingVertical: 12,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "400", fontSize: 12 }}>
            {" "}
            Wallet Balance
          </Text>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 17 }}>
            {" "}
            ₦ 5,200
          </Text>
        </View>
        <Image source={require("../assets/clock.png")} />
      </View>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "400", fontSize: 36, color: "white" }}>
            N
          </Text>
          <View>
            <Text style={styles.input}>{input}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <FlatList
          data={digitsData}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ paddingHorizontal: 10, margin: 20 }}
              onPress={() => handleDigitPress(item.digit)}
            >
              <Text style={{ color: "white", fontSize: 21, fontWeight: "400" }}>
                {item.digit}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleDecimalPress}>
            <Text style={{ color: "white", fontSize: 21, fontWeight: "400" }}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDigitPress("0")}
          >
            <Text style={{ color: "white", fontSize: 21, fontWeight: "400" }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleClearLastDigitPress}
          >
            <Text style={{ color: "white", fontSize: 21, fontWeight: "400" }}>
              M
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
          <Pressable
            style={{
              backgroundColor: "#28283A",
              paddingHorizontal: 30,
              paddingVertical: 14,
              borderRadius: 12,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "#949494", fontWeight: 500, fontSize: 12 }}>
              Request
            </Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#28283A",
              paddingHorizontal: 42,
              paddingVertical: 14,
              borderRadius: 12,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "#949494", fontWeight: 500, fontSize: 12 }}>
              Send
            </Text>
          </Pressable>
        </View>
      </View>

      {/* <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleClearPress}>
          <Text style={{ color: "white", fontSize: 21, fontWeight: "400" }}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C0C26",
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 35,
  },
  input: {
    fontSize: 64,
    marginBottom: 10,
    color: "white",
  },
  buttonRow: {
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    padding: 20,
    margin: 10,
  },
});

export default Send;
