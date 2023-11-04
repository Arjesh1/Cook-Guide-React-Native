import { MEALS } from '../../data/dummyData'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({route}) => {
  const catId = route.params.categoryId
  const  displayedMeals = MEALS.filter((mealItems) =>{
    return mealItems.categoryIds.indexOf(catId) >= 0
  })

  const renderMealItem = (itemData) => {
    return(
      <MealItem title={itemData.item.title}/>
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
