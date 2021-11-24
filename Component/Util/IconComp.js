import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function IconComp({name,color,size,style}){
    return(
        <Icon name={name} color={color} size={size} style={style}/>
    )
}