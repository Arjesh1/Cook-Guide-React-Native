import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FavouriteContext } from '../../store/context/favourites_context';
import { MEALS } from '../../data/dummyData';
import MealItem from '../components/MealItem';

const FavouritesScreen = () => {
    const favouriteMealContext = useContext(FavouriteContext);
    const faviouriteMealObj = MEALS.filter((meal)=> favouriteMealContext.ids.includes(meal.id))
    const renderMealItem = (itemData) => {
      return(
        <MealItem item={itemData.item} />
      )
    }

    if(faviouriteMealObj.length === 0){
      return <View style={styles.container}><Text style={styles.msgText}>No favourites added!</Text></View>
    }

  return (
    <View style={styles.container}>
      <FlatList data={faviouriteMealObj} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
  )
}

export default FavouritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16    
    },
    msgText: {
      textAlign: 'center',
      fontSize: 20
    }
})


