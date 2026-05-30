import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind'


const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">Hello S@nchit@</Text>
      <Link
        href="/home"
        className="mt-4 px-4 py-2 bg-success text-white rounded"
      >
        Go to Home
      </Link>
      <View >
        <Link
          href="/(auth)/sign-in"
          className="mt-4 px-4 py-2 bg-success text-white rounded"
        >
          SignIn
        </Link>
        <Link
          href="/(auth)/sign-up"
          className="mt-4 px-4 py-2 bg-success text-white rounded"
        >
          SignUp
        </Link>
      </View>
      <View>
        <Link href="/subscriptions/perplexity">perplexity</Link>
      </View>
    </SafeAreaView>
  );
}
