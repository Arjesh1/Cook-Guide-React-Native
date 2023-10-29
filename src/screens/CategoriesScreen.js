import { View, FlatList, StyleSheet } from 'react-native'
import {CATEGORIES} from '../../data/dummyData'
import CategoryGridTile from '../components/CategoryGridTile'

const renderCategoryItem = (itemData)=> {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

const CategoriesScreen = () => {
    
  return (
    <View style={styles.mainContainer}>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // alignItems: 'center',
        padding: 20
    }
})
