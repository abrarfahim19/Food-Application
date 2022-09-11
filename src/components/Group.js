import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import SingleItem from './SingleItem'
import { withNavigation } from 'react-navigation'
const Group = ({title, results, navigation}) => {
  if (results.length==0) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
          return <TouchableOpacity
                    onPress={()=> navigation.navigate("Detail",{id:item.id})}>
                      <SingleItem
                        detail={item}
                      />
                  </TouchableOpacity>}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
    }
})

export default withNavigation(Group)