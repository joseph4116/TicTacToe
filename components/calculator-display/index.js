import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CalculatorDisplay = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.Numbers.length === 0 ? '' : props.Numbers}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    color: '#8DC0ED',
    fontFamily: 'Roboto-Black',
  },
});

export default CalculatorDisplay;
