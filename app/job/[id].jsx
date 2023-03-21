import { Stack, usePathname, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, Image, TouchableHighlight } from 'react-native'
import { ScrollView, Text, View, SafeAreaView } from 'react-native'
import HeaderOptions from '../../partials/HeaderOptions'
import { response } from '../../public/example.response'
import Color from '../../utils/constants/Color'


export default function App() {
  const router = useRouter();
  const [tab, setTab] = useState('description');
  const id = usePathname().split('/')[2]
  const job = response.data.find((job) => job.job_id === id);
  useEffect(() => {
    router.setParams({ name: job.job_job_title });
  }, [])
  return (
    <SafeAreaView>
      <Stack.Screen
        options={HeaderOptions({ title: job.job_job_title })}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#131929',
        }}
      >
        <View
        >


          {/* job details */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={job?.employer_logo?.endsWith('.png') ? { uri: job.employer_logo } : require('../../public/chetan.png')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                margin: 12,
                borderColor: Color.primary,
                borderWidth: 1,
                resizeMode: 'contain',
                backgroundColor: 'white',
                padding: 10,
              }}
            />
            <View
              style={{
                paddingLeft: 18,
                width: '100%'
              }}
            >
              <Text
                style={{
                  color: Color.primary,
                  fontSize: 20,
                  fontFamily: 'InterSemi'
                }}
                numberOfLines={1}
              >
                {job.job_job_title}
              </Text>
              <Text
                style={{
                  color: '#ddd',
                  fontSize: 16,
                  paddingTop: 2,
                  fontFamily: 'InterRegular'
                }}
                numberOfLines={1}
              >
                {job.employer_name}
              </Text>
            </View>
          </View>
          {/* about */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 12
            }}
          >
            <Text
              style={{
                color: job.job_is_remote ? '#dc3545' : '#0d6efd',
                paddingVertical: 4,
                fontSize: 16,
                borderRadius: 8,
                fontFamily: 'InterSemi'
              }}
            >
              {job.job_is_remote ? 'Remote' : 'In-office'}
            </Text>
            <Text
              style={{
                color: Color.lighter,
                fontSize: 16,
                paddingTop: 2,
                fontFamily: 'InterSemi'
              }}
            >{job.job_employment_type}
            </Text>
          </View>
          {/* tabs view */}
          <FlatList
            horizontal
            data={[
              'Description',
              'Responsibilities',
              'Highlights',
            ]}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                onPress={() => setTab(item.toLowerCase())}
                key={index}
                style={{
                  marginRight: 12,
                  borderRadius: 20,
                  overflow: 'hidden',
                  borderColor: Color.lighter,
                  color: 'white',
                  borderWidth: 1,
                  height: 45,
                  backgroundColor: tab === item.toLowerCase() ? Color.primary : Color.light,
                }}

              >
                <Text
                  style={
                    {
                      color: 'white',
                      paddingHorizontal: 12,
                      paddingVertical: 10,

                      width: 150,
                      textAlign: 'center',
                    }
                  }
                >
                  {item}
                </Text>
              </TouchableHighlight>
            )}
            style={{
              padding: 18,
              backgroundColor: Color.light,
              marginTop: 12,
              flexDirection: 'row',
            }}
          >
          </FlatList>
          {/* job description */}
          {
            tab === 'description'
              ? <View>
                <Text
                  style={{
                    color: '#ddd',
                    fontSize: 16,
                    paddingTop: 20,
                    paddingHorizontal: 20,
                    fontFamily: 'InterRegular'
                  }}
                >
                  {job.job_description}
                </Text>
              </View>
              : null
          }
          {/* job responsibilities */}
          {
            tab === 'responsibilities'
              ? <View
                style={{
                  flex: 1,
                  marginTop: 12,
                  minHeight: 600,
                }}
              >

                {job.job_highlights?.Responsibilities
                  .map((item, index) =>
                    <Text
                      key={index}
                      style={{
                        color: '#ddd',
                        fontSize: 16,
                        paddingTop: 20,
                        paddingHorizontal: 20,
                        fontFamily: 'InterRegular',
                        borderColor: Color.lighter,
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 12,
                        margin: 12,

                      }}
                    >
                      {`${index + 1}. ${item}`}
                    </Text>
                  )
                }
              </View>
              : null
          }
          {/* job highlights */}
          {
            tab === 'highlights'

              ? <View
                style={{
                  flex: 1,
                  marginTop: 12,
                }}
              >
                {
                  job?.job_highlights?.Benefits
                    ? <>
                      <Text
                        style={{
                          color: Color.lighter,
                          fontSize: 20,
                          paddingTop: 1,
                          paddingHorizontal: 20,
                          fontFamily: 'InterSemi'
                        }}
                      >
                        Benefits
                      </Text>
                      {job?.job_highlights?.Benefits
                        .map((item, index) =>
                          <Text
                            key={index}
                            style={{
                              color: '#ddd',
                              fontSize: 16,
                              paddingTop: 20,
                              paddingHorizontal: 20,
                              fontFamily: 'InterRegular',
                              borderColor: Color.lighter,
                              borderWidth: 1,
                              borderRadius: 8,
                              padding: 12,
                              margin: 12,

                            }}
                          >
                            {`${index + 1}. ${item}`}
                          </Text>
                        )
                      }

                    </>
                    : null
                }

                <Text
                  style={{
                    color: Color.lighter,
                    fontSize: 20,
                    paddingTop: 12,
                    paddingHorizontal: 20,
                    fontFamily: 'InterSemi',
                    borderTopColor: Color.lighter,
                    borderTopWidth: 1,
                    marginTop: 12,
                  }}
                >
                  Qualifications
                </Text>
                {job?.job_highlights?.Qualifications
                  .map((item, index) =>
                    <Text
                      key={index}
                      style={{
                        color: '#ddd',
                        fontSize: 16,
                        paddingTop: 20,
                        paddingHorizontal: 20,
                        fontFamily: 'InterRegular',
                        borderColor: Color.lighter,
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 12,
                        margin: 12,

                      }}
                    >
                      {`${index + 1}. ${item}`}
                    </Text>
                  )
                }
              </View>
              : null
          }
        </View>
      </ScrollView>
      {/* <View>
        <TouchableHighlight
          style={{
            backgroundColor: Color.primary,
            padding: 12,
            borderRadius: 8,
            margin: 12,
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'InterSemi'
            }}
          >
            Apply Now
          </Text>
        </TouchableHighlight>
      </View> */}
    </SafeAreaView >
  )
}
