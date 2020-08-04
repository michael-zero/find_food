import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
           <Feather name="search" style={styles.iconStyle} color="black" />
           <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,

        
    },

    inputStyle: {
        flex: 1,
        fontSize: 18
    },

    iconStyle: {
      fontSize: 35,
      marginHorizontal: 9,
      alignSelf: 'center'  
    }
})

export default SearchBar;