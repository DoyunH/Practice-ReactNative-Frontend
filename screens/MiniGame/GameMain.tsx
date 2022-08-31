import {StyleSheet, View} from 'react-native';
import React from 'react';
import StartGameScreen from './StartGameScreen';

const GameMain = () => {
  return (
    <View style={styles.container}>
      <StartGameScreen />
    </View>
  );
};

export default GameMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f9f9f9',
  },
});
