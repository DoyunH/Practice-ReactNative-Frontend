/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import styled from '@emotion/native';

const App = () => {
  return (
    <Container>
      <Description>ReactNative Frontend Template</Description>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border: 5px solid hotpink;
`;

const Description = styled.Text({
  color: 'hotpink',
  fontSize: 45,
  fontWeight: 'bold',
});

export default App;
