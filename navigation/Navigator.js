import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import FavorisScreen from '../screens/FavorisScrenn';
import TagsScreen from '../screens/TagsScreen';
import MainRecette from "../screens/MainRecette";
import ListeRecettes from "../components/ListeRecettes";
import ListeTags from "../components/ListeTags";


const Navigator = createStackNavigator({

    Home: {screen: HomeScreen, component: ListeRecettes},
    Tags: {screen: TagsScreen, component: ListeTags},
    Favoris: {screen: FavorisScreen, component: ListeRecettes},
    Ingredients: {screen: MainRecette},
});

const AppNavigator=createAppContainer(Navigator);

export default AppNavigator;


