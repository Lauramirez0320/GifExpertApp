import { FormEvent, useState } from "react";

export interface IAddCategory {
  onAddCategory: (valueCategory: string) => void;
};

const AddCategory  = (props:IAddCategory) => {
  const {onAddCategory} = props
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeHandler = ({ target }: any) => {
    setInputValue(target.value);
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
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
