import { View, Text } from 'react-native';

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Login 🔐</Text>
      <Text className="text-zinc-600 mt-2">Pantalla de autenticación</Text>
    </View>
  );
}
