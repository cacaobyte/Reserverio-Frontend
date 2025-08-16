import { View, Text } from 'react-native';

export default function Dashboard() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Dashboard 📊</Text>
      <Text className="text-zinc-600 mt-2">Contenido del panel</Text>
    </View>
  );
}
