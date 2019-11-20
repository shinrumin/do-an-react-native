import React from 'react';
import { Text } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import AboutScreen from './AboutScreen';
import Icon from 'react-native-vector-icons/Ionicons'

export default createStackNavigator({
    About: {
        screen: AboutScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#3a9ad3',
            },
            // headerTitle: '',
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                flex: 1
            },
            headerLeft: <Icon 
                style={{ paddingLeft: 10, color: 'white' }}
                onPress={() => navigation.openDrawer()}
                name='md-menu'
                size={30}
            />,
            
          }),
    }
});