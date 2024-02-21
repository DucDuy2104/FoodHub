import { StyleSheet } from "react-native";
import colors from "../components/Colors";

const CatItemStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#cdcdcd', marginTop: 10
    },
    img: {
        width: '100%',
        height: 165,
        borderRadius: 20
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginLeft: 10,
        marginTop: 20
    },
    topping: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 10,
        marginTop: 10
    },
    heartImg: {
        height: 30,
        width: 30
    },
    heartBtn: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        padding: 5,
        borderRadius: 20,
        color: colors.primary,
        position:'absolute',
        backgroundColor:'#fff',
        left: 20, 
        top: 20
    },
    rating: {
        color:'black', 
        fontSize: 16,
        fontWeight: '700',
        backgroundColor:'white',
        alignSelf:'baseline',
        padding: 5,
        borderRadius: 5,
        position:'absolute',
        top:150,
        left: 20,
        elevation: 5
    },
    voting: {
        color: '#cdcdcd',
        fontSize: 12
    }
})


export default CatItemStyles