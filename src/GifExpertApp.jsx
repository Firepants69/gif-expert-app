import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrind } from './components/GifGrid'
import { SelectQuantity } from './components/SelectQuantity'

export const GifExpertApp = () => {
    const apiKey = "mxeBz9msSQCg7tQfbcwmfwPOp1gyj9Ic"
    const [categories, setCategories] = useState(['Mob Psycho 100','kimetsu no yaiba','Dragon Ball','One Punch Man']);
    const [limit,setLimit] = useState(10);
    const OnLimitChange =(event)=>{
      setLimit(event.target.value)
    }

  


    const onAddCategory = (categoriaNueva) => {
        if (categories.includes(categoriaNueva)) return;
        setCategories([categoriaNueva, ...categories])
    }
    const onDeleteCategory = (categoriaAeliminar)=>{
        const deletecategory = (categories)=>{
            const newCategories = []
            for(let categorie of categories){
                if(categorie != categoriaAeliminar){
                    newCategories.push(categorie)
                }
            }
            
            return newCategories
        }
        setCategories((categories)=>deletecategory(categories))
    }

    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>
            {/*input */}
            <div className='control-input'>
            <SelectQuantity limit={limit} OnLimitChange={OnLimitChange}/>

            <AddCategory onNewCategory={onAddCategory}></AddCategory>
            </div>
            {/*listado de Gif */}
            <ol>
                {categories.map((category) => (
                    <GifGrind 
                    category={category} 
                    key={category} 
                    onDeleteCategory={onDeleteCategory}
                    Initiallimit={limit}
                    />
                ))}
            </ol>
            {/*Gif Item */}
        </>
    )
}