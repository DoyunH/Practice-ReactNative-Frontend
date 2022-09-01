import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import React from 'react';

type PrimaryButtonProps = {
  children: string;
  onPress?: () => void;
};

const PrimaryButton = ({children, onPress}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#213469'}}
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
    backgroundColor: '#35509a',
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
