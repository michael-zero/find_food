import React, {useState} from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, ErrorMessage] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} //newTerm => setTerm(newTerm)
            onTermSubmit={() => searchApi(term)}
            />
            {ErrorMessage ? <Text>{ErrorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}

            <ScrollView>
                <ResultsList  
                results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList n
                results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                <ResultsList  
                results={filterResultsByPrice('$$$')} title='Big Spender'/>
            </ScrollView>

        </>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: 'cornsilk',
    }
})

export default SearchScreen;