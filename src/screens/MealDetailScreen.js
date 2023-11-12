import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import IconButton from '../components/IconButton'
import { FavouriteContext } from '../../store/context/favourites_context';

const MealDetailScreen = ({route, navigation}) => {
  const [isFavourite, setIsFavourite] = useState()
  const favouriteMealContext = useContext(FavouriteContext);
  const meal = route.params.meal
  useEffect(()=>{
    setIsFavourite(favouriteMealContext.ids.includes(meal.id))
  }, [favouriteMealContext, meal.id])

  const handleOnHeaderHomePressed =() =>{
    navigation.navigate('MealsCategories')
  }
  const handleOnHeaderHeartPressed = () =>{
   if(isFavourite){
    favouriteMealContext.removeFavourite(meal.id)
   } else {
    favouriteMealContext.addFavourite(meal.id)
   }
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight :() =>{
        return <View style={{flexDirection: 'row', gap: '20%', alignItems: 'center'}}>
          <IconButton onPress={handleOnHeaderHeartPressed} name={isFavourite? 'heart' : 'heart-outlined' }/>
          <IconButton onPress={handleOnHeaderHomePressed} name='home'/>
          </View>
      }
    })
  }, [navigation, handleOnHeaderHeartPressed, handleOnHeaderHomePressed, isFavourite])

  return (
     <ScrollView>
    <View style={styles.container}>
      <Image source={{uri:meal.imageUrl}} style={styles.image} resizeMode="stretch"/>
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
         <Text style={styles.detailItem}>{meal.duration}m</Text>
         <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
         <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
      </View>
     
      <Text style={styles.ingredientTitle}>Ingredients</Text>
      <View  style={styles.ingredientContainer}>
      {meal.ingredients.map((ingredient, i) =>(
        <View key={ingredient} style={styles.listContainer}>
           <Text  style={styles.ingredientText}><Text style={styles.numbering}>{i+1}.</Text> {ingredient}</Text>
        </View>
      ))}
      </View>
      <Text style={styles.ingredientTitle}>Steps</Text>
      <View  style={styles.ingredientContainer}>
      {meal.steps.map((step, i) =>(
        <View key={step} style={styles.listContainer}>
           <Text  style={styles.ingredientText}><Text style={styles.numbering}>{i+1}.</Text> {step}</Text>
        </View>
      ))}
      </View>
    </View>
    </ScrollView>
  )
}

export default MealDetailScreen
const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
  image: {
        width: "100%",
        height: 200,
    },
  title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
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
  ingredientTitle:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  ingredientContainer:{
    borderTopWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap:4,
    
  },
  listContainer:{
    backgroundColor: '#E2AB1D',
    paddingVertical: 3,
    paddingHorizontal: '10%',
    borderRadius: 10
    
  },
  numbering:{
    fontWeight: 'bold',
    fontSize: 17,
  },
  ingredientText:{
    fontSize: 15,
    marginVertical: 2,
  },

})
