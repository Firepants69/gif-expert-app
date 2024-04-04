import { GifExpertApp } from "../src/GifExpertApp"
import { fireEvent, render,screen } from "@testing-library/react"

describe('Pruebas de <GifExpertApp/>', () => {
  test('pruebas al añadir una categoria ', () => {

    const {getByPlaceholderText, getByTestId, getByText,getByRole } = render(<GifExpertApp/>)
    const input = getByPlaceholderText('BuscarGif')
    console.log(input)
    screen.debug()
  })
  
})
