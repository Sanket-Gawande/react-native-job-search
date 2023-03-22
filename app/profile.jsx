import { Stack } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import HeaderOptions from '../partials/HeaderOptions'
import user from '../public/user'
const profile = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={HeaderOptions({ title: 'Profile' })}
      />
      <ScrollView>
        <View>
          <Text>
            {JSON.stringify(user,null,4)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile
