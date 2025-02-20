import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import images from "@/constants/images";
// import {  } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {



  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between flex-row mb-6">

              <View>
                <Text className="font-pmedium text-lg text-gray-100">Welcome Back</Text>
                <Text className="text-secondary text-2xl font-bold">JsMastery</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>

            </View>
            <SearchInput />

            <Text className="text-gray-100 text-lg mb-3 mt-5 font-pregular">Latest Video</Text>

            <Trending posts={[{id: 1}, {id: 2}, {id: 3}]} />

         </View>
        )}
      />
    </SafeAreaView>
    
  );
}

