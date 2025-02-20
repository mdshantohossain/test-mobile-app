// import { Image } from "expo-image";
import { Text, View, StyleSheet, ScrollView, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function HomeScreen() {

  return (
    <SafeAreaView className="bg-primary  h-full">
      

          <ScrollView
            contentContainerStyle={{ height: '100%' }}
          >
        
        
        <View className="w-full justify-center items-center h-[100vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

           <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{'\n'}
              Possibilities with
              <Text className="text-orange-400"> Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-3 -right-9"
              resizeMode="contain"
            />
          </View>
          
          <Text className="font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovations: embark on a journey of  limitless exploration with Aora
          </Text>


          <CustomButton
            title="Continue with Email"
            onPress={() => router.push('/home')}
            containerStyles="w-full mt-7 py-3"
            textStyles="text-xl font-bold" 
            // disabled={true}
          />

        </View>
      </ScrollView>
      

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
          
    </SafeAreaView>
  );
}

