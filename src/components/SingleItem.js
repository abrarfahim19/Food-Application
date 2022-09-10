import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SingleItem = ({detail}) => {
    console.log(detail)
  return (
    <View>
        <Image style={styles.imageStyle} source={{uri:detail.image_url}}/>
        <View style={styles.detailStyle}>
            <Text style={styles.headerStyle}>{detail.name}</Text>
            <Text style={styles.headerStyle}>🌟 {detail.rating}</Text>
        </View>
    </View>
  )
}

export default SingleItem

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
        width:200,
        marginHorizontal:10
    },
    headerStyle:{
        fontSize:13,
        fontWeight:'bold',
        marginVertical:5,
        marginStart:10
    },
    detailStyle:{
        flexDirection: 'row'
    }
})