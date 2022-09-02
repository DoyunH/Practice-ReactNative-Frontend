import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title';

type GameScreenProps = {
  userChoice: number;
};

const GameScreen = ({userChoice}: GameScreenProps) => {
  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
  },
});
