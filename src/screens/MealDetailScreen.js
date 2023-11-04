import React from 'react'
import { View, Text } from 'react-native'

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId
  console.log(mealId)
  return (
    <View>
      <Text>meal datail{mealId}</Text>
    </View>
  )
}

export default MealDetailScreen
