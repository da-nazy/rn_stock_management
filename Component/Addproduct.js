import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from './Util/Constant';
import IconComp from './Util/IconComp';
import InputComp from './Util/InputComp';
export default function Addproduct({navigation}){
    const [productImage,setProductImage]=useState(null);
    const[isSup,setIsSup]=useState(false);
    const ProductHead=()=>{
        return(
         <TouchableOpacity  onPress={()=>navigation.goBack()} style={{height:35,display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:5}}>
           <IconComp name="chevron-left" size={20} style={{color:'#5EA37C'}} />
           <Text style={{color:'#5EA37C',fontSize:17,fontWeight:'700',paddingLeft:10}}> Add Product</Text>
           </TouchableOpacity>
        )
      } 

      const toggleSwitch=()=>{
         setIsSup(!isSup);
      }

    return(
        <View style={{...style.container}}>
         {ProductHead()}
         <View>
             <TouchableOpacity>
                {productImage?<Image/>:<IconComp name="camera" size={25}/>}
             </TouchableOpacity>
             <Text>Product Image</Text>
         </View>
         <View>
             <InputComp setText={(e)=>console.log(e)} placeholder="Product Name" error={false}/>
             <View>
                 <InputComp placeholder="0.00" label="Cost Price" keyboardType="numeric"  error={false} setText={(e)=>console.log(e)}/>
                 <InputComp placeholder="0.00" label="Selling Price" keyboardType="numeric"  error={false} setText={(e)=>console.log(e)}/>
             </View>
             <View>
                 <Text>Quantity</Text>
                 <View>
                     <TouchableOpacity>
                         <IconComp name="minus"/>
                     </TouchableOpacity>
                     <InputComp placeholder="0" error={false} setText={(e)=>console.log(e)}/>
                     <TouchableOpacity>
                         <IconComp name="plus"/>
                     </TouchableOpacity>
                 </View> 
             </View>
             <View>
                 <Text>Select Unit</Text>
                 <Picker
              selectedValue={'0'}
              onValueChange={(itemValue, itemIndex) =>
                    console.log(itemValue)
              }
              style={{ borderWidth: 1 }}
            >
              <Picker.Item label={'Unit'} value="" />
             
                  <Picker.Item  label="test" value="test" />
              
            </Picker>
             </View>
             <View>
                 <Text>Suppliers Contact</Text>
                <View> <Text>Automated messaged will be sent for a restock</Text>
                <Switch 
        style={{marginRight:4}}
        trackColor={{ false: `${colors.third}`, true:"#bbbbbb" }}
        thumbColor={isOtpEnabled ? `${colors.third}` : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isSupplier}
      />
                </View>
            </View>
             <TouchableOpacity>
                 <Text> Save</Text>
             </TouchableOpacity>
         </View>
        </View>
    )
}
const style=StyleSheet.create({

    container:{

    },

})