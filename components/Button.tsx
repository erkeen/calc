import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

type propTypes = {
  title: string;
  color?: string;
  bgColor?: string;
  handleClick?: any;
  flexSize?: number;
};

const Button = ({
  title,
  color,
  bgColor,
  handleClick,
  flexSize,
}: propTypes) => {
  return (
    <View style={[styles.container, { flex: flexSize }]}>
      <TouchableHighlight style={{ borderRadius: 50 }} onPress={handleClick}>
        <View
          style={[
            styles.button,
            { backgroundColor: bgColor ? bgColor : "#DDDDDD" },
            { width: flexSize ? 170 : 80 },
          ]}
        >
          <Text style={[styles.text, { color: color ? color : "#000" }]}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 80,
  },
  text: {
    fontSize: 30,
    fontFamily: "GothicA1_400Regular",
  },
});

export default Button;
