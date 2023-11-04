import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();
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
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  
});
