import { Text } from "react-native";
import "@/global.css"
import { Link } from "expo-router";
import { SafeAreaView } from "@/lib/utils";


export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Text className="text-7xl font-sans-extrabold">Home</Text>
      <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Sign Up</Link>
    </SafeAreaView>
  );
}