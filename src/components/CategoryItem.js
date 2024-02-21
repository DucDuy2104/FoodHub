import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CatItemStyles from '../styles/CatItemStyles'
const CategoryItem = ({data, onDelete}) => {
    console.log("data: ", data)
    return (
        <TouchableOpacity >
            <View style={CatItemStyles.container}>
                <Image style={CatItemStyles.img} source={{uri: data.image}} />
                <TouchableOpacity onPress={onDelete} style={CatItemStyles.heartBtn}>
                    <Image style={CatItemStyles.heartImg} source={require('../assets/img/favorch.png')}/>
                </TouchableOpacity>
                <Text style={CatItemStyles.price}>${}<Text style={{color:'black'}}>{data.price}</Text></Text>
                <Text style={CatItemStyles.rating}>{data.rating}<Image style={{height: 15, width: 15}} source={require('../assets/img/star.png')}/><Text style={CatItemStyles.voting}>({data.voting}+)</Text></Text>
                <Text style={CatItemStyles.name}>
                    {data.name}
                </Text>
                <Text style={CatItemStyles.topping}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}



export default CategoryItem