import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const primaryColor = "#5EA37C";
export default function Addtransaction() {
  const [quantity, setQuantity] = useState("0");
  const [inout, setInout] = useState(null);
  const ProductHead = (name) => {
    return (
      <View
        style={{
          height: 35,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 5,
        }}
      >
        <Text
          style={{
            color: `${primaryColor}`,
            fontSize: 17,
            fontWeight: "700",
            paddingLeft: 10,
          }}
        >
          {" "}
          {name}
        </Text>
      </View>
    );
  };
  return (
    <View style={style.container}>
      {ProductHead("Add Transaction")}
      <Text style={{ marginLeft: 18 }}>Transaction Type</Text>
      <View style={style.trxnType}>
        <TouchableOpacity
          onPress={() => setInout(1)}
          style={{
            width: "50%",
            height: "100%",
            justifyContent: "center",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderRightWidth: 1,
            borderRightColor: "#5EA37C",
            backgroundColor: `${inout && inout === 1 ? primaryColor : "#fff"}`,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              color: `${inout && inout === 1 ? "#fff" : "#000"}`,
            }}
          >
            IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInout(2)}
          style={{
            width: "50%",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: "center",
            height: "100%",
            backgroundColor: `${inout && inout === 2 ? primaryColor : "#fff"}`,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              color: `${inout && inout === 2 ? "#fff" : "#000"}`,
            }}
          >
            OUT
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Text>Current Stock:</Text>
        <Text style={{ color: `${primaryColor}`,fontWeight:'700' }}>140</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Text>Quantity:</Text>
        <TextInput
          keyboardType={"numeric"}
          value={quantity}
          onChangeText={(e) => setQuantity(e)}
          style={{
            borderWidth: 1,
            width: 100,
            justifyContent: "center",
            marginLeft: 5,
            borderRadius: 3,
            borderColor: `${primaryColor}`,
            paddingLeft:2
          }}
        />
      </View>
      <TouchableOpacity style={{ ...style.addBtn }}>
        <Text style={{ textAlign: "center", fontWeight: "700", color: "#fff" }}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {

  },
  trxnType: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    alignSelf: "center",
    height: 32,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    borderColor: "#5EA37C",
  },
  addBtn: {
    backgroundColor: `${primaryColor}`,
    width: "90%",
    height: 32,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
  },
});
