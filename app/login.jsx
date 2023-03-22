import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const login = () => {
  return (
    <SafeAreaView>
      <Stack.Stack />
      <View>
        <Text>
          Login screen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default login