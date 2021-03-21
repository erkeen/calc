import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";
import AppLoading from "expo-app-loading";
import { useFonts, GothicA1_400Regular } from "@expo-google-fonts/gothic-a1";
import { add, sub, multiply, divide, unary } from "./utils/math";

export default function App() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState("default");
  const [isCalc, setIsCalc] = useState(false);
  const [isEval, setIsEval] = useState(false);
  const [isRes, setIsRes] = useState(false);
  const [prevValue, setPrevValue] = useState("0");

  const [fontsLoaded] = useFonts({
    GothicA1_400Regular,
  });

  const handleClick = (val: string) => {
    setIsEval(true);
    setIsRes(true);
    if (isCalc) {
      setPrevValue(input);
      setInput("0");
      setInput(val);
      setIsCalc(false);
    }

    if (input === "0") setInput(input.slice(1) + val);

    if (input !== "0" && !isCalc && input.length < 9) setInput(input + val);
  };

  const handleDecimal = () => {
    if (input.indexOf(".") === -1) setInput(input + ".");
  };

  const handleNegative = () => {
    if (input.indexOf("-") === -1 && input !== "0") setInput("-" + input);

    if (input.indexOf("-") !== -1) setInput(input.slice(1));
  };

  const handleClear = () => {
    setInput("0");
    setPrevValue("0");
    setIsCalc(false);
    setOperator("default");
    setIsEval(false);
  };

  const handleEvaluate = () => {
    switch (operator) {
      case "add":
        setInput(add(prevValue, input));
        break;
      case "sub":
        setInput(sub(prevValue, input));
        break;
      case "multiply":
        setInput(multiply(prevValue, input));
        break;
      case "divide":
        setInput(divide(prevValue, input));
        break;
      default:
        break;
    }
    setIsCalc(true);
  };

  const handleOperator = (operator: string) => {
    if (isEval && isRes) {
      handleEvaluate();
      if (operator === "unary") setInput(unary(input));
    }
    setOperator(operator);
    setIsCalc(true);
    setIsEval(false);
  };

  const handleCalculation = () => {
    handleEvaluate();
    setIsRes(false);
  };

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Display value={input} />
      </View>
      <View>
        <View style={styles.digitsRow}>
          <Button title="C" color="red" handleClick={handleClear} />
          <Button title="-/+" handleClick={handleNegative} />
          <Button
            title="%"
            color="green"
            handleClick={() => handleOperator("unary")}
          />
          <Button
            title="/"
            color="green"
            handleClick={() => handleOperator("divide")}
          />
        </View>
        <View style={styles.digitsRow}>
          <Button title="7" handleClick={() => handleClick("7")} />
          <Button title="8" handleClick={() => handleClick("8")} />
          <Button title="9" handleClick={() => handleClick("9")} />
          <Button
            title="x"
            color="green"
            handleClick={() => handleOperator("multiply")}
          />
        </View>
        <View style={styles.digitsRow}>
          <Button title="4" handleClick={() => handleClick("4")} />
          <Button title="5" handleClick={() => handleClick("5")} />
          <Button title="6" handleClick={() => handleClick("6")} />
          <Button
            title="-"
            color="green"
            handleClick={() => handleOperator("sub")}
          />
        </View>
        <View style={styles.digitsRow}>
          <Button title="1" handleClick={() => handleClick("1")} />
          <Button title="2" handleClick={() => handleClick("2")} />
          <Button title="3" handleClick={() => handleClick("3")} />
          <Button
            title="+"
            color="green"
            handleClick={() => handleOperator("add")}
          />
        </View>
        <View style={styles.digitsRow}>
          <Button title="0" flexSize={2} handleClick={() => handleClick("0")} />
          <Button title="." handleClick={handleDecimal} />
          <Button
            title="="
            color="white"
            bgColor="green"
            handleClick={handleCalculation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  digitsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
