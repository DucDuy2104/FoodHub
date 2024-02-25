import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import signStyles from '../../styles/SignStyles'
import colors from '../../components/Colors'
import axios from 'axios'
import { AppContext } from '../../global/AppContext'

const LoginScreen = (props) => {
    const { curUser, setCurUser } = useContext(AppContext);
    const [emaitFocus, setEmailF] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [Pass, setPass] = useState("");
    const [Email, setEmail] = useState("");

    const { navigation } = props;

    const DangNhap = () => {
        fetch("http://192.168.1.10:3000/api/users").then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(data => {
            if (Email.trim() === "" || Pass.trim() === "") {
                ToastAndroid.show("Khong de trong email hoac password", ToastAndroid.SHORT);
                return;
            } else {
                let Login = false;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].email === Email && data[i].password === Pass) {
                        Login = true;

                        console.log("curUser: ", data[i]);
                        setCurUser(data[i])
                        break;
                    }
                }
                if (Login) {
                    navigation.navigate("Home");
                    ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show("Sai email hoặc password", ToastAndroid.SHORT);
                    return;
                }
            }
        }).catch(err => {
            console.log("Failed: " + err);
        })
    }

    return (
        <View style={signStyles.container}>
            <Image style={signStyles.imgBg1} source={require('../../assets/img/img1.png')} />
            <Image style={signStyles.imgBg1} source={require('../../assets/img/img2.png')} />
            <Image style={signStyles.imgBg3} source={require('../../assets/img/img3.png')} />
            <TouchableOpacity style={signStyles.backBtn}>
                <Image source={require('../../assets/img/backbtn.png')} />
            </TouchableOpacity>
            <Text style={[signStyles.signTxt, { marginTop: 150 }]}>Login</Text>
            <Text style={signStyles.subText}>E-mail</Text>
            <TextInput
                onFocus={() => setEmailF(true)}
                onBlur={() => setEmailF(false)}
                style={[signStyles.input, { borderColor: emaitFocus ? colors.primary : 'gray' }]}
                placeholder='E-mail'
                onChangeText={(text) => setEmail(text)}
                value={Email} />
            <Text style={signStyles.subText}>Password</Text>
            <TextInput onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
                style={[signStyles.input, { borderColor: passFocus ? colors.primary : 'gray' }]}
                placeholder='Password'
                onChangeText={(text) => setPass(text)}
                value={Pass} />
            <TouchableOpacity>
                <Image style={signStyles.eye} source={require('../../assets/img/eye.png')} />
            </TouchableOpacity>

            <Text style={{ color: colors.primary }}>Forgot Password?</Text>

            <TouchableOpacity style={signStyles.btnSignUp} onPress={() => DangNhap()}>
                <Text style={signStyles.txtbtn}>Login</Text>
            </TouchableOpacity>

            <Text style={signStyles.txtHave}>
                Don't have account? {' '}
                <Text style={{ color: colors.primary }} onPress={() => navigation.navigate('SignUpScreen')}>Sign Up</Text>
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

export default LoginScreen