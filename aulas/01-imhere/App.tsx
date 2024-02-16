import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx file to start working on your React Native App!</Text>
      <Text style={{
        textAlign: 'center',
        backgroundColor: '#11f111',
        marginTop: 16
      }}>Hello World !!! React Native !!!</Text>
      <Text style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16
      }}>Nome do Evento</Text>
      <Text style={{
        color: '#6B6B6B',
        fontSize: 16
      }}>Domingo, 15 de Maio de 2023</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 16
  }
});
