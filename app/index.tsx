import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/profile">
        <Text className="text-3xl font-pblack">Go to Profile</Text>
      </Link>
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
