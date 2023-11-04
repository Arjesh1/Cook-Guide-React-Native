import { MEALS, CATEGORIES } from '../../data/dummyData'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem'
import { useLayoutEffect } from 'react'

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId
  const  displayedMeals = MEALS.filter((mealItems) =>{
    return mealItems.categoryIds.indexOf(catId) >= 0
  })

  const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

  useLayoutEffect(()=>{
     navigation.setOptions({
    title: categoryTitle
  })
  }, [catId, navigation])
 

  const renderMealItem = (itemData) => {
    return(
      <MealItem item={itemData.item} />
    )
  }



  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16    
    }
})
