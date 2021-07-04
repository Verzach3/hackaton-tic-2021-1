import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card,  } from 'galio-framework'
import TopStores from './TopStores'
import Categories from './Categories'


const ClothCategory = () => {
    return (
        <View>
             <Categories active={3}/>
      <ScrollView horizontal style={styles.container}>
      
        <Card
          flex
          borderless
          style={styles.card}
          image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <Card
          flex
          borderless
          style={styles.card}
          image="https://images.unsplash.com/photo-1619032209422-fc090f6a3f5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </ScrollView>
        <TopStores/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
      width: 300,
      resizeMode: "contain",
      alignSelf: "center",
    },
    container: {
      display: "flex",
      alignSelf: "center",
      textAlignVertical: "center",
      resizeMode: "contain",
      marginTop: 10,
      marginHorizontal: 12,
    },
    card: {
      width: 350,
      height: 200,
      marginHorizontal: 12,
    },
    topStoresText: {
      marginVertical: 10,
      marginLeft: 25,
    },
    topStoresCards: {
      width: 150,
      height: 200,
      marginHorizontal: 20,
      marginVertical: 10,
    },
    topStoresScroll: {
      flex: 2,
      overflow: "scroll",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });

export default ClothCategory
