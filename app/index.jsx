import { Stack, useRouter } from 'expo-router'
import { ScrollView, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import HeaderOptions from '../partials/HeaderOptions'
import PopularJobs from '../partials/PopularJobs'
import RecentJobs from '../partials/RecentJobs'
import Welcome from '../partials/Welcome'

export default function App() {
  const router = useRouter()
  return (
    <SafeAreaView>
      <View>
        <Stack.Screen
          options={HeaderOptions({ title: 'Home' })}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: '#131929',

          }}
        >

          <View
            style={{
              flex: 1,
            }}
          >
            <Welcome />
            <PopularJobs />
            <RecentJobs />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  )
}
