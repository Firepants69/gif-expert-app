import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category,Initiallimit) => {
    const [limit,setLimit] = useState(Initiallimit)

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        const newImages = await getGifs(category,limit);
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images,
        setImages,
        isLoading,
    }

}