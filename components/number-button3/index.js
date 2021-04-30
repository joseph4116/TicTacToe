import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumberButton3 = (props) => {
  return props.squareThreeValue === '' ? (
    <TouchableOpacity
      style={{...Styles.container, width: props.ButtonWidth}}
      onPress={() => props.ButtonAction(props.Number)}>
      <Text style={Styles.text}>{props.Number}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={{...Styles.container, width: props.ButtonWidth}}>
      <Text style={Styles.text}>{props.Number}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#F4DE79',
    paddingTop: '25%',
    position: 'relative',
  },
  text: {
    fontSize: 48,
    color: '#8DC0ED',
    position: 'absolute',
  },
});

export default NumberButton3;