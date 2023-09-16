import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";
import HiddenTextInput from "../Components/OTPscreen/HiddenTextInput";

const OTPscreen = ({ route, navigation }) => {
  // const {phone} = route.params
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 6;
  const textInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //     dispatch(reset())
  // },[])

  const Ref = useRef(null);
  const [timer, setTimer] = useState("01:00");
  const [showResetButton, setShowResetButton] = useState(false);

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (endTime) => {
    const { total, minutes, seconds } = getTimeRemaining(endTime);

    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      setTimer("00:00");
      clearInterval(Ref.current);
      setShowResetButton(true); // Show the Reset button
    }
  };

  const clearTimer = (endTime) => {
    setTimer("01:00");
    setShowResetButton(false); // Hide the Reset button initially
    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60); // Countdown from 60 seconds (1 minute)
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const [inputFocused, setInputFocused] = useState(false);
  const handleOnBlur = () => {
    setInputFocused(false);
  };

  const handleOnPress = () => {
    setInputFocused(true);
    textInputRef?.current?.focus();
  };

  const handleSubmit = async () => {
    navigation.navigate("VerificationDone");
  };

  useEffect(() => {
    if (pinReady == true) {
      navigation.navigate("VerificationDone");
    }
  }, [pinReady]);

  const codeDigitsArray = new Array(MAX_CODE_LENGTH).fill(0);

  useEffect(() => {
    setPinReady(code.length === MAX_CODE_LENGTH);
    return () => setPinReady(false);
  }, [code]);

  const handleBack = () => {
    navigation.navigate("otpscreen");
  };

  const toCodeDigitInput = (value, index) => {
    const exptyInputChar = " ";
    const digit = code[index] || exptyInputChar;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === MAX_CODE_LENGTH - 1;
    const isCodeFull = code.length === MAX_CODE_LENGTH;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const StyledOTPInput =
      inputFocused && isDigitFocused ? styles.OTPInputFocused : styles.OTPInput;

    return (
      <View key={index} style={StyledOTPInput}>
        <Text style={styles.OTPInputText}>{digit}</Text>
      </View>
    );
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {/* <ImageBackground source={backgroundimg} resizeMode="cover" style={styles.child}> */}
      <View style={styles.coverchild}>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            width: "100%",
          }}
          onPress={handleBack}
        >
          <Ionicons
            name="arrow-back"
            color="#000A4A"
            size={24}
            onPress={handleBack}
          />
          <Text
            style={{
              fontSize: 23,
              color: "#000A4A",
              flex: 1,
              textAlign: "center",
            }}
          >
            {" "}
            Verify Phone Number
          </Text>
        </View>
        <Text style={{ textAlign: "center", marginTop: 30 }}>
          Please input the five digit code that was sent
        </Text>
        <Text style={{ textAlign: "center", marginTop: 5 }}>
          to your phone number below
        </Text>
        <View style={styles.OTPInputSection}>
          <Pressable style={styles.InputContainer} onPress={handleOnPress}>
            {/* <View style={styles.OTPInput}>
                <Text style={styles.OTPInputText}>try</Text>
            </View> */}
            {codeDigitsArray.map(toCodeDigitInput)}
          </Pressable>
          <HiddenTextInput
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
            textInputRef={textInputRef}
            handleOnBlur={handleOnBlur}
          />
        </View>
        <Text style={{ color: "#9F56D4", textAlign: "center" }}>{timer}</Text>
        <View
          style={{ textAlign: "center", marginTop: 20, flexDirection: "row" }}
        >
          <Text>Having trouble receiving SMS? </Text>
          <TouchableOpacity onPress={onClickReset}>
            <Text style={{ color: "#9F56D4", textAlign: "center" }}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", marginTop: 5 }}>
          Or try other options below
        </Text>
        {/* <TouchableOpacity disabled={!pinReady} 
        style={{backgroundColor:!pinReady ? "black" : "#4FE75E", 
        width:'70%', justifyContent:'center', alignItems:'center', padding: 15, borderRadius: 5}}
        onPress={()=> 
            navigation.navigate('VerificationDone')}>
            {loading? <ActivityIndicator size='small' color='white' /> :<Text style={{color:'white'}}>Submit</Text>}
        </TouchableOpacity> */}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 30,
        }}
      >
        {showResetButton ? (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#000A4A",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              borderRadius: 5,
            }}
            // onPress={()=> navigation.navigate('VerificationDone')}
          >
            <Text style={{ color: "#000A4A" }}>Call me</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#B6B6B6",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              borderRadius: 5,
            }}
            // onPress={()=> navigation.navigate('VerificationDone')}
          >
            <Text style={{ color: "#B6B6B6" }}>Call me</Text>
          </TouchableOpacity>
        )}

        {showResetButton ? (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#000A4A",
              backgroundColor: "#000A4A",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              borderRadius: 5,
            }}
            // onPress={()=> navigation.navigate('VerificationDone')}
          >
            <Text style={{ color: "white" }}>Whatsapp</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "#D3D3D3",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              borderRadius: 5,
            }}
            // onPress={()=> navigation.navigate('VerificationDone')}
          >
            <Text style={{ color: "#B6B6B6" }}>Whatsapp</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* </ImageBackground> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "white",
  },
  OTPInputSection: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  InputContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  OTPInputFocused: {
    borderColor: "gray",
    minWidth: "12%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 6,
    borderColor: "#4FE75E",
    backgroundColor: "transparent",
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
    alignItems: "center",
    padding: 15,
    flex: 1,
  },
  OTPInput: {
    borderColor: "gray",
    minWidth: "12%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 6,
  },
  OTPInputText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
export default OTPscreen;
