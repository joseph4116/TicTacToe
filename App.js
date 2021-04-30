/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CalculatorDisplay from './components/calculator-display';
import NumberButton from './components/number-button';
import NumberButton2 from './components/number-button2';
import NumberButton3 from './components/number-button3';
import NumberButton4 from './components/number-button4';
import NumberButton5 from './components/number-button5';
import NumberButton6 from './components/number-button6';
import NumberButton7 from './components/number-button7';
import NumberButton8 from './components/number-button8';
import NumberButton9 from './components/number-button9';

const App: () => React$Node = () => {
  const [numberDisplay, setNumberDisplay] = useState('');
  //step 1
  const [numPressed, setNumPressed] = useState(0);
  const [squareOneValue, setSquareOneValue] = useState('');
  const [squareTwoValue, setSquareTwoValue] = useState('');
  const [squareThreeValue, setSquareThreeValue] = useState('');
  const [squareFourValue, setSquareFourValue] = useState('');
  const [squareFiveValue, setSquareFiveValue] = useState('');
  const [squareSixValue, setSquareSixValue] = useState('');
  const [squareSevenValue, setSquareSevenValue] = useState('');
  const [squareEightValue, setSquareEightValue] = useState('');
  const [squareNineValue, setSquareNineValue] = useState('');
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');
  const [winner2, setWinner2] = useState('');
  const [clear, setClear] = useState('');

  
  useEffect(()=>{
    if (winner2 === "X" || winner2 === "O"){
      setSquareOneValue("");
      setSquareTwoValue("");
      setSquareThreeValue("");
      setSquareFourValue("");
      setSquareFiveValue("");
      setSquareSixValue("");
      setSquareSevenValue("");
      setSquareEightValue("");
      setSquareNineValue("");
    }
  }, [winner2]);
  
  useEffect(() => {
    if (
      (squareOneValue === squareTwoValue &&
        squareTwoValue === squareThreeValue &&
        squareTwoValue === 'X') ||
      (squareFourValue === squareFiveValue &&
        squareFiveValue === squareSixValue &&
        squareFiveValue === 'X') ||
      (squareSevenValue === squareEightValue &&
        squareEightValue === squareNineValue &&
        squareEightValue === 'X') ||
      (squareOneValue === squareFourValue &&
        squareFourValue === squareSevenValue &&
        squareFourValue === 'X') ||
      (squareTwoValue === squareFiveValue &&
        squareFiveValue === squareEightValue &&
        squareFiveValue === 'X') ||
      (squareThreeValue === squareSixValue &&
        squareSixValue === squareNineValue &&
        squareSixValue === 'X') ||
      (squareOneValue === squareFiveValue &&
        squareFiveValue === squareNineValue &&
        squareNineValue === 'X') ||
      (squareThreeValue === squareFiveValue &&
        squareFiveValue === squareSevenValue &&
        squareFiveValue === 'X')
    ) {
      setWinner2('X');
    } else if (
      (squareOneValue === squareTwoValue &&
        squareTwoValue === squareThreeValue &&
        squareTwoValue === 'O') ||
      (squareFourValue === squareFiveValue &&
        squareFiveValue === squareSixValue &&
        squareFiveValue === 'O') ||
      (squareSevenValue === squareEightValue &&
        squareEightValue === squareNineValue &&
        squareEightValue === 'O') ||
      (squareOneValue === squareFourValue &&
        squareFourValue === squareSevenValue &&
        squareFourValue === 'O') ||
      (squareTwoValue === squareFiveValue &&
        squareFiveValue === squareEightValue &&
        squareFiveValue === 'O') ||
      (squareThreeValue === squareSixValue &&
        squareSixValue === squareNineValue &&
        squareSixValue === 'O') ||
      (squareOneValue === squareFiveValue &&
        squareFiveValue === squareNineValue &&
        squareNineValue === 'O') ||
      (squareThreeValue === squareFiveValue &&
        squareFiveValue === squareSevenValue &&
        squareFiveValue === 'O')
    ) {
      setWinner2('O');
    } else {
      setWinner2('Draw');
    }
    console.log(winner2);
    
  }, [squareOneValue, squareTwoValue, squareThreeValue,squareFourValue,squareFiveValue,squareSixValue,squareSevenValue,squareEightValue,squareNineValue]);
  
  const updateDisplayOne = () => {
    setSquareOneValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const updateDisplayTwo = () => {
    console.log('button two pressed');
    setSquareTwoValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const updateDisplayThree = () => {
    setSquareThreeValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const updateDisplayFour = () => {
    setSquareFourValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const updateDisplayFive = () => {
    setSquareFiveValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
  
  };

  const updateDisplaySix = () => {
    setSquareSixValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const updateDisplaySeven =async () => {
    
    await setSquareSevenValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
  
    checkWinner();
    
  };

  const updateDisplayEight =async () => {
    await setSquareEightValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const updateDisplayNine = () => {
    setSquareNineValue(turn);
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
    
      checkWinner();
    
  };

  const checkWinner = () => {
    if (
      (squareOneValue === squareTwoValue &&
        squareTwoValue === squareThreeValue &&
        squareTwoValue === 'X') ||
      (squareFourValue === squareFiveValue &&
        squareFiveValue === squareSixValue &&
        squareFiveValue === 'X') ||
      (squareSevenValue === squareEightValue &&
        squareEightValue === squareNineValue &&
        squareEightValue === 'X') ||
      (squareOneValue === squareFourValue &&
        squareFourValue === squareSevenValue &&
        squareFourValue === 'X') ||
      (squareTwoValue === squareFiveValue &&
        squareFiveValue === squareEightValue &&
        squareFiveValue === 'X') ||
      (squareThreeValue === squareSixValue &&
        squareSixValue === squareNineValue &&
        squareSixValue === 'X') ||
      (squareOneValue === squareFiveValue &&
        squareFiveValue === squareNineValue &&
        squareNineValue === 'X') ||
      (squareThreeValue === squareFiveValue &&
        squareFiveValue === squareSevenValue &&
        squareFiveValue === 'X')
    ) {
      setWinner('X');
    } else if (
      (squareOneValue === squareTwoValue &&
        squareTwoValue === squareThreeValue &&
        squareTwoValue === 'O') ||
      (squareFourValue === squareFiveValue &&
        squareFiveValue === squareSixValue &&
        squareFiveValue === 'O') ||
      (squareSevenValue === squareEightValue &&
        squareEightValue === squareNineValue &&
        squareEightValue === 'O') ||
      (squareOneValue === squareFourValue &&
        squareFourValue === squareSevenValue &&
        squareFourValue === 'O') ||
      (squareTwoValue === squareFiveValue &&
        squareFiveValue === squareEightValue &&
        squareFiveValue === 'O') ||
      (squareThreeValue === squareSixValue &&
        squareSixValue === squareNineValue &&
        squareSixValue === 'O') ||
      (squareOneValue === squareFiveValue &&
        squareFiveValue === squareNineValue &&
        squareNineValue === 'O') ||
      (squareThreeValue === squareFiveValue &&
        squareFiveValue === squareSevenValue &&
        squareFiveValue === 'O')
    ) {
      setWinner('O');
    } else {
      setWinner('Draw');
    }
    console.log(winner);
  };

  const changeDisplay = () => {
    if (winner === 'X') {
      setNumberDisplay('The winner is X');
      //step 3
    } else if (winner === 'O') {
      setNumberDisplay('The winner is O');
    } else {
      setNumberDisplay("It's a draw.");
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.savContainer}>
        <View style={styles.calculatorContainer}>
          <View style={{...styles.buttonRow, flexGrow: 1}}>
            <CalculatorDisplay Numbers={winner2} />
          </View>
          <View style={styles.buttonRow}></View>
            <View style={styles.buttonRow}>
              <NumberButton
                Number={squareOneValue}
                squareOneValue={squareOneValue}
                ButtonWidth="25%"
                winner={winner2}
                ButtonAction={updateDisplayOne}
              />
              <NumberButton2
                Number={squareTwoValue}
                squareTwoValue={squareTwoValue}
                ButtonWidth="25%"
                ButtonAction={updateDisplayTwo}
              />
              <NumberButton3
                Number={squareThreeValue}
                squareThreeValue={squareThreeValue}
                ButtonWidth="25%"
                ButtonAction={updateDisplayThree}
              />
            </View>
          <View style={styles.buttonRow}>
            <NumberButton4
              Number={squareFourValue}
              squareFourValue={squareFourValue}
              ButtonWidth="25%"
              ButtonAction={updateDisplayFour}
            />
            <NumberButton5
              Number={squareFiveValue}
              squareFiveValue={squareFiveValue}
              ButtonWidth="25%"
              ButtonAction={updateDisplayFive}
            />
            <NumberButton6
              Number={squareSixValue}
              squareSixValue={squareSixValue}
              clear={clear}
              ButtonWidth="25%"
              ButtonAction={updateDisplaySix}
            />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton7
              Number={squareSevenValue}
              squareSevenValue={squareSevenValue}
              ButtonWidth="25%"
              ButtonAction={updateDisplaySeven}
            />
            <NumberButton8
              Number={squareEightValue}
              squareEightValue={squareEightValue}
              ButtonWidth="25%"
              ButtonAction={updateDisplayEight}
            />
            <NumberButton9
              Number={squareNineValue}
              squareNineValue={squareNineValue}
              ButtonWidth="25%"
              ButtonAction={updateDisplayNine}
            />
          </View>
          <View style={styles.buttonRow}></View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savContainer: {
    flexGrow: 1,
    backgroundColor: '#000000',
  },
});

export default App;
