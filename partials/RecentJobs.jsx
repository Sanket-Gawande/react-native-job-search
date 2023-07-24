import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import Color from '../utils/constants/Color'
import getData from '../utils/getData'
import { response } from '../public/example.response'
import PopularJobCard from './PopularJobCard'
import RecentJobsCard from './RecentJobsCard'
const RecentJobs = () => {
  // const { loading, data, error } = getData('search', 'javascript developer')
  const loading = false;
  const error = false;
  const data = [...response.data]

  return (
    <View
      style={{
        padding: 12
      }}
    >

      <Text
        style={style.Heading}
      >
        Recent Jobs
      </Text>
      {
        error
          ? <View
            style={{
              backgroundColor: 'rgba(255,0,0,.2)',
              borderRadius: 6,
              paddingHorizontal: 12,
              paddingVertical: 12,
              marginTop: 18
            }}
          >
            <Text
              style={{
                color: 'red',
                fontSize: 18
              }}
            >
              {error}
            </Text>
          </View>
          : null
      }
      <View>
        {
          loading
            ? <ActivityIndicator />
            : null
        }
      </View>
      <View
        style={{ marginTop: 10 }}
      >
        {data.map((item) =>
          <RecentJobsCard item={item} key={item?.employer_name} />
        )}

      </View>
    </View>
  )
}


const style = StyleSheet.create({
  Heading: {
    fontSize: 20,
    color: Color.lighter
  }
})
export default RecentJobs