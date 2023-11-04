import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Dimensions } from "react-native";
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Trailer=()=> {
    const  navigation  = useNavigation();
    const { params } = useRoute();
    const[url, setUrl]= useState(true);
    const[isLoading, setIsLoading]= useState(true);
    const[isDone, setIsDone]= useState(false);

    const onDone=()=> {
        navigation.navigate('Details')
        // setIsVisible(false)
    }
    setTimeout(() => setIsDone(true), 2000)

    useEffect(()=>{
        if(params?.link){
            setUrl(params?.link)
            setIsLoading(false)
        }else{
            alert('official trailer not available')
            setIsLoading(false)
            setIsDone(false)
        }
    },[params])

  return (
    <View style={{ transform: [{ rotate: "90deg" }] }}>
        {isLoading ?
            <ActivityIndicator 
                size={'large'}
                color={'#000'}
                style={{justifyContent:'center', alignItems:'center', left:300}}
            />
            :
            <>
            <YoutubePlayer
                videoId={params?.link}
                height={SCREEN_WIDTH-5}
                width={SCREEN_HEIGHT-5}
                webViewProps={{
                injectedJavaScript: `
                    var element = document.getElementsByClassName('container')[0];
                    element.style.position = 'unset';
                    element.style.paddingBottom = 'unset';
                    true;
                `, }}
            />
                {isDone && 
                    <View style={{position: 'absolute', bottom:10, right:-300}}>
                        <Button
                            title="Done"
                            onPress={() => onDone() }
                        />
                     </View>

                }
            </>
        }
    </View>
  );
}
export default Trailer;
