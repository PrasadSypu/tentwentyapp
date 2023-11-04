import React from 'react';


const colors = {
    black: '#000',
    white: '#fff',
    btnColor: '#61C3F2',
    titleClr: '#202C43'
    
}

export const theme = {
    colors,
    textVariants: {
        title: {
            fontSize: 22,
            fontFamily: 'Poppins-Bold'
        },
        header: {
            fontSize: 24,
            fontFamily: 'Poppins-SemiBold'
        },
        header1: {
            fontSize: 20,
            fontFamily: 'Poppins-SemiBold'
        },
        header2: {
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold'
        },
        head: {
            fontSize: 16,
            fontFamily: 'Poppins'
        },
        text: {
            fontSize: 14,
            fontFamily: 'Poppins'
        },
    }
}

export const getAppFont =(type = 'Regular') => {
    return { fontFamily: `Poppins-${type}`};
};