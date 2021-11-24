import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import IconComp from "../Component/Util/IconComp";
import * as Animatable from 'react-native-animatable';
export default function Fab() {
  const [open, setOpen] = useState(false);
  const actionBtn = [
    {
      name: "in",
      icon: "expand-alt",
      color: "#F6C36A",
    },
    {
      name: "out",
      icon: "level-up-alt",
      color: "#5EA37C",
    },

    {
      name: "hand",
      icon: "door-open",
      color: "#BE2F2A",
    },
  ];
  const [animation,setAnimation]=useState({
    visible:false,
    type:"",
  })
  const animate=(type)=>{
    console.log("test");
    setAnimation({visible:false,type});
    setTimeout(()=>{
      setAnimation({visible:true,type})
    },250);
  }
  const op=()=>{
    setOpen(!open);
    animate('bounceIn');
  }
  const props=animation.visible?{animation:animation.type}:{}
  return (
    <View style={style.container} >
      <Animatable.View style={{height:'70%'}} {...props}>
      {open&&<View
        style={{
          height:'100%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {actionBtn.map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={{ ...style.actionBtn, backgroundColor: `${e.color}` }}
            >
              <IconComp name={e.icon} size={18} color={"#fff"} />
            </TouchableOpacity>
          );
        })}
      </View>}
        </Animatable.View>
      <TouchableOpacity
        onPress={() => op()}
        style={style.fabBtn}
      >
        <IconComp name={open ? "minus" : "plus"} size={18} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 250,
    width: 60,
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: 10,
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  actionBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  fabBtn: {
    height:60,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6E7790",
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
