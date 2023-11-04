import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const Card =({title}) => {
    return (
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={[styles.textStyle]}>{title}</Text>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    textStyle:{
        margin:10,
        padding:10,
        borderRadius:20,
        width:'30%',
        textAlign:'center',
        borderWidth:0.2,
        backgroundColor:'red',
        flexDirection:'row'
    }
})