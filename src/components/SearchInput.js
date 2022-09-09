import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchInput = ({term,onTermChange,onTermSubmitted}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none'
        placeholder='Search...'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"#D9D9D9",
        height:50,
        marginVertical:10,
        marginHorizontal:20,
        flexDirection:"row",
        borderRadius:10
    },
    iconStyle:{
        fontSize:25,
        color:"black",
        alignSelf:'center',
        marginHorizontal:10
    },
    inputStyle:{
        fontSize:18,
        flex:1,
        marginEnd:10
    }
})