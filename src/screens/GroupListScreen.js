import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Group from '../components/Group'

const GroupListScreen = ({result}) => {
    const showResultByPrice = (price) => {
        return result.filter((each)=>{
            return each.price === price;
        });
    };
    return (
    <View>
      <Group results={showResultByPrice('$')} title="Cheap"/>
      <Group results={showResultByPrice('$$')} title="Mid"/>
      <Group results={showResultByPrice('$$$')} title="Pricy"/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default GroupListScreen