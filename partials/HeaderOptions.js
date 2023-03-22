import { Image, Text, TouchableOpacity } from "react-native";
import Color from "../utils/constants/Color";
import alignCenter from "../public/align-center.png";
import goBack from "../public/left-arrow.png";
import { usePathname, useRouter, useSearchParams } from "expo-router";
export default options = ({ title }) => {
  const router = useRouter();
  const location = usePathname();

  return {
    headerStyle: {
      backgroundColor: Color.dark,
    },
    title,
    headerTintColor: "white",
    headerShadowVisible: false,
    statusBarTranslucent: true,
    headerLeft: () => (
      <TouchableOpacity>
        {location === "/" ? (
          <Image
            style={{
              width: 25,
              height: 25,
              marginRight: 12,
            }}
            source={alignCenter}
          />
        ) : (
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 12,
              }}
              source={goBack}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          router.push("/profile");
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            borderColor: Color.lighter,
            borderWidth: 2,
            marginVertical: 12,
          }}
          source={{ uri: "https://randomuser.me/api/portraits/men/26.jpg" }}
        />
      </TouchableOpacity>
    ),
  };
};
