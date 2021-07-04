import React from "react";
import { ScrollView, StyleSheet, View, FlatList, Image } from "react-native";
import { Text, Card } from "galio-framework";
import TopStores from "./TopStores";
import FoodCategory from "./FoodCategory";
import HandmadeCategory from "./HandmadeCategory";



const MainPageProducts = () => {
  return (
    <View>
        <FoodCategory/>
    </View>
  );
};



export default MainPageProducts;
