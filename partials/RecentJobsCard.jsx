import { useRouter } from 'expo-router';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Color from '../utils/constants/Color';

export default function RecentJobsCard({ item }) {
  const router = useRouter();
  return <TouchableHighlight
    onPress={() => router.push(`/job/${item.job_id}`)}
    style={{
      backgroundColor: Color.light,
      borderRadius: 10,
      padding: 10,
      marginRight: 12,
      width: '100%',
      height: 100,
      marginBottom: 12,
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15
      }}
    >

      <View
        style={{
          flexDirection: 'row'
        }}
      >
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
            backgroundColor: 'white',

          }}
        />

        <View
          style={{
            paddingHorizontal: 15
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: '#ccc',
              fontSize: 15,
              paddingBottom: 4,
              width: 250,
              fontFamily: 'InterSemi'
            }}
          >
            {item.job_title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              width: '90%',
              paddingRight: 10,
              paddingTop: 5
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: Color.lighter,
                fontSize: 12,
                width: '50%',
                fontFamily: 'InterRegular',
                paddingRight: 10
              }}
            >
              {item.employer_name}
            </Text>
            <Text
              style={{
                color: Color.lighter,
                fontSize: 12,
                fontFamily: 'InterRegular',
                width: '60%',
              }}
            >
              Posted on :  {new Date(item.job_posted_at_datetime_utc).toLocaleDateString('en-US', { dateStyle: 'long' })}
            </Text>
          </View>
        </View>
      </View>

    </View>

  </TouchableHighlight>
}