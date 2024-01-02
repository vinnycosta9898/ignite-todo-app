import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import { Header } from "./src/components/Header";
import { Main } from "./src/components/Main";

export default function App() {
  
  const [fontsLoaded] = useFonts({ Inter_400Regular })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent' 
        translucent
      />
      <Header/>
      <Main/>
    </ThemeProvider>
  );
}
