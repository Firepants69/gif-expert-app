import { useState } from 'react'
import './styles.css'
import { AddCategory } from './components/AddCategory'
import { GifGrind } from './components/GifGrid'

export const GifExpertApp = () => {
    const apiKey = "mxeBz9msSQCg7tQfbcwmfwPOp1gyj9Ic"
    const [categories, setCategories] = useState(['Dragon Ball', 'Naruto', 'One Punch Man', 'The Rock']);


    const onAddCategory = (categoriaNueva) => {
        if (categories.includes(categoriaNueva)) return;
        setCategories([categoriaNueva, ...categories])
    }

    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>
            {/*input */}
            <AddCategory onNewCategory={onAddCategory}></AddCategory>
            {/*listado de Gif */}

            <ol>
                {categories.map((category) => (
                    <GifGrind category={category} key={category} />
                ))}
            </ol>
            {/*Gif Item */}
        </>
    )
}