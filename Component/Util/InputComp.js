import React from 'react';
import{View,Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import {colors} from '../Util/Constants';
export default function InputComp({setText,style,mode,placeholder,label,right,error,secureText,maxLength,keyboardType,autoFocus}){

    return(
  <TextInput
   selectionColor={colors.secondary}
   outlineColor={colors.secondary}
   onChangeText={(e)=>setText(e)}
   placeholder={placeholder}
   label={label}
   autoFocus={autoFocus}
   error={error}
   secureTextEntry={secureText}
   keyboardType={keyboardType&&keyboardType}
   style={style}
    mode={mode} 
    right={right}
    maxLength={maxLength}
    
   theme={{
    roundness: 0,
    colors: {
          primary:`${colors.third}`,
          text: 'white',background:`${colors.transparent}`,placeholder:`${colors.third}`
       }
 }}
  />
    )
} 