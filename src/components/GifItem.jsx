import { useState } from "react";

export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <button>x</button>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}