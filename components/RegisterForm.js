import React from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Text } from "galio-framework";

const RegisterForm = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
      <Text h6 style={{ textAlign: "center"
      }}>Completa los siguientes datos</Text>
      <Input
        rounded
        type="email-address"
        
        help="Nombre de el propietario"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Input
        rounded
        type="phone-pad"
        
        help="Cedula de ciudadanía"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Input
        rounded
        type="phone-pad"
        
        help="Fecha de nacimiento"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Input
        rounded
        type="email-address"
        placeholder=""
        help="Lugar de residencia"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
            <Input
        rounded
        type="email-address"
        placeholder=""
        help="Nombre del emprendimiento"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Input
        rounded
        type="email-address"
        placeholder=""
        help="Email"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Input
        rounded
        password
        viewPass
        placeholder=""
        help="Contraseña"
        bottomHelp
        style={{ borderColor: "#C1D0EF", borderWidth: 3 }}
        placeholderTextColor="#000000"
      />
      <Button style={{alignSelf: "center"}} color="#C1D0EF" round>
        Siguiente 
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 12,
  },

  logo: {
    width: 300,
    resizeMode:"contain",
    alignSelf: "center"
  },

  notRegisteredTest: {
    flexDirection: "row",
    bottom: -100,
  },
});

export default RegisterForm;
