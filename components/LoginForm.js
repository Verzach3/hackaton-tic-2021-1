import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Input, Button, Text } from "galio-framework";

const LoginForm = () => {

  return (
    <View style={styles.container}>
        <Image style={styles.logo}source={require("../assets/logo.jpeg")}/>
      <Input
        rounded
        type="email-address"
        placeholder="Email"
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Input
        rounded
        password
        viewPass
        placeholder="Contraseña"
        style={{ borderColor: "#C1D0EF", borderWidth: 3}}
        placeholderTextColor="#000000"
      />
      <Button color="#C1D0EF" round>Login</Button>
    <View style={styles.notRegisteredTest}>
      <Text>No estas registrado? </Text>
      <Text color="#C1D0EF">Crea una cuenta</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 12,
    },
    
    logo: {
        width: 300,
        resizeMode:"contain",
    },

    notRegisteredTest: {
        flexDirection: "row",
        bottom: "-10%"
    }
  });
  

export default LoginForm;
