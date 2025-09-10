import { StyleSheet, Text, View } from "react-native";
function App(){
  return (
    <View style={styles.estiloContenedor}>
      <Text style={styles.estiloTexto}>Hola</Text>
      <Text style={styles.estiloTexto}>Mundo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  estiloContenedor: {
    marginTop:300,
    marginLeft:150
  },
  estiloTexto:{
    fontSize:30    
  }
})
export default App