import { Platform } from "react-native"
import { Image } from "react-native"
import { View,Pressable, Text, StyleSheet } from "react-native"


const MealItem = ({item}) => {
  return (
    <View style={styles.mealItem}>
        <Pressable style={{ borderRadius: 8, overflow: 'hidden'}}>
            <View>
                <Image source={{uri:item.imageUrl}} style={styles.image} resizeMode="stretch"/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.details}>
                <Text>{item.duration}m</Text>
                <Text>{item.complexity.toUpperCase()}</Text>
                <Text>{item.affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
      </View>
    
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.20,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
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
    }

})
