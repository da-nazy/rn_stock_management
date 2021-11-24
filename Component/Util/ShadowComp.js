import React from 'react';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
export default function ShadowComp({comp,style,offset,radius,width,height,distance}){
   return(
      <Shadow  startColor={'#fff'} finalColor={'#fff0'} radius={3}  >
    {comp}
   </Shadow>
   )
}
//offset={[1, 2]} 