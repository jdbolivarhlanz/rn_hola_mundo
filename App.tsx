import { StyleSheet, Text, View } from "react-native";
import globalStyles from "./styles/GlobalStyles";
const App = () => {
  return (
    <View style={globalStyles.estiloContenedor}>
      <Text style={globalStyles.estiloTexto}>Hola</Text>
      <Text style={globalStyles.estiloTexto}>Mundo</Text>
    </View>
  )
}
export default App