// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./screen/Signup";
import OTPscreen from "./screen/OTPScreen";
import VerificationDone from "./screen/VerificatioDone";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Security from "./screen/Security";
import Confirmpin from "./screen/Confirmpin";
import PinDone from "./screen/PinDone";
import Send from "./screen/Send";
import Onboad from "./screen/Onboad";
import OnboardingScreen from "./screen/Onboad";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboad"
          component={OnboardingScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="Send"
          component={Send}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="otpscreen"
          component={OTPscreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="VerificationDone"
          component={VerificationDone}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="security"
          component={Security}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="confirmpin"
          component={Confirmpin}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="pindone"
          component={PinDone}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
