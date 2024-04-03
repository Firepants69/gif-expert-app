
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { DeleteCategory } from "./DeleteCategory";

export const GifGrind = ({ category,onDeleteCategory,Initiallimit }) => {
    
    const { images,setImages, isLoading} = useFetchGifs(category,Initiallimit)

    

    return (
        <>
            <h3>{category} <DeleteCategory onDeleteCategory={onDeleteCategory}category={category}/></h3>
            {
                isLoading ? <h2>cargando...</h2> : null
            }
         
            <div className="card-grid">
              
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        title ={image.title}
                        url={image.url}
                        id={image.id}
                        setImages = {setImages}
                        onDeleteCategory={onDeleteCategory}
                        category={category}
                    ></GifItem>
                ))}
            </div>
        </>
    )
}