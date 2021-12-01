import React,{useState,useRef} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,ScrollView} from 'react-native';
import ChartDisplayComp from './Util/ChartDisplayComp';
import Fab from './Fab';
import IOComp from './Util/IOComp';
import Custombtm from './Util/CustomBtm';
import Addtransaction from './Addtransaction';
import EditProduct from './Editproduct';
// Should have display for stock
// Should have stock delete Icon
// Should have room for transaction
// use the product Id to make request
export default function Product({route}){

     const [trxn,setTrxn]=useState(false);
     const addTrxnRef=useRef(null);
     const editTrxnRef=useRef(null);
    const data = [
        { 
            name:'In',
          population:route.params.product.stockIn,
          color:"rgb(94, 163, 124)",
          link:()=>console.log(this.name)
        },
        { 
            name:'Out',
          population:route.params.product.stockOut,
          color: "rgb(190, 47, 42)",
          link:()=>console.log(this.name)
        },
        
        {  
          name:"In hand",
          population: route.params.product.currentStock,
          color: "rgb(246, 195, 106)",
          hasLegend: false,
          link:()=>console.log(this.name)
        },
    
      ];
      
      const actionBtn = [
        {
          name: "in",
          icon: "edit",
          color: "#F6C36A",
          func:(e)=>editTrxnRef.current.open()
        },
        {
          name: "out",
          icon: "cart-plus",
          color: "#5EA37C",
          func:(e)=>addTrxnRef.current.open()
        
        },
    
        {
          name: "hand",
          icon: "handshake",
          color: "#BE2F2A",
         func:(e)=>setTrxn(!trxn)
        },
      ]
      const dispComp = (name, value) => {
        return (
          <View style={{ display: "flex", flexDirection: "row",}}>
            <Text style={style.textComp}>{name}:</Text>
            <Text style={{ fontWeight: "400" }}>{value}</Text>
          </View>
        );
      };
    return(
        <View style={{...style.tranCont}}>
        <ChartDisplayComp data={data}/>
       <View>
       <ScrollView contentContainerStyle={{...style.detTranContainer}}>
          <View style={{...style.prodDet,paddingTop:10}}>
          <Text style={{fontWeight:'bold',marginLeft:10}}> Details:</Text>
             <View style={{margin:10,backgroundColor:'#fff',paddingLeft:5,borderRadius:5}}>
             
           {dispComp("Name"," Baby Food")}
           {dispComp("Description"," Ceareal for babies")}
           {dispComp("Created At"," 2010/11/20")}
             </View>
             <TouchableOpacity style={{marginLeft:15,height:30,width:60,borderRadius:2,backgroundColor:'#BE2F2A',justifyContent:'center'}}><Text style={{textAlign:'center',color:'#fff'}}>Delete</Text></TouchableOpacity>
          </View>
         {trxn&&<View style={{...style.tranDet}}>
           
         <Text style={{fontWeight:'bold',marginLeft:10}}> Transactions:</Text>
          <ScrollView style={{height:'95%',display:'flex',flexDirection:'column',paddingLeft:10,paddingRight:10}}>
          <IOComp color="#5EA37C" amount="300" type="IN" name="Baby Food" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Baby Food" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Baby Food" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Baby Food" date="03/08/2019"/>
         <IOComp color="#5EA37C" amount="300" type="IN" name="Baby Food" date="03/08/2019"/>
         <IOComp color="#BE2F2A" amount="250" type="OUT" name="Baby Food" date="03/08/2019"/>
        
          </ScrollView >
           </View>}
        </ScrollView>
       </View>
        <View style={{position:'relative',bottom:60,right:0}}><Fab actionBtn={actionBtn} actIcon1={"bars"} actIcon2={"times"}/>
        </View>
        {<Custombtm displayComp={()=><Addtransaction/>} cod={true} copm={true} height={250} btmRef={addTrxnRef} dragColor={"#5EA37C"}/>}
        {<Custombtm displayComp={()=><EditProduct/>} cod={true} copm={true} height={250} btmRef={editTrxnRef} dragColor={"#F6C36A"}/>}
       
        </View>
    )
}
/**
 *  
 */
const style=StyleSheet.create({
    tranCont: {
        height: Dimensions.get("screen").height,
        width: "100%",
        backgroundColor:'#EEF1F6',
        display:'flex',
        flexDirection:'column',
      
      }
      ,
      detTranContainer:{
      height:'72%',
       display:'flex',
       flexDirection:'column',
       justifyContent:'space-between',
      },

      prodDet:{
       height:'35%',
      },
      tranDet:{
       width:'100%',
       height:'62%',
    
      },
      textComp: {
        color: "#5EA37C",
        fontSize: 15,
        fontWeight: "500",
      },

})