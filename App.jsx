import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Octicons, FontAwesome5, FontAwesome, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import Lista from './components/lista/lista.jsx';
import Sobremim from './components/sobremim/sobremim.jsx';



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
    <View className="bg-slate-100 min-h-screen flex flex-col justify-center items-center">

      <Sobremim />

      <View className="bg-white p-4 rounded-md shadow-md mb-4 w-full max-w-md">
        <Text>Tecnologias que eu utilizo:</Text>
        <View className="flex flex-row justify-center items-center space-x-4">
          <Octicons name="mark-github" size={24} color="black" />
          <FontAwesome5 name="linkedin" size={24} color="black" />
          <FontAwesome name="css3" size={24} color="black" />
          <Ionicons name="logo-javascript" size={24} color="black" />
          <AntDesign name="HTML" size={24} color="black" />
          <FontAwesome6 name="node-js" size={24} color="black" />
          <FontAwesome5 name="react" size={24} color="black" />
        </View>
      </View>

      <Lista trabalhos={trabalhos} />

      <StatusBar style="auto" />
    </View>

  );
}

