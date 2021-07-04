import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card,  } from 'galio-framework'

const TopStores = () => {
    return (
        <View>

        <Text h5 style={styles.topStoresText}>
        Top Tiendas
      </Text>
      <View style={styles.topStoresScroll}>
        <Card
          flex
          borderless
          style={styles.topStoresCards}
          image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        <Card
          flex
          borderless
          style={styles.topStoresCards}
          
          image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </View>
      <View style={styles.topStoresScroll}>
        <Card
          flex
          borderless
          style={styles.topStoresCards}
          image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
        <Card
          flex
          borderless
          style={styles.topStoresCards}
          image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </View>
          </View>
    )
}

const styles = StyleSheet.create({
    topStoresText: {
      marginVertical: 10,
      marginLeft: 25,
    },
    topStoresCards: {
      width: 150,
      height: 200,
      marginHorizontal: 10,
      marginVertical: 10,
    },
    topStoresScroll: {
      flex: 2,
      overflow: "scroll",
      flexDirection: "row",
      flexWrap: "wrap",
      marginHorizontal: 20
    },
  });

export default TopStores
