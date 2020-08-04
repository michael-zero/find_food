import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [ErrorMessage, setErrorMessage] = useState('');

    const searchApi = async (search) => {
       try{ 
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: search,
                    location: 'san jose'
                }
            });//enviando parametros 

            setResults(response.data.businesses)
        }catch(error){
            console.log(error);
            setErrorMessage('Something went wrong')
        }
    }
    
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, ErrorMessage]
}