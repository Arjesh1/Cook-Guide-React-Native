import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { FavouriteContext } from '../../store/context/favourites_context';
import { MEALS } from '../../data/dummyData';

const FavouritesScreen = () => {
    const favouriteMealContext = useContext(FavouriteContext);
    const [selectedFavourite, setSelectedFavourite] = useState([])

    useEffect(()=>{
      favouriteMealContext.ids.map((item) => {
      const faviouriteMealObj = MEALS.filter((meal)=> meal.id === item )
      setSelectedFavourite((prev) => [...prev, ...faviouriteMealObj])
    })
    }, [])

    console.log(selectedFavourite)

  return (
    <View>
        <Text>
            FavouritesScreen 
        </Text>
      
    </View>
  )
}

export default FavouritesScreen
