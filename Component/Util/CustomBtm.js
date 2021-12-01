import React,{useState,useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
export default function Custombtm({displayComp,cod,copm,btmRef,height,dragColor}){
    
return(
    <RBSheet
    dragFromTopOnly={true}
    ref={btmRef}
    closeOnDragDown={cod}
    closeOnPressMask={copm}
    openDuration={12}
    height={height}
  
    customStyles={{
        wrapper: {
            backgroundColor: "transparent"
        },
        draggableIcon: {
            backgroundColor:dragColor?dragColor:'#F6C36A'
        },
        container: {
            backgroundColor: '#fff',
            
        }
    }}
>
    {displayComp()}
    
   </RBSheet>
)
}