import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import signStyles from '../../styles/SignStyles'
import colors from '../../components/Colors'

const SignUpScreen = (props) => {
    const [emaitFocus, setEmailF] = useState(false)
    const [passFocus, setPassFocus] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)

    const [Pass, setPass] = useState("");
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");

    const { navigation } = props;

    const click = () => {
        navigation.navigate('LoginScreen');
        //tro ve trang truoc do 
        // navigation.goback();
    }

    const handleUpdateProfile = async () => {
        try {
            const response = await fetch(`http://192.168.1.10:3000/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: Name,
                    email: Email,
                    password: Pass,
                    phoneNumber: "",
                    fullName : ''
                }),
            });
            const ResposeData = await response.json();
            if(response.ok  === true) {
                Alert.alert("Dang ky thanh cong");
                console.log(ResposeData);
                navigation.navigate('LoginScreen');
            } else {
                Alert.alert(ResposeData.message);
            }
            
    }catch(error){
        console.log(error);
    }
    }


    const Log = () => {
        console.log("Name: ", Name, "Email: ", Email, "Pass: ", Pass);
    }
    return (
        <View style={signStyles.container}>
            <Image style={signStyles.imgBg1} source={require('../../assets/img/img1.png')} />
            <Image style={signStyles.imgBg1} source={require('../../assets/img/img2.png')} />
            <Image style={signStyles.imgBg3} source={require('../../assets/img/img3.png')} />
            <Text style={signStyles.signTxt}>Sign up</Text>
            <Text style={signStyles.subText}>Full name</Text>
            <TextInput onBlur={() => setNameFocus(false)} onFocus={() => setNameFocus(true)}
                onChangeText={(text) => setName(text)}
                style={[signStyles.input, { borderColor: nameFocus ? colors.primary : 'gray' }]} placeholder='Full name' />
            <Text style={signStyles.subText}>E-mail</Text>
            <TextInput onBlur={() => setEmailF(false)} onFocus={() => setEmailF(true)}
                onChangeText={(text) => setEmail(text)}
                style={[signStyles.input, { borderColor: emaitFocus ? colors.primary : 'gray' }]} placeholder='E-mail' />
            <Text style={signStyles.subText}>Password</Text>
            <TextInput onBlur={() => setPassFocus(false)} onFocus={() => setPassFocus(true)}
                onChangeText={(text) => setPass(text)}
                value={Pass}
                style={[signStyles.input, { borderColor: passFocus ? colors.primary : 'gray' }]} placeholder='Password' />
            <TouchableOpacity>
                <Image style={signStyles.eye} source={require('../../assets/img/eye.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={signStyles.btnSignUp} onPress={handleUpdateProfile}>
                <Text style={signStyles.txtbtn}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={signStyles.txtHave}>
                Already have an account? {' '}
                <Text style={{ color: colors.primary }} onPress={click}>Login</Text>
            </Text>
            <View style={signStyles.signSec}>
                <View style={signStyles.line} />
                <Text style={signStyles.suwTxt}>Sign up width</Text>
                <View style={signStyles.line} />
            </View>
            <View style={signStyles.suwContainer}>
                <TouchableOpacity style={signStyles.suwItem}>
                    <Image style={{ width: 28, height: 28 }} source={require('../../assets/img/facebook.png')} />
                    <Text style={{ marginLeft: 10, color: "black", fontSize: 13, fontWeight: '400' }}>FACEBOOK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={signStyles.suwItem}>
                    <Image style={{ width: 28, height: 28 }} source={require('../../assets/img/ggicon.png')} />
                    <Text style={{ marginLeft: 10, color: "black", fontSize: 13, fontWeight: '400' }}>FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpScreen