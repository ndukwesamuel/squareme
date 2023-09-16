import React, { useState } from "react";
import { ActivityIndicator, ImageBackground, Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import CountryPicker from 'react-native-country-picker-modal';
import { Entypo, FontAwesome } from '@expo/vector-icons'; 
import { Modal } from 'react-native';

export default function Signup ({navigation}) {

    const [name, setName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)


    const handleBack = () =>{
        navigation.navigate('Home')
    }
    const handleRegister= () =>{
        navigation.navigate('AuthStack', {screen: 'Login'})
    }
    const handleSubmit= async() =>{
        const details = {
            name: name,
            phone_number: phone_number,
            password: password,
            password_confirmation: confirm_password
        }
        // console.log(' details ', details)
        setLoading(true)
        setLoading(false)
        navigation.navigate('otpscreen')
    }

    const [countryCode, setCountryCode] = useState('NG');
// const [phoneNumber, setPhoneNumber] = useState('');
const [country, setCountry] = useState(null)
const [withCountryNameButton, setWithCountryNameButton] = useState(
    false,
  )
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
const onSelect = ( country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }


    return(
        <Pressable onPress={Keyboard.dismiss} style={{flex:1}}>
            {/* <ImageBackground source={backgroundimg} resizeMode="cover" style={styles.child}> */}
                <View style={styles.coverchild}>
            <View style={{paddingHorizontal: 15, flexDirection:'row', alignItems:'center', marginTop: 30, width: '100%'}} onPress={handleBack}>
            <Ionicons name="arrow-back" color='#000A4A' size={24} onPress={handleBack}/>
            <Text style={{ fontSize: 23, color:'#000A4A', flex: 1, textAlign:'center'}}> Enter Your Phone Number</Text>
            </View>
            <Text style={{textAlign:'center', marginTop: 30}}>We'll send an SMS with a code to</Text>
            <Text style={{textAlign:'center', marginTop: 5}}>verify your phone number</Text>
            <View style={{flex: 1, marginTop: 50, paddingHorizontal:15, width:'100%'}}>

            <View  style={{flexDirection:'row', justifyContent:'space-between'}}>
            
            <View onPress={() => setModalVisible(true)} style={{borderWidth: 1, borderColor:'#D0D5DD', flexDirection:'row', borderRadius: 5, padding: 5}}>
            <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible={modalVisible}
      />
{countryCode !== null && (
        <Text style={{color:"#828282", fontSize: 17, marginTop: 6}}> + {country?.callingCode} </Text>
      )}
      </View>
      <TextInput  onChangeText={setPhoneNumber} placeholder="Phone Number" style={{flex: 1,
        fontSize: 18,
        padding: 10,
        paddingBottom: 10,
        color:'#cfd1d5',
        marginLeft:10, borderWidth: 1, borderColor:'#D0D5DD', borderRadius: 5}} />
            </View>

            <View style={{ borderWidth: 1, borderColor:'#D0D5DD', borderRadius: 5, padding: 15, marginTop: 20, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:'#9F56D4', fontSize: 18}}>Have a referral ID?</Text>
                <FontAwesome name="shopping-bag" size={24} color="#9F56D4" />
            </View>
            
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.loginbutton}>
                {loading? <ActivityIndicator size='small' color='white' /> :<Text style={{color:'white', fontSize: 15}}>Proceed</Text>}
             </TouchableOpacity>
             <View style={styles.newsign}>
                <Text style={{color:"#4F4F4F", fontSize: 15, marginRight: 10}}>Already have an account?</Text>
                <Text style={{color:'#9F56D4',  fontSize: 15}} onPress={handleRegister}>Sign In</Text>
             </View>
            </View>
            
            {/* </ImageBackground> */}
        </Pressable>
    )
}

const styles= StyleSheet.create({
    container: {
        width:"100%",
        borderBottomWidth: 1,
        borderColor: '#cfd1d5',
        fontSize: 18,
        padding: 5,
        paddingBottom: 10,
        color:'#cfd1d5'
    },
    password:{
        fontSize: 18,
        padding: 5,
        paddingBottom: 10,
        flex: 1,
        color: '#cfd1d5'
    },
    child:{
        // width: "100%",
        // height: "55%"
        flex: 1
    },
    coverchild: {
    width: "100%",
    height: "100%", 
    flexDirection: 'column', 
    padding: 15
    },
    loginbutton:{
        width:'100%',
        backgroundColor:'#000A4A',
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
        marginTop: 20,
        borderRadius: 20
    },
    newsign:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:'center'
    }
})