import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';

const DetailScreen = ({navigation}) => {
  const [result, setResult] = useState([])
  const id = navigation.getParam("id");
  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    // console.log(response.data.photos)
    setResult(response.data);
  }
  useEffect(()=>{
    getBusiness(id);
  },[])
  
  return (
    <View>
      <Text style={styles.headerStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item)=>item}
        renderItem={({item})=>{return <Image style={styles.imageStyle} source={{ uri:item }}/>}}
      />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  headerStyle:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:10
  },
  imageStyle:{
    height:150,
    width:200,
    marginVertical:10,
    marginHorizontal:20,
    borderRadius:10,
  }
})