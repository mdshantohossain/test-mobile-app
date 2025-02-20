import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import icons from '@/constants/icons';
import TabIcon from '@/components/TabIcon';



const TabsLayout = () => {

    
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 74,
          paddingTop: 12
        },
        animation: 'fade'

      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />

<Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          )
        }}
      />

<Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          )
        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }}
      />


    </Tabs>
  )
}

export default TabsLayout
