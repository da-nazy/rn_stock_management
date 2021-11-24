import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Touchable,
  ImageStore,
} from "react-native";
import { color, image } from "./constant";
import IconComp from "./Util/IconComp";
export default function Dashboard({navigation}) {
  const nav = [
    {
      name: "Products",
      icon: 'cubes',
      color: "#F6C36A",
      colorBlur: "rgba(246, 195, 106,0.2)",
      link:()=>console.log("Products"),
    },
    {
      name: "Low Stocks",
      icon: "box",
      color: "#5EA37C",
      colorBlur: "rgba(94, 163, 124,0.2)",
      link:()=>console.log("Low Stock"),
    },
    {
      name: "Transactions",
      icon: "handshake",
      color: "#BE2F2A",
      colorBlur: "rgba(190, 47, 42,0.2)",
      link:()=>navigation.navigate("Transactions"),
    },
  ];

  const inout = [
    {
      color: "#F6C36A",
      amount: "300",
      type: "IN",
      name: "Washing Powder",
      date: "03/08/2019",
    },

    {
      color: "#BE2F2A",
      amount: "40",
      type: "OUT",
      name: "Washing Powder",
      date: "03/08/2019",
    },
  ];
  const test = () => {};
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={color.secondary} />

      <View style={style.imgCont}>
        <ImageBackground
          source={image.log3}
          resizeMode={"cover"}
          style={{ width: "100%", height: "100%" }}
        >
          <Text style={style.txt}>
            Stock and Inventory {"\n"}Managment System
          </Text>
        </ImageBackground>
      </View>
      <View style={style.nav}>
        {nav.map((e, i) => {
          return (
            <TouchableOpacity
            onPress={()=>e.link()}
              key={i}
              style={{ ...style.navItem, backgroundColor: `${e.colorBlur}` }}
            >
              <IconComp
                name={e.icon}
                size={32}
                style={{ textAlign: "center" }}
                color={e.color}
              />
              <Text style={{ textAlign: "center", fontWeight: "700" }}>
                {e.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ ...style.inoutContainer }}>
        {inout.map((e, i) => {
          return (
            <TouchableOpacity key={i} style={{ ...style.ioItem }}>
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
                  backgroundColor: `${e.color}`,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    alignSelf: "center",
                    fontWeight: "700",
                    color: "#fff",
                    fontSize:12
                  }}
                >
                  {e.type}
                </Text>
              </View>
              <View
                style={{
                  width: "80%",
                  flexDirection: "column",
                  height: "80%",
                  justifyContent: "space-evenly",
                  alignSelf: "center",
                  padding: 5,
                }}
              >
                <Text style={{ fontWeight: "700", color: `${e.color}` }}>
                  {e.amount}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{e.name}</Text>
                  <Text>{e.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{...style.details}}>
        <View style={{width:'30%',height:'60%',alignSelf:'center',marginLeft:10}}>
        <Image source={image.scan} style={{width:'100%',height:'100%'}} />
        </View>
        <View style={{width:'65%',borderTopWidth:1,height:'85%',alignSelf:'center'}}>
         <View style={{borderWidth:1,borderColor:'#EEF1F6',display:'flex',flexDirection:'row',height:30,justifyContent:'space-between',alignItems:'center',paddingLeft:5,paddingRight:5}}>
           <Text style={{color:"#F6C36A",fontWeight:"700"}}>Total Products In</Text><Text>700</Text>
         </View>
         <View style={{borderWidth:1,borderColor:'#EEF1F6',display:'flex',flexDirection:'row',height:30,justifyContent:'space-between',alignItems:'center',paddingLeft:5,paddingRight:5}}>
           <Text style={{color:"#BE2F2A",fontWeight:"700"}}>Total Products Out</Text><Text>250</Text>
         </View>
         <View style={{borderWidth:1,borderColor:'#EEF1F6',display:'flex',flexDirection:'row',height:30,justifyContent:'space-between',alignItems:'center',paddingLeft:5,paddingRight:5}}>
           <Text style={{color:"#5EA37C",fontWeight:"700"}}>Total Products Hand</Text><Text>450</Text>
         </View>
         <View style={{backgroundColor:"#5EA37C",display:'flex',flexDirection:'row',height:30,justifyContent:'space-between',alignItems:'center',paddingLeft:5,paddingRight:5}}>
           <Text style={{color:"#fff",fontWeight:"700"}}>Stock Price</Text><Text style={{color:'#fff'}}>56,000</Text>
         </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },
  imgCont: {
    display: "flex",
    height: "30%",
    backgroundColor: `${color.secondary}`,
    position: "relative",
    flexDirection: "row",
  },
  txt: {
    fontWeight: "600",
    fontSize: 28,
    textAlign: "center",
    marginTop: 20,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
  },
  nav: {
    height: "16%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navItem: {
    width: "30%",
    borderRadius: 5,
    justifyContent: "space-evenly",
    height: "85%",
  },

  inoutContainer: {
    alignSelf: "center",
    width: "95%",
    height: "20%",
    backgroundColor: "#EEF1F6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingRight: 5,
  },

  ioItem: {
    width: "85%",
    height: "44%",
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "row",
  },
  details:{
      width:'100%',
      height:'22%',
      display:'flex',
      flexDirection:'row',
      paddingRight:5,
  },

  detItems:{

  }
});

