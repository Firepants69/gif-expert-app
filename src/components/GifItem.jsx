import { useState } from "react";
import { DeleteGif } from "./DeleteGif";

export const GifItem = ({ title, url,id,setImages,onDeleteCategory,category}) => {
    return (
        <div className="card">
            <DeleteGif id={id} setImages={setImages}onDeleteCategory={onDeleteCategory}category={category}/>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}