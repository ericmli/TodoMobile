import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Create } from '../screens/create'
import { Home } from '../screens/home'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'blue'
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back'
}

export default function MyStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Create"
          component={Create}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
