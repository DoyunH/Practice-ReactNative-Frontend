import {View} from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = (): any => {
  return (
    <View>
      <PrimaryButton>go</PrimaryButton>
      <PrimaryButton>alone</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;
