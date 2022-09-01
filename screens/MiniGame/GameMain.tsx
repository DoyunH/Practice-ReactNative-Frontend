import {StyleSheet, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';

const GameMain = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/game.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </View>
  );
};

export default GameMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f9f9f9',
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
