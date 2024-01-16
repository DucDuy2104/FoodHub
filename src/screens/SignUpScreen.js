import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import signStyles from '../styles/SignStyles'
import colors from '../components/Colors'

const SignUpScreen = () => {
    const [emaitFocus, setEmailF] = useState(false)
    const [passFocus, setPassFocus]= useState(false)
    const [nameFocus, setNameFocus] = useState(false)

    return (
        <View style={signStyles.container}>
            <Image style={signStyles.imgBg1} source={require('../assets/img/img1.png')} />
            <Image style={signStyles.imgBg1} source={require('../assets/img/img2.png')} />
            <Image style={signStyles.imgBg3} source={require('../assets/img/img3.png')} />
            <Text style={signStyles.signTxt}>Sign up</Text>
            <Text style={signStyles.subText}>Full name</Text>
            <TextInput onBlur={()=>setNameFocus(false)} onFocus={()=>setNameFocus(true)} style={[signStyles.input, {borderColor: nameFocus? colors.primary:'gray'}]} placeholder='Full name' />
            <Text style={signStyles.subText}>E-mail</Text>
            <TextInput onBlur={()=>setEmailF(false)} onFocus={()=>setEmailF(true)} style={[signStyles.input, {borderColor: emaitFocus? colors.primary:'gray'}]} placeholder='E-mail' />
            <Text style={signStyles.subText}>Password</Text>
            <TextInput onBlur={()=>setPassFocus(false)} onFocus={()=>setPassFocus(true)} style={[signStyles.input, {borderColor: passFocus? colors.primary:'gray'}]} placeholder='Password' />
            <TouchableOpacity>
                <Image style={signStyles.eye} source={require('../assets/img/eye.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={signStyles.btnSignUp}>
                <Text style={signStyles.txtbtn}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={signStyles.txtHave}>
                Already have an account? {' '}
                <Text style={{color: colors.primary}}>Login</Text>
            </Text>
            <View style={signStyles.signSec}>
                <View style={signStyles.line}/>
                <Text style={signStyles.suwTxt}>Sign up width</Text>
                <View style={signStyles.line}/>
            </View>
            <View style={signStyles.suwContainer}>
                <TouchableOpacity style={signStyles.suwItem}>
                    <Image style={{width: 28, height: 28}} source={require('../assets/img/facebook.png')}/>
                    <Text style={{marginLeft: 10,color:"black", fontSize: 13, fontWeight: '400'}}>FACEBOOK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={signStyles.suwItem}>
                    <Image style={{width: 28, height: 28}} source={require('../assets/img/ggicon.png')}/>
                    <Text style={{marginLeft: 10,color:"black", fontSize: 13, fontWeight: '400'}}>FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpScreen