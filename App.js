import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppStart from './src/navigation/AppStart';


const appFonts = {
  'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
  'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
  'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
  'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
  'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
  'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
  'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
  'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
};

const loadFontsAsync = async() =>{
  await Font.loadAsync(appFonts);
  return true;
}

export const navigationRef = createNavigationContainerRef();


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  //loadfont
loadFontsAsync().then(() =>{
  setFontLoaded(true)
})

  return fontLoaded ? (
    <>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar 
        style="auto" 
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <NavigationContainer
        ref={navigationRef}
      >
        <AppStart/>
      </NavigationContainer>
    </>
  ): null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
