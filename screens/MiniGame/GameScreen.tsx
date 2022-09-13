import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import Title from '../../components/ui/Title';
import Color from '../../constants/Color';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Card from '../../components/ui/Card';

type GameScreenProps = {
  userChoice: number;
  onGameOver: () => void;
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

const GameScreen = ({userChoice, onGameOver}: GameScreenProps) => {
  const innicalGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = React.useState(innicalGuess);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver();
    }
  }, [currentGuess, userChoice, onGameOver]);

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
    } else {
      minBoundary = currentGuess + 1;
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
      <Card>
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
      </Card>
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
