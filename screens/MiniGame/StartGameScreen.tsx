import {View, TextInput, StyleSheet, Platform, Alert} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Card from '../../components/ui/Card';

type StartGameScreenProps = {
  onPickNumber: (selectedNumber: number) => void;
};

const StartGameScreen = ({onPickNumber}: StartGameScreenProps): any => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText: string): void => {
    // -1 추출 불가능으로 보류
    // setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    setEnteredValue(inputText);
  };
  const resetEnteredValue = (): void => {
    setEnteredValue('');
  };
  const confirmInputHandler = (): void => {
    const chosenNumber = parseInt(enteredValue, 10);
    console.log(chosenNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        {
          text: 'Okay',
          // 서로 다른 스타일이 어떤 차이를 보이는지 : 'cancel', 'default', 'destructive'
          style: 'destructive',
          onPress: resetEnteredValue,
        },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View>
      <Card>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetEnteredValue}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  numberInput: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    marginTop: 7,
    marginBottom: 10,
    textAlign: 'center',
    width: 80,
    fontSize: 30,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        paddingVertical: 13,
        paddingHorizontal: 10,
      },
    }),
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
