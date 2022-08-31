import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import StartGameScreen from './StartGameScreen';

const GameMain = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/game.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <StartGameScreen />
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
