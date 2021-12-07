import React from 'react';
import{View,Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from './Constant';
export default function InputComp({ roundness,themePrimary,themeText,themeBackground,themePlaceholder,selectionColor,outlineColor,setText,style,mode,placeholder,label,right,error,secureText,maxLength,keyboardType,autoFocus}){

    return(
  <TextInput
   selectionColor={selectionColor?selectionColor:colors.secondary}
   outlineColor={outlineColor?outlineColor:colors.secondary}
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
    roundness:roundness?roundness:0,
    colors: {
          primary:`${themePrimary?themePrimary:colors.third}`,
          text: `${themeText?themeText:'white'}`,
          background:`${themeBackground?themeBackground:colors.transparent}`,
          placeholder:`${themePlaceholder?themePlaceholder:colors.third}`
       }
 }}
  />
    )
} 