import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';  


export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.fundo}
      source={require('../assets/fundo.jpg')}
      blurRadius={4}
      >
        
        <Image style={styles.foto}
          source={require('../assets/foto-capa.jpg')}>
        </Image>
        <br></br>
        <br></br>
      <View style={styles.card}>
        <br></br>
        <Text style={styles.titulo}>Ayrton Senna</Text>
        <br></br>
        <Text style={styles.Fonte}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
      </View>
            </ImageBackground>
      <StatusBar style="auto" />
    </View>
    
  );
}
const styles = StyleSheet.create({
  titulo:{
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    borderRadius: 200, 
    borderColor: "black",
    width: 200, 
    height: 200,
    borderWidth: 3,
  },
  Fonte:{
    color: "grey",
    fontSize: 15,
    fontWeight: "300",  
    marginLeft: 30,
    marginRight: 10

  },
  fundo: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  card: {
    width: 350,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.90)',
    alignItems: 'center',
    borderRadius: 20,
  }, 
});