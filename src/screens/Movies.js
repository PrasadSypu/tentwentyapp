import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Movies= () => {
    const { navigate } = useNavigation();
    const [apiData, setApiData] = useState(null);

    const Data = [
        {
            image: require('../../assets/images/mv1.png'),
            title: 'Free Guy'
        },
        {
            image: require('../../assets/images/mv2.png'),
            title: 'The King`s Man'
        }
    ]

    const baseUrl = 'https://api.themoviedb.org/3/movie/upcoming'
    const apiKey = '303f1e82991b83ddaaa2c3f66cb1a9dd'

    useEffect(() => {
        axios
            .get(`${baseUrl}?api_key=${apiKey}`)
            .then((res) => res.data)
            .then((data) => {
                setApiData(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    const movieid = (id) =>{
        // console.warn(id)
        navigate('Details', {id})
    };
    
    return (
        <>
            <View  style={{flex:1}}>
                <FlatList
                    data={apiData?.results}
                    renderItem={({item, index}) => {
                        return(
                            <View key={index}>
                                <MovieCard
                                    movie={item.title}
                                    img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    onPress={() => movieid(item?.id) }
                                />
                            </View>
                        )
                    }}
                />
            </View>
        </>
    );
}

export default Movies;