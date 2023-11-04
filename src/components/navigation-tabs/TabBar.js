import React, { useCallback, useRef } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import TabButton from './TabButton';
import InactiveDashboard from '../../../assets/svg_files/InactiveDashboard';
import { theme } from '../../utils';




const TabBar = ({ state, navigation }) => {

    //Ref
    const tabRef = useRef();

    const tabBarIcon = useCallback((route, focused, onPress) => {
	switch (route.name) {
		case 'Dashboard':
			return ( 
            <TabButton 
                icon = {
					focused ? < InactiveDashboard /> : < InactiveDashboard />
				}
				
				active = {
					focused
				}
				onPress = {
					onPress
				}
				title = {
					route.name
				}
				/>
			);
		case 'Overview':
			return ( 
            <TabButton 
                icon = {
					focused ? < InactiveDashboard /> : < InactiveDashboard />
				}
				
				active = {
					focused
				}
				onPress = {
					onPress
				}
				title = {
					route.name
				}
				/>
			);
		default:
			return null;
	}
}, []);

const onTabPress = useCallback(
    (route, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    },
    [navigation],
);

const tabMapper = useCallback(
    (route, index) => {
        const isFocused = state.index === index;
        return ( 
            <React.Fragment key = {`navigation-tab-${index}`} > {
                tabBarIcon(route, isFocused, () => onTabPress(route, isFocused))} 
            </React.Fragment>
        );
    },
    [state.index],
);

    return ( 
        <View style = {styles.container} >
            <Animated.View 
                ref = {tabRef} 
                style = {styles.transitioningView} 
            >
                <Text>
                    {state.routes.map(tabMapper)} 
                </Text>
                
            </Animated.View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        borderTopWidth: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        elevation: 0,
        bottom: 0,
        zIndex: 0,
    },
    transitioningView: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
});

export default React.memo(TabBar);