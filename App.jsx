import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import Lista from './components/lista/lista.jsx';
import Sobremim from './components/sobremim/sobremim.jsx';
import Tecnologias from './components/tecnologias/tecnologias.jsx';



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

      <Tecnologias />

      <Lista trabalhos={trabalhos} />

      <StatusBar style="auto" />
    </View>

  );
}

