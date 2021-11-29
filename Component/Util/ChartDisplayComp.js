import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import { PieChart } from "react-native-chart-kit";
import IconComp from './IconComp';
export default function ChartDisplayComp({data}){
    
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
          backgroundColor: "red",
        },
      };
return(
    <View style={{width:'100%',display:'flex',flexDirection:'column',height:'20%',justifyContent:'space-between'}}>
    <View style={{ ...style.tranChart}}>
        <PieChart
          data={data}
          width={Dimensions.get("screen").width / 2.3}
          height={120}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[30, 10]}
          absolute
          hasLegend={false}
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            marginTop:20
          }}
        />
    </View>
      <View style={{...style.iohand}}>
        {data.map((e,i)=>{
            return(
        <TouchableOpacity key={i} style={{width:'30%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
           <IconComp name="stop" size={20} color={`${e.color}`} />
           <Text>
              {e.population} {e.name}
           </Text>
       </TouchableOpacity>
            )
        })}
       
       
      </View>
    </View>
)
}

const style=StyleSheet.create({
  
    tranChart: {
        height: "30%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin:10,
    
      },
      iohand:{
          borderBottomWidth:2,
           height:'18%',
           width:'100%',
           display:'flex',
           flexDirection:'row',
            justifyContent:'space-evenly',
          borderColor:"rgba(94, 163, 124,1)",
      }
})