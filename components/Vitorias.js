import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { ScrollView } from 'react-native-web';

export default function Vitorias() {
  const trofeis=[
    {
      qtd:'161',
      titulo:'GPS DISPUTADOS',
    },
    {
      qtd:'65',
      titulo:'Pole Positivos',
    },
    {
      qtd:'41',
      titulo:'Vitórias',
    },
    {
      qtd:'3X',
      titulo:'Campeão Mundial',
    }
  ]
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.fundo} source={require('../assets/fundo.jpg')} blurRadius={4}>
      <ScrollView>
          <View style={styles.card}>
            <Text style={styles.titulo}>Senna em números</Text>
            <br/>
            <Text style={styles.conteudo}>Ele conquistou tres campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
            <br/>
            {trofeis.map((e) => (
              <View style={styles.cardTitulos}>
                <FontAwesome name="trophy" size="1000" color="yellow" /><Text style={styles.tituloQTD}>{e.qtd}</Text><Text style={styles.tituloName}>{e.titulo}</Text>
              </ View>
            ))}
            
          </View>
          <View style={styles.card2}>
            <Text style={styles.titulo1}>Campeonato Mundial - 1988</Text>
          </View>
            <Image style={styles.foto} source={require('..//assets/vitoria1.jpg')}></Image>
            <View style={styles.card2}>
            <Text style={styles.titulo1}>Campeonato Mundial - 1990</Text>
          </View>
            <Image style={styles.foto} source={require('..//assets/vitoria2.jpg')}></Image>
            <View style={styles.card2}>
            <Text style={styles.titulo1}>Campeonato Mundial - 1991</Text>
          </View>
            <Image style={styles.foto2} source={require('..//assets/vitoria3.jpg')}></Image>
      </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
 
  fundo: {
    width: "100%",
    height: "100%",
    backgroundColor: "#808080",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    borderColor: "black",
    width: 325, 
    height: 225,
    margin: "auto",
  },
  foto2:{
    borderColor: "black",
    width: 325, 
    height: 225,
    margin: "auto",
    marginBottom: 25
  },
  card:{
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: 325,
    height: 250,
    marginTop: 100,
    margin: "auto",
    borderWidth: 0.5,
  },
  cardTitulos: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'start'
  },
  tituloQTD: {
    marginLeft: 10,
    color: 'yellow',
    fontWeight: 'bold'
  },
  tituloName: {
    marginLeft: 10,
    color: '#999999'
  },
  card2:{
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: 325,
    height: 50,
    marginTop: 75,
    margin: "auto",
    borderWidth: 0.5,
  },
  titulo:{
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  titulo1:{
    color: "white",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  conteudo:{
    fontSize: 15,
    color: '#999999',
    textAlign: 'center',
  }
})