import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Color from '../utils/constants/Color'

const Welcome = () => {
  return (
    <View
      style={{
        padding: 20,
        paddingVertical: 40
      }}
    >
      <Text
        style={{
          fontFamily: 'InterMedium',
          fontSize: 18,
          color: Color.lighter
        }}
      >
        Hello 👋, Sanket

      </Text>
      <Text
        style={{
          color: Color.primary,
          fontFamily: 'InterSemi',
          fontSize: 24,
        }}
      >
        Find your dream job!
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 12
        }}
      >
        <TextInput
          style={{
            fontFamily: 'InterMedium',
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 12,
            color: Color.light,
            backgroundColor: Color.lighter,
            fontSize: 16,
            flex: 1
          }}
          placeholder='What are you looking for?'
        />
        <TouchableOpacity
          style={{

            backgroundColor: Color.primary,
            borderRadius: 12,
            marginLeft: 8,
            width: 60,
            height: 50,
            justifyContent: 'center',
            alignItems : 'center'
          }}
        >
          <Image
            style={{
              width: 30,
              resizeMode: 'contain',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 12
            }}
            source={
              require('../public/search.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome