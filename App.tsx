import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Login } from './src/screens/Login';
import { ThemeProvider } from './src/context/themeContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_700Bold
  })

  return (
    <ThemeProvider>
      {fontsLoaded && <Login/>}
      <StatusBar style='light'/ >
    </ThemeProvider>

  );
}
