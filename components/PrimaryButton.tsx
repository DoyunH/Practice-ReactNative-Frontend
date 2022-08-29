import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type PrimaryButtonProps = {
  children: string;
};

const PrimaryButton = ({children}: PrimaryButtonProps) => {
  return (
    <View style={styles.primaryButton}>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'gray',
  },
});
