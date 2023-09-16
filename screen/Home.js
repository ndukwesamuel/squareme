import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const Home = ({ navigation }) => {
  const [amount, setAmount] = useState(false);
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,

          height: "80%",
        }}
      >
        <ImageBackground
          source={require("../assets/homeicon.png")} // Replace with the actual path to your background image
          style={styles.backgroundImage}
        >
          <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
            <View
              style={{
                flex: 1,
                borderColor: "white",
                borderWidth: 1,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
                }} // Replace with the actual URL of your image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  borderColor: "black",
                  borderWidth: 1,
                }}
              />

              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 400, fontSize: 12 }}>Hello,</Text>
                <Text style={{ fontWeight: 400, fontSize: 12 }}>
                  David Oloye
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,

                flexDirection: "row",
                gap: 10,
                justifyContent: "flex-end",
              }}
            >
              <Image
                style={{ height: 32, width: 32 }}
                source={require("../assets/Frame23.png")} // Replace with the actual path to your image
              />
              <Image
                style={{ height: 32, width: 32 }}
                source={require("../assets/Frame2.png")} // Replace with the actual path to your image
              />
            </View>
          </View>

          <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
            <Text style={{ fontWeight: 400, fontSize: 12 }}>
              Wallet Balance
            </Text>
            <Pressable
              onPress={() => setAmount(!amount)}
              style={{ marginTop: 10 }}
            >
              {amount ? (
                <Text style={{ fontWeight: 800, fontSize: 30 }}>N10000</Text>
              ) : (
                <Image
                  style={{ height: 40, width: 100 }}
                  source={require("../assets/Framexx.png")} // Replace with the actual path to your image
                />
              )}
            </Pressable>

            <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
              <Pressable
                style={{
                  backgroundColor: "#000A4A",
                  paddingHorizontal: 42,
                  paddingVertical: 14,
                  borderRadius: 12,
                }}
                onPress={() => navigation.navigate("Send")}
              >
                <Text style={{ color: "white", fontWeight: 500, fontSize: 12 }}>
                  Fund
                </Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "#E1E1E1",
                  paddingHorizontal: 32,
                  paddingVertical: 14,
                  borderRadius: 12,
                }}
                onPress={() => navigation.navigate("Send")}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#747474",
                  }}
                >
                  Withdraw
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 70 }}>
            <Text style={{ fontWeight: 500, fontSize: 16 }}>Quick Access</Text>

            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Group1.png")}
                  style={{ height: 40, width: 40 }}
                />

                <Text style={{ fontWeight: 500, fontSize: 12 }}>Pay Bills</Text>
              </View>

              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Group2.png")}
                  style={{ height: 40, width: 40 }}
                />

                <Text style={{ fontWeight: 500, fontSize: 12 }}>Giftcards</Text>
              </View>

              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/Group3.png")}
                  style={{ height: 40, width: 40 }}
                />

                <Text style={{ fontWeight: 500, fontSize: 12 }}>Cards</Text>
              </View>
            </View>
          </View>
          {/* Your content goes here */}
          {/* For example, you can add text or other components */}
        </ImageBackground>

        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text style={{ fontWeight: 500, fontSize: 17, marginTop: 20 }}>
            Recent Transactions
          </Text>
          <View
            style={{
              flex: 1,
              height: "50%",
              alignItems: "center",
              paddingHorizontal: 30,
            }}
          >
            <Image source={require("../assets/note.png")} />

            <Text>No recent transaction</Text>

            <Text
              style={{
                fontWeight: 500,
                fontSize: 12,
                color: "#747474",
                textAlign: "center",
              }}
            >
              You have not performed any transaction, you can start sending and
              requesting money from your contacts.
            </Text>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    paddingTop: 80,
    flex: 1,
    resizeMode: "cover", // You can change this to 'contain' or 'stretch' as needed
  },
});
