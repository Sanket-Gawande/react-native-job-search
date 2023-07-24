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
            backgroundColor: Color.dark,
            height: 1000
          }}
        >
          <View
            style={{
              width: "95%",
              height: 100,
              backgroundColor: Color.light,
              borderRadius: 8,
              marginHorizontal: '2.5%',
              marginBottom: 20
            }}
          >

          </View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              borderColor: Color.primary,
              borderWidth: 2,
              left: 30,
              position: 'absolute',
              top: 20
            }}
            source={{ uri: user.picture.large }}
          />
          <View
            style={{
              padding: '2.5%',
              paddingVertical: 12
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'InterBold',
                fontSize: 20,

              }}
            >
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </Text>

            <Text
              style={{
                color: 'white',
                fontFamily: 'InterRegular',
                fontSize: 20,

              }}
            >
              {user.email}
            </Text>

            <Text
              style={{
                color: 'white',
                fontFamily: 'InterBold',
                opacity: .7,
                fontSize: 18,
                marginTop: 25,
                paddingVertical: 12,
                borderTopColor: Color.lighter,
                borderTopWidth: 2

              }}
            >
              Address
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'InterRegular',
                fontSize: 20,

              }}
            >
              {user.phone},
              {`\n`}
              {user.location.street.name},
              {user.location.city},
              {user.location.postcode}
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'InterRegular',
                fontSize: 20,
                paddingBottom: 12,
                borderBottomColor: Color.lighter,
                borderBottomWidth: 2
              }}
            >
              {user.location.state},
              {user.location.country}

            </Text>

            <View
              style={{
                borderBottomColor: Color.lighter,
                borderBottomWidth: 2,
                paddingVertical: 12
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'InterRegular',
                  fontSize: 20,

                }}
              >
                DOB :
                {new Date(user.dob.date).toLocaleString('en-in', { dateStyle: 'full' })}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'InterRegular',
                  fontSize: 20,

                }}
              >
                Gender :
                {user.gender}
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile
