import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MealDetailScreen = ({route}) => {
  const meal = route.params.meal
  return (
    <View style={styles.container}>
      <Image source={{uri:meal.imageUrl}} style={styles.image} resizeMode="stretch"/>
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
         <Text style={styles.detailItem}>{meal.duration}m</Text>
         <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
         <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
      </View>
    </View>
  )
}

export default MealDetailScreen
const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  image: {
        width: "100%",
        height: 200,
    },
  title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
  },
  details:{
        flexDirection:'row',
        alignItems: "center",
        padding: 8,
        justifyContent: "space-around"
  },
  detailItem:{
    width: '30%',
    paddingVertical: 10,
    backgroundColor: '#F4A460',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

})
