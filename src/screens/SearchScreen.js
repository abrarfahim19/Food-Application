import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchInput from '../components/SearchInput'
import useSearch from '../hooks/useSearch';
import GroupListScreen from './GroupListScreen';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [result, error, searchApi] = useSearch();

  return (
    <View>
        <SearchInput
            term={term}
            onTermChange={setTerm}
            onTermSubmitted={()=>searchApi(term)}
        />
        {
            <Text>{error}</Text>
        }
      <Text>Result found {result?.length}</Text>
        <GroupListScreen result={result}/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})