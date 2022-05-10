import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import Colors from './constants/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const fickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={fickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
