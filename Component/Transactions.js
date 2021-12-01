import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,ScrollView} from "react-native";
import { PieChart } from "react-native-chart-kit";
import IconComp from "./Util/IconComp";
import IOComp from "./Util/IOComp";
import Fab from "./Fab";
import ChartDisplayComp from "./Util/ChartDisplayComp";
export default function Transactions() {
  
  const data = [
    { 
        name:'In',
      population:700,
      color:"rgb(94, 163, 124)",
      link:()=>console.log(this.name)
    },
    { 
        name:'Out',
      population:250,
      color: "rgb(190, 47, 42)",
      link:()=>console.log(this.name)
    },
    
    {  
      name:"In hand",
      population: 450,
      color: "rgb(246, 195, 106)",
      hasLegend: false,
      link:()=>console.log(this.name)
    },

  ];

  const actionBtn = [
    {
      name: "in",
      icon: "expand-alt",
      color: "#F6C36A",
      func:(e)=>console.log(e)
    },
    {
      name: "out",
      icon: "level-up-alt",
      color: "#5EA37C",
      func:(e)=>console.log(e)
    },

    {
      name: "hand",
      icon: "door-open",
      color: "#BE2F2A",
     func:(e)=>console.log(e)
    },
  ]
   
  

  

  

  return (
    <View style={{ ...style.tranCont }}>
      <ChartDisplayComp data={data}/>
      <View style={{height:'60%',width:Dimensions.get('screen').width,padding:10}}>
       <ScrollView style={{width:'100%',height:10,display:'flex',flexDirection:'column'}}>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
        
       </ScrollView>
     

      </View>
      <View style={{marginTop:70}}>
     <Fab actionBtn={actionBtn} actIcon1={"bars"} actIcon2={"times"}/>
     </View>
    </View>
  );
}

const style = StyleSheet.create({
  tranCont: {
    height: Dimensions.get("screen").height,
    width: "100%",
    backgroundColor:'#EEF1F6',
  },
  tranChart: {
    height: "15%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  iohand:{
      borderBottomWidth:2,
       height:'8%',
       width:'100%',
        display:'flex',
        flexDirection:'row',
         justifyContent:'space-evenly',
      borderColor:"rgba(94, 163, 124,1)",
  }
});
