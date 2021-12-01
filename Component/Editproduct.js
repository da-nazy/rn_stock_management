import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const primaryColor = "#F6C36A";
export default function EditProduct() {
  const [quantity, setQuantity] = useState("");
  const [inout, setInout] = useState(null);
  const ProductHead = (name) => {
    return (
      <View
        style={{
          height: 35,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
         
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
      {ProductHead("Edit Product")}
     
      
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          marginTop: 10,
          alignItems: "center",
          
          justifyContent:'space-between'
        }}
      >
        <Text style={{width:'20%'}}>Name:</Text>
        <TextInput
          value={quantity}
          onChangeText={(e) => setQuantity(e)}
          style={{
            borderWidth: 1,
            width:'80%',
            justifyContent: "center",
            
            borderRadius: 3,
            borderColor: `${primaryColor}`,
            paddingLeft:2
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          marginTop: 10,
          alignItems: "center",
          justifyContent:'space-between'
        }}
      >
        <Text style={{width:'25%'}}>Description:</Text>
        <TextInput
          value={quantity}
          multiline={true}
          onChangeText={(e) => setQuantity(e)}
          style={{
            borderWidth: 1,
            width:'60%',
            justifyContent: "center",
            
            borderRadius: 3,
            borderColor: `${primaryColor}`,
            paddingLeft:2,
            height:50,
          }}
        />
      </View>
      <TouchableOpacity style={{ ...style.addBtn }}>
        <Text style={{ textAlign: "center", fontWeight: "700", color: "#fff" }}>
          Edit
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
    borderColor: `${primaryColor}`,
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
