import {View, TextInput, StyleSheet, Platform} from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = (): any => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
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
    width: 50,
    ...Platform.select({
      ios: {
        paddingVertical: 13,
        paddingHorizontal: 10,
      },
    }),
  },
});
