import { useState } from "react";
import { DeleteGif } from "./DeleteGif";

export const GifItem = ({ title, url,id,setImages}) => {
    return (
        <div className="card">
            <DeleteGif id={id} setImages={setImages}/>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}