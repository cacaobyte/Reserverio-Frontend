import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { View, Text, Pressable } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <View className="w-11/12 max-w-md rounded-2xl p-6 bg-white/10">
        <Text className="text-2xl font-bold text-white text-center">
          NativeWind funcionando 🎉
        </Text>

        <Text className="text-zinc-300 mt-2 text-center">
          Plataforma: <Text className="font-semibold">{Platform.OS}</Text>
        </Text>

        <Pressable
          className="mt-6 rounded-xl px-4 py-3 bg-emerald-500 active:opacity-80"
          onPress={() => console.log('Click!')}
        >
          <Text className="text-white text-center font-semibold">
            Botón con Tailwind
          </Text>
        </Pressable>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
