import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Octicons, FontAwesome5, FontAwesome, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';



const Sobremim = () => {
    return (
        <View className="p-12 flex flex-col justify-center items-center">
        <Image
          source={require('../../src/img/eu.jpg')}
          style={{ width: 150, height: 150 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <View className='flex flex-col justify-center items-center'>
        <Text className="text-2xl font-bold">Matheus Henrique de Carvalho Côcco</Text>
        <Text className="text-lg mb-2">TDS1 2° ano</Text>
        <Text className="text-gray-700">Sou um aluno de desenvolvimento de sistemas do Senai Valinhos.</Text>
        </View>
      </View>
    );
}


export default Sobremim;