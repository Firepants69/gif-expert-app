import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => {
    const category = 'goku'
    test('debe de regresar el estado inicial', () => {
      
        	const {result} = renderHook(()=>useFetchGifs(category,10))
            const {images,isLoading} = result.current
            console.log(result)

            expect(images.length).toBe(0);
            expect(isLoading).toBeTruthy();
    })

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
      
        const {result} = renderHook(()=>useFetchGifs(category,10))
        await waitFor(()=> expect(result.current.images.length).toBeGreaterThan(0) )
        const {images,isLoading} =  result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
    
  
})
