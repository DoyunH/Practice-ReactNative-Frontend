import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/ui/Title';
import Color from '../../constants/Color';

type GameScreenProps = {
  userChoice: number;
};

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({userChoice}: GameScreenProps) => {
  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.selectedNumber}>
          {generateRandomBetween(1, 100, userChoice)}
        </Text>
      </View>
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
  selectedNumber: {
    fontSize: 30,
    textAlign: 'center',
  },
  numberContainer: {
    borderWidth: 3,
    borderColor: Color.BlueButton,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
