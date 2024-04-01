
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import '../styles.css'

export const GifGrind = ({ category,onDeleteCategory }) => {

    const { images,setImages, isLoading } = useFetchGifs(category)

    console.log(images, isLoading)

    return (
        <>
            <h3>{category} <button className="DeleteCategoryButton" onClick={()=>{onDeleteCategory(category)}}>x</button></h3>
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
                    ></GifItem>
                ))}
            </div>
        </>
    )
}