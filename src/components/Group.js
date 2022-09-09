import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Group = ({title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>{results.length}</Text>
      <FlatList
        data={results}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{return <Text>{item.name}</Text>}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default Group