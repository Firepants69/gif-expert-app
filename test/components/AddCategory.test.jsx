import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en AddCategory', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    
    
    render(<AddCategory onNewCategory={()=>{}}></AddCategory>)
    screen.debug();
    const input = screen.getByRole('textbox')
    const inputValue = 'saitama'
    fireEvent.input(input,{target:{value:inputValue}})
    screen.debug();
    expect(input.value).toBe(inputValue)
    screen.debug();
  })
  
  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn()
    //TODO
    render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input,{target:{value:inputValue}})
    fireEvent.submit(form);
    expect(input.value).toBe("")
    screen.debug()
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    
  })
  
  test('no debe de llamar al onNewCategory si el input está vacio', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  })
  

})
