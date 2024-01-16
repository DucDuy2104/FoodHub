import { StyleSheet } from "react-native";
import colors from "../components/Colors";
const signStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    imgBg1: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    imgBg3: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    backBtn: {
        position:'absolute',
        top: 25,
        left: 10
    },  
    signTxt: {

        width: '100%',
        fontSize: 36,
        fontWeight: '600',
        color: 'black',
        marginTop: 80
    },
    subText: {
        width: '100%',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 18,
        color: '#9796A1'
    },
    input: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'gray',
        color: 'black',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 20
    },
    eye: {
        position: 'relative',
        bottom: 30,
        left: 150
    },
    btnSignUp: {
        width: '70%',
        backgroundColor: colors.primary,
        paddingVertical: 15,
        borderRadius: 29 ,
        marginTop: 25
    },
    txtbtn: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        letterSpacing: 1.5,
        fontWeight: '600',
    },
    txtHave: {
        fontSize: 14,
        fontWeight: '400',
        color:'black',
        marginTop: 20
    },
    signSec: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems:'center'
    },
    line: {
        height: 0.5,
        flex: 1,
        backgroundColor: '#5B5B5E'
    },
    suwTxt: {
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 10
    },
    suwContainer: {
        width: '100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    suwItem: {
        width: 147,
        height: 57,
        borderRadius: 29,
        flexDirection: 'row',
        alignItems:'center',
        padding: 20,
        elevation: 5,
        shadowColor: '#D3D1D8',
        shadowOffset: { width: 18.587, height: 18.587 },
        shadowOpacity: 0.25,
        shadowRadius: 37.174,
        backgroundColor:'white'
    }

})

export default signStyles