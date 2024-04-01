import { useState } from "react";
import '../styles.css'

export const DeleteGif = ({id,setImages,onDeleteCategory,category})=>{
    
    const newImages = (images)=>{
        let newImagesArray = []
            for(let image of images){
                if(image.id != id){
                    newImagesArray.push(image)
                }
            }
            if(newImagesArray.length ===0){
                onDeleteCategory(category)
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