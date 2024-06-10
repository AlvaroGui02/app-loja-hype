import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import Account from './src/screens/Account'
import CadastrarItem from './src/screens/CadastrarItem';
import EditarItem from './src/screens/EditarItem'
import Item from './src/screens/Item';
import Loja from './src/screens/Loja';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#000' }
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />

        <Stack.Screen name="CadastrarItem" component={CadastrarItem} options={{ title: 'Cadastro de Item' }} />

        <Stack.Screen name="EditarItem" component={EditarItem} options={{ title: 'Editar Item' }} />

        <Stack.Screen name="Item" component={Item} options={{ title: 'Item' }} />

        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Lojas Hype"
      screenOptions={{
        tabBarActiveTintColor: "#fff", //Cor de ícones ativos
        tabBarInactiveTintColor: "#fff", //Cor de ícones inativos
        tabBarActiveBackgroundColor: '#00CED1',
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: '#000' },
        headerShown: true,
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#000' }
      }}
    >
      <Tab.Screen name="Cadastrar Item" component={CadastrarItem}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle-multiple" color={color} size={32} />
          ),
          tabBarLabel: () => null
        }}
      />

      <Tab.Screen name="Lojas Hype" component={Loja}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={32} />
          ),
          tabBarLabel: () => null
        }}
      />

      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={32} />
          ),
          tabBarLabel: () => null
        }}
      />
    </Tab.Navigator>
  );
}