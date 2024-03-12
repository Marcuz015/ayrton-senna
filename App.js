import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import home from './components/Home';
import sobre from './components/Sobre';
import vitorias from './components/Vitorias';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor: '#DAA520',            
          },
          headerTitleStyle:{
            color: 'black ',
            fontWeight: '900',    
          },
          headerTitleAlign: 'start',
         tabBarInactiveTintColor: 'black',
         tabBarInactiveBackgroundColor: '#DAA520',
         tabBarActiveTintColor: '#AA2222'
        }}>
        <Tabs.Screen name='Home'     component={home} 
          options={{
            tabBarIcon:({color, size})=>(<FontAwesome name="home" size={size} color={color} /> )
          }}
        />
        <Tabs.Screen name='Sobre'     component={sobre} 
          options={{
            tabBarIcon:({color, size})=>(<FontAwesome name="address-book" size={size} color={color} /> )
          }}
        />
        <Tabs.Screen name='Vitorias'     component={vitorias} 
          options={{
            tabBarIcon:({color, size})=>(<FontAwesome name="trophy" size={size} color={color} /> )
          }}
        />
      </Tabs.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
