import { FormEvent, useState } from "react";

const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddCategory(inputValue)
    };

  return (
    <form action="" onSubmit={(event) => onSubmitHandler(event)}>
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
