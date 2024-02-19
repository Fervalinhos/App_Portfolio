import { Octicons, FontAwesome5, FontAwesome, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const Tecnologias = () => {
    return (
        
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
    );
}
export default Tecnologias;