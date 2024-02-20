import { StyleSheet } from "react-native";
import colors from "../components/Colors";
const OrderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    image: {
        height: 100,
        width: 100,
        objectFit: 'cover',
        borderRadius: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    topping: {
        marginTop: 3,
        fontSize: 14,
    },
    price: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary
    },
    quantity: {
        marginTop: 3,
        fontWeight: '600'
    },
    rightSection: {
        marginLeft: 10
    },
    flat: {
        marginTop: 10
    }

})

export default OrderStyles