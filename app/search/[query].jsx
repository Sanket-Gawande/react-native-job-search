import { Stack, usePathname, useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native'
import HeaderOptions from '../../partials/HeaderOptions'
import Color from '../../utils/constants/Color'
import { response } from '../../public/example.response'
import { ActivityIndicator } from 'react-native'
import RecentJobsCard from '../../partials/RecentJobsCard'
export default function Search() {
  const router = useRouter()
  const query = usePathname().split('/')[2];
  const [loading, setLoading] = React.useState(true)
  const [filtered, setFiltered] = React.useState([])

  // fake loading for 1 second

  React.useEffect(() => {
    if (!query) return;
    setTimeout(() => {
      const filtered = response.data.filter((job) =>

      (job.job_job_title.toLowerCase().includes(query.toLowerCase())
        || job.job_description.toLowerCase().includes(query.toLowerCase())
      )
      )
      setFiltered(filtered)
      setLoading(false)
    }, 500)
  }, [])
  return (
    <SafeAreaView>
      <Stack.Screen
        options={HeaderOptions({ title: `Search result for '${query}'` })}
      />
      <ScrollView>
        <View
          style={{
            padding: 20,
            backgroundColor: Color.dark,
            minHeight: 850
          }}
        >
          {loading ? (
            <ActivityIndicator animating color={Color.primary} size={'large'} />
          ) :
            filtered.length === 0
              ?
              <Text
                style={{
                  color: Color.primary,
                  fontSize: 20,
                  textAlign: 'center',
                  paddingVertical: 20
                }}
              >
                No results found
              </Text>
              : (
                (filtered ?? [{}]).map((job, index) => {
                  let id = (Math.random().toString());
                  return <>
                    <RecentJobsCard
                      key={id}
                      item={job}
                    />
                  </>
                })
              )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
