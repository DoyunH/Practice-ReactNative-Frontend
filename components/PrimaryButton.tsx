import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import React from 'react';
import Color from '../constants/Color';

type PrimaryButtonProps = {
  children: string;
  onPress?: () => void;
};

const PrimaryButton = ({children, onPress}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: Color.BlueButtonPressed}}
        style={({pressed}) => {
          return pressed && Platform.OS === 'ios'
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer;
        }}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Color.BlueButton,
    borderRadius: 2,
    marginVertical: 3,
  },
  buttonInnerContainer: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
