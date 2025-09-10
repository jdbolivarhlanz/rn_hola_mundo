import { StyleSheet, Text, View } from "react-native";
import globalStyles from "./styles/GlobalStyles";
import { Component } from "react";
class App extends Component{
  render(){
    return (
      <View style={globalStyles.estiloContenedor}>
        <Text style={globalStyles.estiloTexto}>Hola</Text>
        <Text style={globalStyles.estiloTexto}>Mundo</Text>
      </View>
    )
  }
}

export default App