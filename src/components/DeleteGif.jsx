import { useState } from "react";
import '../styles.css'

export const DeleteGif = ({id,setImages})=>{
    
    const newImages = (images)=>{
        let newImagesArray = []
            for(let image of images){
                if(image.id != id){
                    newImagesArray.push(image)
                }
            }
            return newImagesArray
    }
    const deleteGif = ()=>{
        setImages((images)=>newImages(images)    
        )
    
    }
    
    return(
        < button  className="DeleteGifBoton" onClick={
            deleteGif
        }>x</button>
    )
}