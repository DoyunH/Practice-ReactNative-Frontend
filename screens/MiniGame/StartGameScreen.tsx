import {View, TextInput, StyleSheet, Platform, Alert} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = (): any => {
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
  };

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 70,
    borderColor: 'gray',
    borderWidth: 0.7,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 20,
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 0.5,
          width: 0.5,
        },
      },
    }),
  },
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
