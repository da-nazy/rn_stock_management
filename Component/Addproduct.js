import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";
import { colors,units,contacts} from "./Util/Constant";
import IconComp from "./Util/IconComp";
import InputComp from "./Util/InputComp";
export default function Addproduct({ navigation }) {
  const [productImage, setProductImage] = useState(null);
  const [isSup, setIsSup] = useState(false);
  const [unitValue,setUnitValue]=useState('');

  const ProductHead = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 35,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 5,
          width:'90%',
          alignSelf:'center'
        }}
      >
        <IconComp
          name="chevron-left"
          size={20}
          style={{ color: `${colors.primary}` }}
        />
        <Text
          style={{
            color: `${colors.primary}`,
            fontSize: 17,
            fontWeight: "700",
            paddingLeft: 10,
          }}
        >
          {" "}
          Add Product
        </Text>
      </TouchableOpacity>
    );
  };

  const toggleSwitch = () => {
    setIsSup(!isSup);
    contacts();
  };

  return (
    <View style={{ ...style.container }}>
      {ProductHead()}
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          {productImage ? (
            <Image />
          ) : (
            <IconComp name="camera" size={40} color={colors.secondary} />
          )}
        </TouchableOpacity>
        <Text style={{ fontWeight: "600" }}>Product Image</Text>
      </View>
      <View style={{display:'flex',flexDirection:'column'}}>
        <View style={{display:'flex',alignItems:'center'}}>
        <InputComp
          roundness={5}
          mode="outlined"
          themePlaceholder="#000"
          setText={(e) => console.log(e)}
          placeholder="Product Name"
          error={false}
          style={{ ios_backgroundColor: "#fff",width:'90%' }}
          themePrimary={colors.secondary}
        />
        </View>

        <View style={{...style.priceCont}}>
          <InputComp
            placeholder="0.00"
            label="Cost Price"
            keyboardType="numeric"
            error={false}
            setText={(e) => console.log(e)}
            style={{width:'35%'}}
            mode="outlined"
            roundness={5}
            themePlaceholder="#000"
            themePrimary={colors.secondary}
          />

          <InputComp
            placeholder="0.00"
            label="Sell Price"
            keyboardType="numeric"
            error={false}
            setText={(e) => console.log(e)}
            style={{width:'35%'}}
            mode="outlined"
            roundness={5}
            themePrimary={colors.secondary}
            themePlaceholder="#000"
          />
        </View>
        <View style={{...style.quantCont}}>
          <Text style={{fontWeight:'600',fontSize:15,width:'30%'}}>Quantity</Text>
          <View style={{...style.pmBtnCont}}>
            <TouchableOpacity style={{...style.minusBtn}}>
              <IconComp name="minus"  color={'#fff'}/>
            </TouchableOpacity>
            <View style={{borderWidth:1,width:55,justifyContent:'center',height:35,borderRadius:2,borderColor:colors.secondary}}>
                <Text style={{textAlign:'center'}}>0</Text>
             </View>
            <TouchableOpacity style={{...style.plusBtn}}>
              <IconComp name="plus" color={'#fff'}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'90%',display:'flex',alignSelf:'center'}}>
          <Text style={{fontWeight:'600'}}>Select Unit</Text>
         <View style={{borderWidth:1,borderRadius:5,marginTop:5,marginBottom:5,borderColor:colors.secondary}}>
         <Picker
            selectedValue={unitValue}
            onValueChange={(itemValue, itemIndex) =>setUnitValue(itemValue)}
          >
            <Picker.Item label={"Unit"} value="" />
            {units.map((e,i)=>{
                return(
                    <Picker.Item key={i} label={e} value={e} />
                )
            })}
          </Picker>
         </View>
        </View>
        <View style={{marginTop:5,width:'90%',alignSelf:'center'}}>
          <Text style={{fontWeight:'600'}}>Suppliers Contact</Text>
          <View style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:10,color:'#bbb',fontWeight:'700'}}>Automated messaged will be sent for a restock</Text>
            <Switch
              style={{ marginRight: 4,height:20}}
              trackColor={{ false: `${colors.secondary}`, true:"#bbbbbb" }}
              thumbColor={isSup ? `${colors.secondary}` : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isSup}
            />
          </View>
        </View>
        <TouchableOpacity style={{...style.saveBtn}}>
          <Text style={{textAlign:'center',fontWeight:'700',color:'#fff',fontSize:18}}> Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
    priceCont:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        marginTop:10,
        justifyContent:'space-between'
    },
 saveBtn:{
    width:'90%',
    alignSelf:'center',
    height:40,
    borderRadius:5,
    marginTop:15,
    justifyContent:'center',
    backgroundColor:`${colors.secondary}`,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,
elevation: 7,
 },
  minusBtn:{
      borderWidth:1,
      width:40,
      height:25,
      justifyContent:'center',
      alignItems:'center', 
      borderRadius:5,
      backgroundColor:colors.secondary,
      borderColor:colors.secondary,
  },
  plusBtn:{
    borderWidth:1,
    width:40,
    height:25,
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:5,
    borderColor:colors.secondary,
    backgroundColor:colors.secondary,
},
  pmBtnCont:{
   width:'55%',
   flexDirection:'row',
   justifyContent:'space-around',
   alignItems:'center'
  },
  quantCont:{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    marginTop:10,
    height:50,
    alignItems:'center',
    justifyContent:'space-between',
  }
});
