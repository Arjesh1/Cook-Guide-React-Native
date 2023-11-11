import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer'
import FavouritesScreen from './src/screens/FavouritesScreen';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator()

// function DrawerNavigator(){
//   return(
//     <Drawer.Navigator>
//       <Drawer.Screen name="Categories" component={CategoriesScreen}/>
//       <Drawer.Screen name="Favourites" component={FavouritesScreen}/>
//     </Drawer.Navigator>
//   )
// }
export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MealsCategories' 
      screenOptions={{  
          headerStyle:{backgroundColor:'#5A3921'},
          headerTintColor: "white",
          contentStyle:{backgroundColor: '#F5FFFA'}
          }}
          >
        <Stack.Screen 
        name="MealsCategories" 
        component={CategoriesScreen} 
        options={{ 
          title: 'All Categories', 
          }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
        
        //one option
        // options={({route, navigation})=>{
        //   const catId = route.params.categoryId
        //   return {
        //     title: catId
        //   }
        // }}
        />
         <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          title: 'Meal Detail'
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  
});
