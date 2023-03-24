import { Stack } from 'expo-router'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import HeaderOptions from '../partials/HeaderOptions'
import user from '../public/user'
import Color from '../utils/constants/Color'
const profile = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={HeaderOptions({ title: 'Profile' })}
      />
      <ScrollView>
        <View
          style={{
            backgroundColor: Color.dark
          }}
        >
          <Image
            style={{ width: 150, height: 150, borderRadius: 100, borderColor: Color.primary, borderWidth: 2, alignSelf : 'center' }}
            source={{ uri: user.picture.large }} />
          <Text
            style={{
              color: 'white',
              fontFamily: 'InterRegular',
              fontSize: 16

            }}
          >
            {JSON.stringify(user, null, 4)}
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile
