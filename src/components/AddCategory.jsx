import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Padre Ball');


    const onInputValue = ({ target }) => {
        console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();

        if (newInputValue.length < 1) return

        onNewCategory(newInputValue)
        setInputValue("")
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="BuscarGif"
                value={inputValue}
                onChange={onInputValue}
            />
        </form>
    )
}