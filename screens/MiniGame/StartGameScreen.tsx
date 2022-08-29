import {View, TextInput, StyleSheet, Platform} from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = (): any => {
  return (
    <View style={styles.inputArea}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputArea: {
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
});
