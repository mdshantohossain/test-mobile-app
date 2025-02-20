import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'



const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="sign-in"
      />
       <Stack.Screen
        name="sign-up"
      />
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </Stack>
  )
}

export default AuthLayout
