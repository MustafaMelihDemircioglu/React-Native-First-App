import React from 'react';
import { Text, TouchableOpacity, Dimensions, SafeAreaView, View, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';

function Box(props) {

  // Get the screen width.
  const screenWidth = Dimensions.get('window').width;
  // Calculate the width and height based on screen dimensions
  const boxSize = screenWidth / 4;

  return (
    <TouchableOpacity onPress={props.func} disabled={props.disabled} >
      <View style={[styles.boxContainer, { width: boxSize, height: boxSize, 
        backgroundColor: props.highlightedArray[props.r][props.c] ? 'lightgreen' : 'lightgrey' }]}>
        <Text style={{ fontSize: 48 }}>{props.textArray[props.r][props.c]}</Text>
      </View>
    </TouchableOpacity>
  );
}

function Game() {
  const [textArray, setTextArray] = useState([Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]);
  const [turn, setTurn] = useState('X');
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [highlightedArray, sethighlightedArray] = useState([Array(3).fill(false), Array(3).fill(false), Array(3).fill(false)]);

  function handlePress(row, column) {

    if (textArray[row][column]) {
      Alert.alert("You cannot press on an already pressed box!");
    }
    else {
      setCount(count + 1);
      const updatedArray = [...textArray];
      if (turn == 'X') {
        updatedArray[row][column] = 'X';
      } else {
        updatedArray[row][column] = 'O';
      }

      setTextArray(updatedArray);

      if (turn == 'X') {
        setTurn('O')
      }
      else {
        setTurn('X')
      }

      let checkWinArray = checkWin(textArray);

      if (checkWinArray != null) {
        let myArr = highlightedArray;
        checkWinArray.forEach((element) => {
          myArr[element[0]][element[1]] = true;
        });
        sethighlightedArray(myArr);
        console.log(myArr);
        if (turn == 'X') {
          Alert.alert("Player X won the game.")
        } else {
          Alert.alert("Player O won the game.")
        }
        setDisabled(true);
      }

      else if (count == 9) {
        Alert.alert('Alert', 'Game finished because all boxes are filled!\nNo one won!',[
          { text: 'OK', onPress: () => OKPressed() },
        ]);
      }
    }
  }

  function handleResetButton() {
    alert("Game restarts!");
    setTextArray([Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]);
    setCount(1);
    setTurn('X');
    setDisabled(false);
    sethighlightedArray([Array(3).fill(false), Array(3).fill(false), Array(3).fill(false)]);
  }

  function OKPressed() {
    setDisabled(true);
  }

  function checkWin(arr) {

    for (let i = 0; i < 3; i++) {
      if (arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i] && arr[0][i] == arr[2][i] && arr[0][i] != null) {
        return ([[0, i], [1, i], [2, i]]);
      }
      else if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2] && arr[i][0] == arr[i][2] && arr[i][0] != null) {
        return ([[i, 0], [i, 1], [i, 2]]);
      }
    }
    if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[1][1] == arr[2][2] && arr[1][1] != null) {
      return ([[0, 0], [1, 1], [2, 2]]);
    }
    else if (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] && arr[1][1] == arr[2][0] && arr[1][1] != null) {
      return ([[0, 2], [1, 1], [2, 0]]);
    }
    return (null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome to the tic-tac-toe game!
      </Text>
      <View style={styles.gameBoard}>
        <View style={styles.row}>
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(0, 0)} r={0} c={0} disabled={disabled} />
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(0, 1)} r={0} c={1} disabled={disabled} />
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(0, 2)} r={0} c={2} disabled={disabled} />
        </View>
        <View style={styles.row}>
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(1, 0)} r={1} c={0} disabled={disabled} />
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(1, 1)} r={1} c={1} disabled={disabled} />
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(1, 2)} r={1} c={2} disabled={disabled} />
        </View>
        <View style={styles.row}>
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(2, 0)} r={2} c={0} disabled={disabled} />
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(2, 1)} r={2} c={1} disabled={disabled} />
          <Box textArray={textArray} highlightedArray={highlightedArray} func={() => handlePress(2, 2)} r={2} c={2} disabled={disabled} />
        </View>
        <Button onPress={handleResetButton} title='Reset' />
      </View>

      <Text style={styles.message}>
        Turn of Player {turn}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 12,
  },
  gameBoard: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  boxContainer: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  message: {
    fontSize: 24,
    marginVertical: 12,
  },
});

export { Game };