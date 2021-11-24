import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,ScrollView} from "react-native";
import { PieChart } from "react-native-chart-kit";
import IconComp from "./Util/IconComp";
import IOComp from "./Util/IOComp";
import Fab from "./Fab";
export default function Transactions() {
  const data = [
    { 
        name:'In',
      population:700,
      color:"rgba(94, 163, 124)",
    },
    { 
        name:'Out',
      population:250,
      color: "rgba(190, 47, 42)",
    },
    
    {  
      name:"At hand",
      population: 450,
      color: "rgba(246, 195, 106)",
      hasLegend: false,
    },
   
    
  
  ];
   
  const ioHand=[
    {
        amount:'450',
        color: "rgba(246, 195, 106,1)",
        name:'In Hand',
        link:()=>console.log(this.name)
    },
       
       {
        amount:'250',
        color: "rgba(190, 47, 42,1)",
        name:'Out',
        link:()=>console.log(this.name)
    },
    {
        amount:'700',
        color:"rgba(94, 163, 124,1)",
        name:'In',
        link:()=>console.log(this.name)
    }

  

  ]

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    style: {
      borderWidth: 1,
      backgroundColor: "red",
    },
  };

  return (
    <View style={{ ...style.tranCont }}>
      <View style={{ ...style.tranChart }}>
        <PieChart
          data={data}
          width={Dimensions.get("screen").width / 2.3}
          height={120}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[25, 10]}
          absolute
          hasLegend={false}
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
          }}
        />
      </View>
      <View style={{...style.iohand}}>
        {ioHand.map((e,i)=>{
            return(
        <TouchableOpacity key={i} style={{width:'30%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
           <IconComp name="stop" size={20} color={`${e.color}`} />
           <Text>
              {e.amount} {e.name}
           </Text>
       </TouchableOpacity>
            )
        })}
       
       
      </View>
      <View style={{height:'65%',width:Dimensions.get('screen').width,padding:10}}>
       <ScrollView style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
         <IOComp color="#F6C36A" amount="300" type="IN" name="Washing Powder" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Washing Powder" date="03/08/2019"/>
       
       </ScrollView>
       <Fab/>
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
