import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({children}: CardProps) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
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
});
