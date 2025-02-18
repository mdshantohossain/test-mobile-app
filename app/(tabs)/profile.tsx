import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Link href="/" style={{ color: "blue" }}>
        Go to Home
      </Link>

      <View className=" bg-gray-800">
        
        <Text className="bg-pink-200 text-2xl">Open up App.js to start working on your app!</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
