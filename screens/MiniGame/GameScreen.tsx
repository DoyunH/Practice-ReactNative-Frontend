import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import Title from '../../components/ui/Title';
import Color from '../../constants/Color';
import PrimaryButton from '../../components/ui/PrimaryButton';

type GameScreenProps = {
  userChoice: number;
};

type GenerateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
) => number;

type NextGuessHandler = (direction: 'lower' | 'greater') => void;

const generateRandomBetween: GenerateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userChoice}: GameScreenProps) => {
  const innicalGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = React.useState(innicalGuess);

  console.log('currentGuess :', currentGuess);
  const nextGuessHandler: NextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
      console.log(minBoundary, maxBoundary, currentGuess);
    } else {
      minBoundary = currentGuess + 1;
      console.log(minBoundary, maxBoundary, currentGuess);
    }
    const nextGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    return setCurrentGuess(nextGuess);
  };

  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.selectedNumber}>{currentGuess}</Text>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonMarginControler}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.buttonMarginControler}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              –
            </PrimaryButton>
          </View>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonMarginControler: {
    marginHorizontal: 10,
  },
});
