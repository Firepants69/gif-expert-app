import React from "react";
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from "./GifExpertApp";
import './index.css'
import './styles.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GifExpertApp></GifExpertApp>
    </React.StrictMode>
) 