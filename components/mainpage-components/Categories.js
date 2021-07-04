import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { Router, Link, Redirect, useHistory } from "react-router-native";
import { Text } from "galio-framework";

const Categories = ({ active }) => {
  let history = useHistory();
  const [cat1, setCat1] = useState(true);
  const [cat2, setCat2] = useState(false);
  const [cat3, setCat3] = useState(false);

  useEffect(() => {
    setCat(active);
  }, []);

  const setCat = (active) => {
    setCat1(false);
    setCat2(false);
    setCat3(false);

    switch (active) {
      case 1:
        setCat1(true);
        history.push("/food");

        break;
      case 2:
        setCat2(true);
        history.push("/hand");
        break;
      case 3:
        setCat3(true);
        history.push("cloth");
        break;

      default:
        break;
    }
  };

  return (
    <View>
      <Image style={styles.logo} source={require("../../assets/logo.jpeg")} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.categories}
      >
        <Text
          bold
          onStartShouldSetResponder={() => {
            history.push("/food");
          }}
          h5={cat1}
          h6={!cat1}
          style={{ marginHorizontal: 12 }}
        >
          Comida
        </Text>

        <Text
          bold
          onStartShouldSetResponder={() => {
            history.push("/hand");
          }}
          h5={cat2}
          h6={!cat2}
          style={{ marginHorizontal: 12 }}
        >
          Artesanias
        </Text>
        <Text
          bold
          onStartShouldSetResponder={() => {
            history.push("/cloth");
          }}
          h5={cat3}
          h6={!cat3}
          style={{ marginHorizontal: 12 }}
        >
          Prendas de vestir
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: "40%",
    marginHorizontal: 15,
  },
  logo: {
    width: 300,
    marginTop: 1,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: -200,
  },
});

export default Categories;
