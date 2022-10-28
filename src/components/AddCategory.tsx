import { FormEvent, useState } from "react";

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onChangeHandler = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue?.trim().length <= 1) return;
    onAddCategory(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={(event) => onSubmitHandler(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default AddCategory;
