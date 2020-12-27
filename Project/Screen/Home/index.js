import React from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen';
import ProductDetailes from '../ProductDetailes';
import ProductScreen from '../ProductScreen';
import OnboardingScreen from '../OnboardingScreen';

const HomeStack = createStackNavigator();

const MainHomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        elevation: 0, //android
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#bbb',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <HomeStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: false,

          title: 'Meat & Seafood',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="menu"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="search"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => {}}
              />
              <Icon.Button
                name="cart"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => {}}
              />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerBackTitleVisible: false,
          headerShown: false,

          title: 'Meat & Seafood',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="menu"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="search"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => {}}
              />
              <Icon.Button
                name="cart"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => {}}
              />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="ProductDetailes"
        component={ProductDetailes}
        options={{
          headerBackTitleVisible: false,

          title: 'ProductDetailes',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="menu"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="search"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => {}}
              />
              <Icon.Button
                name="cart"
                size={25}
                color={'#000'}
                backgroundColor={'#fff'}
                onPress={() => {}}
              />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
export default MainHomeScreen;
