import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function Sobre() {
  return (
    <View style={styles.container}>
     <ScrollView style={styles.container}> 
      <ImageBackground> 
     <Text style={styles.titulo}>Ayrton Senna</Text>
     <br></br>
         <Image style={styles.foto1}
          source={require('../assets/foto-capa.jpg')}>
         </Image>
         <Text style={styles.conteudo}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
     </ImageBackground>
     <br></br>
      <View style={styles.card}>
        <Image style={styles.foto2} source={require('..//assets/rei-da-chuva.png')}></Image>
        <Text style={styles.titulo}>Rei da chuva <br></br>
          <Text style={styles.conteudo2}>Aprimorou a pilotagem no asfalto molhando e mostrou ser um piloto de determinação, garra e persistência.
          </Text>
        </Text>
      </View>
      <br></br>
      <View style={styles.card}>
        <Image style={styles.foto2} source={require('../assets/rei-de-manaco.png')}></Image>
        <Text style={styles.titulo}>Rei da Mônaco <br></br>
          <Text style={styles.conteudo2}>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.
          </Text>
        </Text>
      </View>
      <br></br>
      <View style={styles.card}>
        <Image style={styles.foto2} source={require('..//assets/silvastone.png')}></Image>
          <Text style={styles.titulo}>Silvastone <br></br>
          <Text style={styles.conteudo2}>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.
        </Text>
      </Text>
      </View>
      <br></br>
      <View style={styles.card}>
        <Image style={styles.foto2} source={require('..//assets/preparacao.png')}></Image>
        <Text style={styles.titulo}>Preparação <br></br>
          <Text style={styles.conteudo2}>Para vencer corridas e campeonatos o piloto precisava ter uma preparaçāo fisica de atleta.
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
    </View>
    
  );
}
const styles = StyleSheet.create({

  foto1: {
    width: "auto",
    marginRight: 25,
    marginLeft: 25,
    height: 200,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titulo: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
  },
  conteudo: {
    color: "black",
    fontSize: 13,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    
  },
  conteudo2: {
    fontSize: 9,
  },
  titulo:{
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    borderLeftWidth: 10,
    borderColor: 'white',
  },
  foto2: {
    width: "30%",
    height: "100%",
  },
card: {
  width: 380,
  height: 100,
  marginLeft: 15,
  borderWidth: 0.5,
  flexDirection: 'row',
}

});