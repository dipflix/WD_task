import React from 'react'
import HomeScreen from 'screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import { screenOptions } from 'constants/config'
import ServiceStaffScreen from 'screens/ApplicationCreate'
import { RootParamList } from "screens/types";

const Stack = createStackNavigator<RootParamList>()

const RootRouter = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        ...screenOptions(theme, navigation),
      })}
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ApplicationCreate"
        options={{ title: 'Заявка на ремонт' }}
        component={ServiceStaffScreen}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
