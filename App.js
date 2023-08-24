import {  } from 'expo-status-bar';
import { SafeAreaView, StatusBar } from 'react-native';
import Basket from './src/screens/Basket';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Basket></Basket>
    </SafeAreaView>
  );
}
