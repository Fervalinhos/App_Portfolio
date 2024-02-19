import { Text, View, Image, ScrollView } from 'react-native';


const Lista = ({ trabalhos }) => {

    return (
    <ScrollView className="p-4 w-full mb-20">
        <View className="flex flex-col items-center">
            <Text className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Lista dos projetos:</Text>

            {trabalhos.length !== 0 ? (
                trabalhos.map((trabalho) => (
                    <View key={trabalho.id} className="bg-white p-4 rounded-md shadow-md mb-4 w-full max-w-md">
                        <Image source={trabalho.img} style={{ width: 64, height: 64 }} className="mb-2"/>
                        <Text className="text-xl font-bold text-gray-900 mb-2">{trabalho.work}</Text>
                        <Text className="text-gray-700 mb-2">{trabalho.description}</Text>
                        <Text className="text-gray-500">{trabalho.tecnologies}</Text>
                    </View>
                ))
            ) : (
                <View className="bg-white p-40 rounded-md shadow-md w-full max-w-md">
                    <Text className="text-gray-700">Nenhum Trabalho cadastrado</Text>
                </View>
            )}
        </View>
    </ScrollView>
    );
}
export default Lista;

