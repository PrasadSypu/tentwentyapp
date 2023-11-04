import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import { theme, getAppFont } from '../../utils/theme'

const TabButton = ({ icon, active = false, onPress, style, title, line }) => {
 return (
     <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[{
          alignItems: 'center',
          height: 60,
          width: 90,
          alignSelf: 'center',
          flexDirection:"row",
          }, style]}>
            <View>
            {icon}
            </View>
              <Text 
                style={{ 
                  color: theme.colors.white,
                  backgroundColor:theme.colors.black,
                  marginLeft:5,
                  marginTop:8,
                  fontSize: theme.textVariants.header1.fontSize,
                  ...getAppFont(active ? 'Medium' : 'Regular')
                }}
              >
                {title}
              </Text>
        </View>
     </TouchableWithoutFeedback>
   </View >
  );
};
const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
 },
 button: { height: 50 },
});

const areEqual = (prevProps, nextProps) => {
 return prevProps.onPress === nextProps.onPress;
};
export default React.memo(TabButton, areEqual);