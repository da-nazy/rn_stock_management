import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
export default function IOComp({ color, type, name, date, amount }) {
  return (
    <TouchableOpacity style={{ ...style.ioItem }}>
      <View
        style={{
          marginLeft: 5,
          width: 40,
          height: 40,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: color,
          
        }}
      >
        <Text
          style={{
            textAlign: "center",
            alignSelf: "center",
            fontWeight: "700",
            color: "#fff",
            fontSize: 12,
          }}
        >
          {type}
        </Text>
      </View>
      <View
        style={{
          width: "85%",
          flexDirection: "column",
          height: "80%",
          justifyContent: "space-evenly",
          alignSelf: "center",
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "700", color: color }}>{amount}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 15,
          }}
        >
          <Text>{name}</Text>
          <Text>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  ioItem: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
