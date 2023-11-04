import { MEALS } from '../../data/dummyData'
import { View, Text, StyleSheet } from 'react-native'

const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Meals Overview screen</Text>

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
