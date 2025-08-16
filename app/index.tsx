import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-white text-2xl font-bold">Home 🏠</Text>

      <Link href="/login" asChild>
        <Pressable className="mt-6 px-4 py-3 rounded-xl bg-emerald-500 active:opacity-80">
          <Text className="text-white font-semibold">Ir a Login</Text>
        </Pressable>
      </Link>

      <Link href="/dashboard" asChild>
        <Pressable className="mt-3 px-4 py-3 rounded-xl bg-indigo-500 active:opacity-80">
          <Text className="text-white font-semibold">Ir a Dashboard</Text>
        </Pressable>
      </Link>
    </View>
  );
}
