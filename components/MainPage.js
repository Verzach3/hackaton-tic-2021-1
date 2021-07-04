import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { NavBar, Card, Button } from "galio-framework";
import { Link, Route, NativeRouter } from "react-router-native";
import Categories from "./mainpage-components/Categories";
import MainPageProducts from "./mainpage-components/MainPageProducts";
import FoodCategory from "./mainpage-components/FoodCategory";
import HandmadeCategory from "./mainpage-components/HandmadeCategory";
import ClothCategory from "./mainpage-components/ClothCategory";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


const MainPage = () => {
  const [isShow, setShow] = useState(false);
  return (
    <ScrollView>
        <Categories/>



    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default MainPage;
