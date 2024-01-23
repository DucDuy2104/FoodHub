import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import signStyles from '../../styles/SignStyles'
import colors from '../../components/Colors'

const LoginScreen = (props) => {
    const [emaitFocus, setEmailF] = useState(false)
    const [passFocus, setPassFocus]= useState(false)

    const {navigation} = props;
    
    return (
        <View style={signStyles.container}>
            <Image style={signStyles.imgBg1} source={require('../../assets/img/img1.png')} />
            <Image style={signStyles.imgBg1} source={require('../../assets/img/img2.png')} />
            <Image style={signStyles.imgBg3} source={require('../../assets/img/img3.png')} />
            <TouchableOpacity style={signStyles.backBtn}>
                <Image source={require('../../assets/img/backbtn.png')}/>
            </TouchableOpacity>
            <Text style={[signStyles.signTxt, {marginTop: 150}]}>Login</Text>
            <Text style={signStyles.subText}>E-mail</Text>
            <TextInput onFocus={()=>setEmailF(true)} onBlur={()=>setEmailF(false)} style={[signStyles.input, {borderColor: emaitFocus? colors.primary: 'gray'}]} placeholder='E-mail' />
            <Text style={signStyles.subText}>Password</Text>
            <TextInput onFocus={()=>setPassFocus(true)} onBlur={()=>setPassFocus(false)} style={[signStyles.input, {borderColor: passFocus? colors.primary: 'gray'}]} placeholder='Password' />
            <TouchableOpacity>
                <Image style={signStyles.eye} source={require('../../assets/img/eye.png')} />
            </TouchableOpacity>

            <Text style={{color:colors.primary}}>Forgot Password?</Text>

            <TouchableOpacity style={signStyles.btnSignUp}>
                <Text style={signStyles.txtbtn}>Login</Text>
            </TouchableOpacity>

            <Text style={signStyles.txtHave}>
                Don't have account? {' '}
                <Text style={{color: colors.primary}} onPress={() => navigation.navigate('SignUpScreen')}>Sign Up</Text>
            </Text>
            <View style={signStyles.signSec}>
                <View style={signStyles.line}/>
                <Text style={signStyles.suwTxt}>Sign up width</Text>
                <View style={signStyles.line}/>
            </View>
            <View style={signStyles.suwContainer}>
                <TouchableOpacity style={signStyles.suwItem}>
                    <Image style={{width: 28, height: 28}} source={require('../../assets/img/facebook.png')}/>
                    <Text style={{marginLeft: 10,color:"black", fontSize: 13, fontWeight: '400'}}>FACEBOOK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={signStyles.suwItem}>
                    <Image style={{width: 28, height: 28}} source={require('../../assets/img/ggicon.png')}/>
                    <Text style={{marginLeft: 10,color:"black", fontSize: 13, fontWeight: '400'}}>FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen