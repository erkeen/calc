import React from "react";
import { Text, View } from "react-native";

type propTypes = {
  value: string;
};

const Display = ({ value }: propTypes) => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: value.length > 6 ? 60 : 100,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Display;
