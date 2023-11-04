import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { theme, getAppFont } from '../utils';



const MovieCard =({ onPress, style, img, movie })=>{
    return(
        <View style={[styles.container, style]}>
            <TouchableWithoutFeedback onPress={onPress}>
                <Image 
                    source={{uri:img}}
                    // source={require('../../assets/images/mv1.png')} 
                    resizeMode='cover'
                    style={{width:'100%', height:200, borderRadius:20}}
                    // style={{width: 400, height: 400}}
                />
                <Text style={styles.textStyle}>{movie}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default MovieCard;

const styles = StyleSheet.create({
    container: {  
        // backgroundColor:'red',
        // justifyContent:'center',
        margin:10,
        borderRadius:20,
    },
    textStyle:{
        position:'absolute', 
        color: theme.colors.white,
        bottom: 10,
        paddingLeft:10,
        fontSize:theme.textVariants.title.fontSize,
        ...getAppFont('Regular')
    }
})