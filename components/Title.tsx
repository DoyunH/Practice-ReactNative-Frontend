import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Color from '../constants/Color';

type TitlePropsWithChildren = {
  children: string;
};

const Title = ({children}: TitlePropsWithChildren) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: Color.BlueButton,
    color: Color.BlueButton,
    padding: 12,
    fontWeight: 'bold',
  },
});
