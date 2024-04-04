import { render,screen } from "@testing-library/react"
import { GifGrind } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en <GifGrid/> ', () => {
    const category = 'One Punch Man'
    test('debe de mostrar el loading inicialmente ', () => {
        
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading:true
    })

    	render(<GifGrind category={category}/>)
        screen.debug()
        expect(screen.getByText('Cargando...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()

  })

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
    {
        id:'abc',
        title:'saitama',
        url:'https://saitama.com'
    },
    {
        id:'abcd',
        title:'saitama2',
        url:'https://saitama2.com'   
    }
]
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading:false
    })
    render(<GifGrind category={category}/>)	
    screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  })
  
  
})
