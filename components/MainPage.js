import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { NavBar, Card, Button } from "galio-framework";

const MainPage = () => {
  const [isShow, setShow] = useState(false);
  return (
    <View>
        <Text onClick={() => {console.log("Hola")}}>Hola</Text>
    </View>
  );
};

export default MainPage;
