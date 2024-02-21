import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../global/AppContext';

const Profiles = (props) => {
  const { navigation } = props;
  const { curUser, setCurUser } = useContext(AppContext);

  const Mail = curUser.email;

  const [nameFocus, setnameFocus] = useState(false);
  const [emaitFocus, setEmailF] = useState(false)
  const [phoneFocus, setphoneFocus] = useState(false)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleUpdateProfile = () => {
    const userData = {
      currentEmail: Mail,
      newEmail: email,
      fullName: fullName,
      phoneNumber: phoneNumber,
    };

    fetch(`http://192.168.1.68:3000/api/users/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(Mail);
        console.log(data);
        Alert.alert('Success', 'Update success');
      })
      .catch(error => {
        console.error('Error updating:', error);
        Alert.alert('Error', 'Failed to update');
        if (data.success) {
          pushDataToAPI(userData);
        }
      });
  };

  const pushDataToAPI = (userData) => {
    // Gửi dữ liệu userData lên API khác ở đây
    fetch(`http://192.168.1.68:3000/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Push thành công hahaha:', data);
      })
      .catch(error => {
        console.error('Lỗi rồi nè', error);
      });
  };

  return (
    <View>
      <ImageBackground source={require('../../assets/img/bgprofile.png')}
        style={styles.imgBG}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/img/grback.png')}
            style={styles.img1} />
        </Pressable>
      </ImageBackground>

      <ImageBackground
        style={styles.bg2}
        source={require('../../assets/img/bgavatar.png')}
        imageStyle={{ borderRadius: 54 }}>
        <Image source={require('../../assets/img/img.png')}
          style={styles.avatar} />
        <Image source={require('../../assets/img/GrCamera.png')}
          style={styles.camera} />
      </ImageBackground>

      <View style={styles.view1}>
        <Text style={[styles.text1, styles.textCenter, styles.colorblack]}>Eljad Eendaz</Text>
        <Text style={[styles.text2, styles.textCenter, styles.colorgray]}>Edit Profile</Text>

        <View style={styles.view2}>
          <Text style={[styles.text3, styles.colorgray]}>Full name</Text>
          <TextInput
            onFocus={() => setnameFocus(true)}
            onBlur={() => setnameFocus(false)}
            onChangeText={(text) => setFullName(text)}
            style={[styles.input1,
            { borderColor: nameFocus ? '#FE724C' : '#eee' }]}
            placeholderTextColor={'#ccc'} placeholder='Input your name'
          />

          <Text style={[styles.text3, styles.colorgray]}>E-mail</Text>
          <TextInput placeholderTextColor={'#ccc'} placeholder='Input your email'
            onFocus={() => setEmailF(true)}
            onBlur={() => setEmailF(false)}
            onChangeText={(text) => setEmail(text)}
            style={[styles.input1,
            { borderColor: emaitFocus ? '#FE724C' : '#eee' }]} />

          <Text style={[styles.text3, styles.colorgray]}>Phone Number</Text>
          <TextInput placeholderTextColor={'#ccc'} placeholder='Input your phone number'
            onFocus={() => setphoneFocus(true)}
            onBlur={() => setphoneFocus(false)}
            onChangeText={(text) => setPhoneNumber(text)}
            style={[styles.input1,
            { borderColor: phoneFocus ? '#FE724C' : '#eee' }]}
            keyboardType='number-pad' />

          <Pressable onPress={() => handleUpdateProfile()}
            style={{ backgroundColor: 'orange', paddingHorizontal: 100, paddingVertical: 15, marginTop: 10, marginHorizontal: 20, borderRadius: 20 }}>
            <Text style={{ fontSize: 20, color: '#FFF', textAlign: 'center', fontWeight: 'bold' }}>Save</Text>
          </Pressable>

        </View>
      </View>
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
  input1: {
    width: '90%',
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    marginHorizontal: 18,
    fontSize: 20,
    fontWeight: '600',
    color: '#111719',
    paddingTop: 25, paddingBottom: 20,
    paddingHorizontal: 16,
    marginBottom: 29,
  },
  container: {

  },
  imgBG: {
    height: 230,
  },
  img1: {
    marginTop: 20,
    marginLeft: 15
  },
  bg2: {
    width: 108,
    height: 108,
    backgroundColor: 'white',
    bottom: 130,
    left: 135,
    borderRadius: 54
  },
  avatar: {
    borderRadius: 50,
    right: 30,
    bottom: 16
  },
  camera: {
    bottom: 110,
    left: 50,
    width: 70,
    height: 70
  },
  textCenter: {
    textAlign: 'center'
  },
  colorblack: {
    color: 'black'
  },
  colorgray: {
    color: '#9796A1'
  },
  text1: {
    fontSize: 20,
    fontWeight: '600'
  },
  view1: {
    bottom: 130
  },
  view2: {
    marginTop: 49
  },
  text2: {
    fontSize: 14,
    fontWeight: '400'
  },
  text3: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 27,
    marginBottom: 12
  },
  input: {
    width: '90%',
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
    marginHorizontal: 18,
    fontSize: 20,
    fontWeight: '600',
    color: '#111719',
    paddingTop: 25, paddingBottom: 20,
    paddingHorizontal: 16,
    marginBottom: 29,
  }

})