import { Text, View } from "react-native";
import "@/global.css"
import { Link } from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-5xl text-center font-bold text-success">
        Welcome to <Text className="text-red-500 text-7xl">Nativewind!</Text>
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Sign Up</Link>
      <Link href={{pathname:"/(tabs)/subscription/[id]", params: {id : "spotify"}}} className="mt-4 rounded bg-primary text-white p-4">Spotify Subscription</Link>
      <Link href={{pathname:"/(tabs)/subscription/[id]", params: {id : "claude"}}} className="mt-4 rounded bg-primary text-white p-4">Claude Subscription</Link>
    </View>
  );
}