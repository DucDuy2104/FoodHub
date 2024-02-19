import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import signStyles from '../../styles/SignStyles'
import { AppContext } from '../../global/AppContext';

const Food_Detail = ({ navigation, route }) => {
    const [num, setNum] = useState(0);
    const { item } = route.params
    const { setListCart, listCart } = useContext(AppContext)
    const onIncrePress = () => {
        setNum(pre => ++pre)
    }


    console.log(listCart);

    const onDescrePress = () => {
        if(num == 0) {
            return
        }

        setNum(pre => --pre)
    }

    const onAddToCartPress = (food) => {
        var count = 0
        listCart.forEach((fo, i) => {
            console.log("onForEach...")
            if(fo.id ==  food.id) {
                count++;
            }
        });
        if(count == 0) {
            console.log("onAddNew...")
            listCart.push(
                {
                    id: food.id,
                    name: food.name,
                    title: food.title,
                    image: food.image,
                    price: food.price,
                    count: num
                }
            )
        }
        setListCart(listCart)
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.TitleContainer}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image style={styles.iconBack} source={require('../../assets/img/backbtn.png')} />
                    </TouchableOpacity>
                    <View>
                        <Image style={styles.ImgTym} source={require('../../assets/Food_Detail/ImgTym.png')} />
                        <Image style={styles.iconTym} source={require('../../assets/Food_Detail/iconTym.png')} />
                    </View>
                </View>
                <View style={styles.ViewBanhCuon}>
                    <Image style={styles.imgbanhCuon} source={{ uri: item.image }} />
                </View>
            </View>

            <View>
                <Text style={styles.Text}>{item.name}</Text>
            </View>
            <View style={styles.ViewSao}>
                <Image source={require('../../assets/Food_Detail/Sao.png')} />
                <Text style={styles.Sao}>{item.rating}</Text>
                <Text style={styles.Danhgia}>({item.voting}+)</Text>
                <Text style={styles.See}>See review</Text>
            </View>
            <View style={styles.ViewPriceContainer}>
                <View ><Text style={styles.ViewPrice}>${item.price}</Text></View>
                <View style={styles.ViewCongTru}>
                    <Pressable onPress={onDescrePress}>
                        <Image style={styles.ImgCong} source={require('../../assets/Food_Detail/Tru.png')} />
                    </Pressable>
                    <Text style={styles.Soluong}>{num}</Text>
                    <Pressable onPress={onIncrePress}>
                        <Image style={styles.ImgTru} source={require('../../assets/Food_Detail/Cong.png')} />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.Text1}>
                {item.description}
            </Text>
            <View>
                <Text style={styles.Text2}>Choice of Add On</Text>
            </View>
            <View style={styles.ViewAdd}>
                <View style={styles.FoodAddContainer}>
                    <Image style={styles.FoodAdd} source={require('../../assets/Food_Detail/Pepper.png')} />
                    <Text style={styles.FoodAddText}>Pepper Julienned</Text>
                </View>
                <View style={styles.PriceAddContainer}>
                    <Text style={styles.FoodAddText}>+$2.30</Text>
                    <Image style={styles.FoodAddChoice} source={require('../../assets/Food_Detail/ChoiceCam.png')} />
                </View>
            </View>
            <View style={styles.ViewAdd}>
                <View style={styles.FoodAddContainer}>
                    <Image style={styles.FoodAdd} source={require('../../assets/Food_Detail/Baby.png')} />
                    <Text style={styles.FoodAddText}>Baby Spinach</Text>
                </View>
                <View style={styles.PriceAddContainer}>
                    <Text style={styles.FoodAddText}>+$4.70</Text>
                    <Image style={styles.FoodAddChoice} source={require('../../assets/Food_Detail/ChoiceCam.png')} />
                </View>
            </View>
            <View style={styles.ViewAdd}>
                <View style={styles.FoodAddContainer}>
                    <Image style={styles.FoodAdd} source={require('../../assets/Food_Detail/Masroom.png')} />
                    <Text style={styles.FoodAddText}>Masroom</Text>
                </View>
                <View style={styles.PriceAddContainer}>
                    <Text style={styles.FoodAddText}>+$2.50</Text>
                    <Image style={styles.FoodAddChoice} source={require('../../assets/Food_Detail/ChoiceCam.png')} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=>onAddToCartPress(item)} style={signStyles.btnSignUp}>
                    <Text style={styles.text3}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Food_Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    }
    , TitleContainer: {
        zIndex: 1,
        position: 'absolute',
        flexDirection: 'row',
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
    }
    , iconTym: {
        position: 'absolute',
        top: 22,
        left: 23
    }
    , iconBack: {
        width: 70,
        height: 70
    }
    , ImgTym: {
        marginTop: 5,
        width: 60,
        height: 60
    }
    , ViewBanhCuon: {

        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
    , imgbanhCuon: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        borderRadius: 10
    }
    , Text: {
        marginTop: 20,
        fontFamily: 'Sofia Pro',
        fontWeight: '600',
        fontSize: 28,
        lineHeight: 32.2,
        color: 'black'
    }
    , Sao: {
        fontFamily: 'Sofia Pro',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 14,
        marginTop: 10
    }
    , Danhgia: {
        color: '#9796A1',
        fontFamily: 'Sofia Pro',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14,
        marginTop: 10
    }
    , See: {
        fontFamily: 'Sofia Pro',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 13,
        textDecorationLine: 'underline',
        color: '#FE724C',
        marginTop: 10,
        marginLeft: 10
    }
    , ViewSao: {
        flexDirection: 'row',
    }
    , ViewPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
    , ViewCongTru: {
        flexDirection: 'row',
    }
    , ViewPrice: {
        fontFamily: 'Sofia Pro',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 20,
        color: '#FE724C',
    }
    , Soluong: {
        fontFamily: 'Sofia Pro',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 16,
    }
    , ImgCong: {
        marginTop: -12,
        width: 60,
        height: 60
    }
    , ImgTru: {
        marginTop: -20,
        width: 60,
        height: 60
    }
    , Text1: {
        fontFamily: 'Helvetica',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        color: '#858992',
    },
    eyeIcon: {
        width: 29,
        height: 18
    },
    eyecontainer: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    Text2: {
        fontFamily: 'Sofia Pro',
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
        marginTop: 10
    },
    text3: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Sofia Pro',
        fontWeight: '600',
        textAlign: 'center'
    },
    ViewAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: 40,
        marginTop: 10
    },
    FoodAddContainer: {
        flexDirection: 'row',
    },
    PriceAddContainer: {
        flexDirection: 'row',
    }
    , FoodAdd: {
        width: 40,
        height: 40
    }
    , FoodAddChoice: {
        marginTop: 5,
        width: 25,
        height: 25,
        marginLeft: 10
    }
    , FoodAddText: {
        fontFamily: 'Sofia Pro',
        fontWeight: '400',
        fontSize: 14,
        marginTop: 10,
        marginLeft: 10,
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 40
    }
})