import { View, Text, Image, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CategoryItem from '../../components/CategoryItem'
import AxiosInstance from '../../helper/AxiosInstance'
import { AppContext } from '../../global/AppContext'


const FavoriteScreen = () => {
    const {curUser} = useContext(AppContext)
    const [favors,setFavor] = useState([])
    const [count, setCount] = useState(0)
    const [refreshing, setRefreshing] = useState(false)
    const getDataFavors =async() => {
        try {
            const response = await AxiosInstance().get('/api/favors/'+ curUser.email)
            if(response.status) {
                console.log("favors: ",response.data.favors)
                setFavor(response.data.favors)
            } 
        } catch (error) {
            
        }
    }

    const deleteFavor = async (item) => {
        try {
            const response = await AxiosInstance().delete('/api/favors/delete',{
               data:{
                email: curUser.email,
                item: item
               }
            })
            console.log('response: ', response)
        } catch (error) {
            console.log('err: ', error.message)
        }
    }

    const onItemDelete = (item)=> {
        deleteFavor(item);
    }
    useEffect(()=> {
        getDataFavors()
    }, [count])

    const onRefresh=() => {
        setCount(pre=> ++pre)
        setRefreshing(false)
    }

    return favors? (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ width: 50, height: 50 }}></Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Favorites</Text>
                <Image source={require('../../assets/img/home/avatarr.png')} />
            </View>
            <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={favors}
            renderItem={({item})=><CategoryItem onDelete={()=>onItemDelete(item)} data={item}/>}
            keyExtractor={i=>i.id}
            style={{paddingHorizontal: 10, marginBottom: 10}}
            />
        </View>
    ) : <Text>Loading...</Text>
}

export default FavoriteScreen