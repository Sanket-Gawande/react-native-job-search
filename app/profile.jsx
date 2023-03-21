import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import HeaderOptions from '../partials/HeaderOptions'

const profile = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={HeaderOptions({ title: 'Profile' })}
      />
      <ScrollView>
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile
