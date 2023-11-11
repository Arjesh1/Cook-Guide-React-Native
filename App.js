import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './src/screens/FavouritesScreen';
import { Entypo } from '@expo/vector-icons';
import FavouriteContextProvider from './store/context/favourites_context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{  
          headerStyle:{backgroundColor:'#5A3921'},
          headerTintColor: "white",
          contentStyle:{backgroundColor: '#F5FFFA'}
          }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerIcon: ({color, size}) => <Entypo name='list' size={size} color={color} /> 
      }}/>
      <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{
        drawerIcon: ({color, size}) => <Entypo name='heart' size={size} color={color} /> 
      }}/>
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <FavouriteContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MealsCategories' 
      screenOptions={{  
          headerStyle:{backgroundColor:'#5A3921'},
          headerTintColor: "white",
          sceneContainerStyle:{backgroundColor: '#F5FFFA'},
          drawerStyle: {
             backgroundColor: '#5A3921',
          },
          
          }}
          >
        <Stack.Screen 
        name="MealsCategories" 
        component={DrawerNavigator} 
        options={{ 
          headerShown: false, 
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
    </FavouriteContextProvider>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  
});
