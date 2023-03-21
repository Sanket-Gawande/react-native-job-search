import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Color from '../utils/constants/Color';

export default function PopularJobCard({ item }) {
  const router = useRouter();
 
  return <TouchableHighlight
    style={{ position: 'relative' }}
    onPress={() => router.push(`/job/${item.job_id}`)}
  >
    <View
      style={{
        backgroundColor: Color.light,
        borderRadius: 10,
        padding: 10,
        marginRight: 12,
        width: 350,
        height: 190,
      }}
    >
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: 10
        }}
      >

        <View>
          <Image
            source={item?.employer_logo?.endsWith('.png') ? { uri: item.employer_logo } : require('../public/chetan.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              margin: 'auto',
              borderColor: Color.primary,
              borderWidth: 1,
              resizeMode: 'contain',
              backgroundColor: 'white'
            }}
          />
          <Text
            style={{
              color: '#ddd',
              fontSize: 15,
              paddingVertical: 8,
              width: 200,
              fontFamily: 'InterSemi'
            }}
            numberOfLines={1}
          >
            {item.employer_name}
          </Text>
        </View>
        <View
        >
          <Text
            style={{
              position: 'absolute',
              right: -20,
              top: 0,
              width: 100,
              color: 'white',
              backgroundColor: item.job_is_remote ? '#dc3545' : '#0d6efd',
              paddingVertical: 4,
              paddingHorizontal: 12,
              fontSize: 16,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            {item.job_is_remote ? 'Remote' : 'In-office'}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {/* job location */}
        <View>
          <Text
            style={{
              color: Color.primary,
              fontSize: 16,
              paddingHorizontal: 10,
              fontFamily: 'InterSemi'
            }}
          >
            {item.job_job_title}
          </Text>
          <Text
            style={{
              paddingHorizontal: 10,
              color: '#ddd',
              fontSize: 14,
              fontFamily: 'InterRegular'

            }}
          >
            {item.job_city}, {item.job_state}, {item.job_country}
          </Text>
        </View>
        {/* sallery */}
        <View>
          <Text>
            {item.min_salery}
          </Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
}