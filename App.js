import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "galio-framework";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import MainPage from "./components/MainPage";
import { NavBar } from "galio-framework";
import { NativeRouter, Route } from "react-router-native";
import FoodCategory from "./components/mainpage-components/FoodCategory";
import HandmadeCategory from "./components/mainpage-components/HandmadeCategory";
import ClothCategory from "./components/mainpage-components/ClothCategory";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route path="/food" component={FoodCategory} />
      <Route path="/hand" component={HandmadeCategory} />
      <Route path="/cloth" component={ClothCategory} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
