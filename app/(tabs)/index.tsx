import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";
import subscriptions from "./subscriptions";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500 text-xl font-bold">
        NativeWind working 🚀
      </Text>
      <Link href='/Onboarding' className="mt-4 rounded-2xl bg-blue-400 text-black">Go to Onboarding</Link>
      <Link href='/(auth)/Signin'>Sign In</Link>
      <Link href='/(auth)/Signup'>Sign Up</Link>
      <Button
        title="Sign Up"
        onPress={() => router.push("/(auth)/Signup")}
      />

      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: "claude" }
      }}>Spotify</Link>
    </View>
  );
}