import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Octicons, FontAwesome5, FontAwesome, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';



export default function App() {

  const trabalhos = [
    {
      id: "1",
      work: "Minecraft API",
      img: require('./src/img/mine.png'),
      description: "API for Minecraft.",
      tecnologies: "React.js, JS, HTML5, css, Node.js",
    },
    {
      id: "2",
      work: "Fortnite API",
      img: require('./src/img/fort.png'),
      description: "API for Fortnite.",
      tecnologies: "React.js, JS, HTML5, css, Node.js",
    },
  

  ];

  return (
    <View className="bg-slate-500 min-h-screen flex flex-col justify-center items-center">
      
      <View className="p-12 sm:py-32 flex flex-col justify-center items-center">
        <Image
          source={require('./src/img/eu.jpg')}
          style={{ width: 100, height: 100 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <View className='flex flex-col justify-center items-center'>
        <Text className="text-2xl font-bold">Matheus Henrique de Carvalho Côcco</Text>
        <Text className="text-lg mb-2">TDS1 2° ano</Text>
        <Text className="text-gray-700">Sou um aluno de desenvolvimento de sistemas do Senai Valinhos.</Text>
        </View>
      </View>
      
      <View className="bg-white p-4 rounded-md shadow-md mb-4 w-full max-w-md">
        <Text>Tecnologias que eu ultilizo:</Text>
        <View className="flex flex-row justify-center items-center">
          <Octicons name="mark-github" size={24} color="black" />
          <FontAwesome5 name="linkedin" size={24} color="black" />
          <FontAwesome name="css3" size={24} color="black" />
          <Ionicons name="logo-javascript" size={24} color="black" />
          <AntDesign name="HTML" size={24} color="black" />
          <FontAwesome6 name="node-js" size={24} color="black" />
          <FontAwesome5 name="react" size={24} color="black" />
          </View>
      </View>
      <ScrollView className="p-4 w-full">
        <View className="flex flex-col items-center">
          <Text className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Lista dos projetos:</Text>

          {trabalhos.length !== 0 ? (
            trabalhos.map((trabalho) => (
              <View key={trabalho.id} className="bg-white p-4 rounded-md shadow-md mb-4 w-full max-w-md">
                <Image source={trabalho.img} style={{ width: 64, height: 64 }} className="mb-2"></Image>
                <Text className="text-xl font-bold text-gray-900 mb-2">{trabalho.work}</Text>
                <Text className="text-gray-700 mb-2">{trabalho.description}</Text>
                <Text className="text-gray-500">{trabalho.tecnologies}</Text>
              </View>
            ))
          ) : (
            <View className="bg-white p-4 rounded-md shadow-md w-full max-w-md">
              <Text className="text-gray-700">Nenhum Trabalho cadastrado</Text>
            </View>
          )}
        </View>
      </ScrollView>


      <StatusBar style="auto" />
    </View>

  );
}

