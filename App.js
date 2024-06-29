import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 파일
import LoginScreen from './Login';
import HomeScreen from './Home';
import SearchScreen from './Search';
import FavoriteListScreen from './FavoriteList';
import MyInfoScreen from './MyInfo';

// 이미지
import HomeIconIMG from './Image/홈_아이콘.png';
import SearchIconIMG from './Image/검색_아이콘.png';
import FavoriteListIconIMG from './Image/찜_아이콘.png';
import MyInfoIconIMG from './Image/내정보_아이콘.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabBarIcon = (focused, name)=>{
    let iconImagePath;

    if(name==='홈'){
        iconImagePath = require('./Image/홈_아이콘.png')
    } else if (name==='검색'){
        iconImagePath = require('./Image/검색_아이콘.png')
    } else if (name==='찜목록'){
        iconImagePath = require('./Image/찜_아이콘.png')
    } else if (name==='내정보'){
        iconImagePath = require('./Image/내정보_아이콘.png')
    }
    return (
        <Image 
        style={{
            opacity: focused ? 1 : 0.5,
            width: focused ? 24 : 22,
            height: focused ? 24 : 22,
        }}
        source = {iconImagePath}/>
    )
}

MainScreen = () => {
    return (
            <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        color: focused ? 'black' : 'gray',
                        marginBottom: '5%' }}>
                        {route.name}
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    TabBarIcon(focused, route.name)
                ),
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 1000,
                    height: 60,
                },
                headerShown: false
            })}
            >
                <Tab.Screen name="홈" component={HomeScreen} />
                <Tab.Screen name="검색" component={SearchScreen} initialRouteName='검색'/>
                <Tab.Screen name="찜목록" component={FavoriteListScreen} />
                <Tab.Screen name="내정보" component={MyInfoScreen} />
            </Tab.Navigator>
    )
}

class App extends Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login'  screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Main" component={MainScreen}/>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
  }
};

export default App;