import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState("");

  const onInputValue = ({ target }) => {
    setInputValue(target.value);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if (newInputValue.length < 1) return;

    onNewCategory(newInputValue); 
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="BuscarGif"
        value={inputValue}
        onChange={onInputValue}
      />
    <button className="submit-button-category" type="submit">aceptar</button>
    </form>
  );
};