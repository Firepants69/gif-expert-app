import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('testeo en GifItem', () => {

  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'
  

  test('debe de hacer match con el snapshot', () => {

    const {container} =render(<GifItem title={title} url={url}></GifItem>)
    expect(container).toMatchSnapshot(); 

  })
  test('debe de mostrar la imagen con el URL indicado', () => {
    
    render(<GifItem title={title} url={url}></GifItem>)
    // screen.debug()
    const {src,alt} = screen.getByRole('img')
    expect(src).toBe(url);
    expect(alt).toBe(title);
    
  })

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url}></GifItem>) 
    expect(screen.getByText(title)).toBeTruthy();
  })
  
  
  
})
