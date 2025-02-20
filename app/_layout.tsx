import { Stack } from "expo-router";
import '@/global.css'
import GlobalProvider from "@/contexts/GlobalProvider";



export default function RootLayout() {

    return (
        <GlobalProvider>
            <Stack
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}
             >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} /> */}
            </Stack>
        </GlobalProvider>
    )
}