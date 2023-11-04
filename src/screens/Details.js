import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, Pressable, Animated, FlatList } from 'react-native';
import { theme, getAppFont } from '../utils';
import { PlayButton } from '../../assets/svg_files';



const Details =()=>{
    const { params } = useRoute();
    const { navigate } = useNavigation();
    const [data, setData] = useState(null);
    const [video, setVideo] = useState(null);

    const baseUrl = 'https://api.themoviedb.org/3/movie/';
    const apiKey = '303f1e82991b83ddaaa2c3f66cb1a9dd';

    const videoUrl = video !== null && video.filter((val) => val?.name?.includes("Official"))

    useEffect(()=> {
        if(params?.id){
        axios
            .get(`${baseUrl}/${params?.id}?api_key=${apiKey}`)
            .then((res) => res.data)
            .then((data) => {
                setData(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },[])

    useEffect(()=> {
        axios
            .get(`${baseUrl}/${params?.id}/videos?api_key=${apiKey}`)
            .then((res) => res.data)
            .then((data) => {
                setVideo(data?.results)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    
    function generateRandomColor() {
        var lettters = '123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++){
            color += lettters[Math.floor(Math.random() * 8)];
        }
        return color;
    }

    const videoPlayer = (link)=>{
        navigate('Trailer', {link})
    }

    return(
        <>
            <Animated.ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    <ImageBackground
                        source={{uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`}}
                        style={{height:600, width: '100%'}}
                        resizeMode='cover'
                    >
                        <View style={styles.imgView}>
                            <Text style={[styles.titleStyle,{marginBottom:15,textAlign:'center'}]}>In Theaters {data?.release_date}</Text>
                            <Pressable
                                onPress={() => {alert('sorry!')}}
                                style={styles.btnStyle}
                            >
                                <Text style={styles.titleStyle}>
                                    Get Tickets
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() => videoPlayer(videoUrl?.[0]?.key)}
                                style={[styles.btnStyle,{marginTop:10, backgroundColor:'transparent', flexDirection:'row'}]}
                            >
                                <PlayButton/>
                                <Text style={[styles.titleStyle, {marginLeft:10}]}>
                                    Watch Trailer
                                </Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                    <View style={[styles.container2]}>
                        <Text style={[styles.titleStyle,{color:theme.colors.titleClr}]}>
                            Geners
                        </Text>
                           <FlatList
                            data={data?.genres}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({item, index}) =>{
                                return(
                                    <View key={index} style={{ flexDirection:'row',flex:1, flexWrap:'wrap'}}>
                                        <Text style={[styles.textStyle,{backgroundColor: generateRandomColor()}]}>{item?.name}</Text>
                                    </View>
                                )
                            }}
                        />
                        <View>
                            <Text style={[styles.titleStyle,{color:theme.colors.titleClr}]}>
                                Overview
                            </Text>
                            <Text style={styles.subText}>{data?.overview}</Text>
                    </View>
                    </View>
                </View>
            </Animated.ScrollView>
        </>
    )

};
export default Details;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'yellow'
    },
    container2:{
        margin:20,
        // backgroundColor:'red'
    },
    imgView:{
        width:'80%',
        margin:10,
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    titleStyle:{
        color:theme.colors.white,
        // fontSize:theme.textVariants.title.fontSize
        fontSize:theme.textVariants.head.fontSize,
        ...getAppFont('Medium')
    },
    btnStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 10,
        backgroundColor: theme.colors.btnColor,
        borderWidth:1,
        borderColor:theme.colors.btnColor
        
    },
    textStyle:{
        // backgroundColor: generateRandomColor(),
        margin:5,
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:20,
        textAlign:'center',
        borderWidth:0.4,
        color:theme.colors.white
    },
    subText:{
        fontSize:theme.textVariants.text.fontSize,
        color:'#8F8F8F',
        padding:5
    }
})