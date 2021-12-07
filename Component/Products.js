import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import IconComp from "../Component/Util/IconComp";
import Fab from "./Fab";
export default function Products({ navigation }) {
  console.log(navigation);
  const actionBtn = [
    {
      name: "in",
      icon: "search",
      color: "#F6C36A",
      func: (e) => console.log(e),
    },
    {
      name: "out",
      icon: "plus",
      color: "#5EA37C",
      func: (e) => navigation.navigate('Addproduct'),
    },
  ];

  const dispComp = (name, value) => {
    return (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={style.textComp}>{name}:</Text>
        <Text style={{ fontWeight: "400" }}>{value}</Text>
      </View>
    );
  };

  const productDisp = (e) => {
    const stockDetails = e ? e : { stockOut: 2, stockIn: 3, currentStock: 5 };
    console.log(stockDetails);

    return (
      <View style={style.productComp}>
        <Text style={{ color: "#5EA37C", fontWeight: "600" }}>
          Babby Food - B
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              width: "50%",
              alignItems: "baseline",
              marginBottom: 3,
            }}
          >
            <IconComp
              name="sort-up"
              color={"#5EA37C"}
              size={25}
              style={{ height: 16, marginRight: 5 }}
            />
            <Text>200</Text>
            <IconComp
              name="sort-down"
              color={"#BE2F2A"}
              size={25}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <Text>60=140</Text>
          </View>
          <TouchableOpacity
            style={{ marginRight: 5 }}
            onPress={() =>
              navigation.navigate("Product", { product:stockDetails})
            }
          >
            <IconComp name="chevron-right" size={25} />
          </TouchableOpacity>
        </View>
        <Text>50 x 30 = 1,500</Text>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 5,
          alignSelf: "center",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {dispComp("Total Products", 12)}
        {dispComp("Total stock in hand", 365)}
        {dispComp("Total stock price", 18, 820)}
      </View>
      <View
        style={{
          height: "75%",
          width: Dimensions.get("screen").width,
          padding: 10,
          borderTopWidth: 2,
          borderColor: "rgb(246, 195, 106)",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {productDisp()}
          {productDisp()}
          {productDisp()}
          {productDisp()}
          {productDisp()}
          {productDisp()}
          {productDisp()}
          {productDisp()}
          {productDisp()}
        </ScrollView>
      </View>
      <Fab actIcon1={"bars"} actIcon2={"times"} actionBtn={actionBtn} />
    </View>
  );
}

const style = StyleSheet.create({
  textComp: {
    color: "#5EA37C",
    fontSize: 15,
    fontWeight: "500",
  },
  productComp: {
    paddingLeft: 10,
    paddingTop: 5,
    margin: 10,
    display: "flex",
    borderRadius: 5,
    height: 76,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
