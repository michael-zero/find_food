import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }
    return (
        <>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return (
                        <Image source={{uri: item}} style={styles.image}/>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;