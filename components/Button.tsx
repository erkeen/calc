import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type propTypes = {
  title?: string;
  color?: string;
  bgColor?: string;
  handleClick?: any;
  icon?: any;
};

const Button = ({ title, color, bgColor, handleClick, icon }: propTypes) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={{ borderRadius: 50 }} onPress={handleClick}>
        <View
          style={[
            styles.button,
            { backgroundColor: bgColor ? bgColor : "#DDDDDD" },
          ]}
        >
          <Text style={[styles.text, { color: color ? color : "#000" }]}>
            {icon ? <Ionicons name={icon} size={32} color="red" /> : title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 30,
    fontFamily: "GothicA1_400Regular",
  },
});

export default Button;
