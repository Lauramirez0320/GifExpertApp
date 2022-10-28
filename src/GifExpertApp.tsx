import { useState } from "react";

import AddCategory from "./components/AddCategory";
//pK8UwLNHBhn85q3RdONULuAVbUJcejnM

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (valueCategory: string): void => {
    // setCategories(categories.concat("Kaichou Wa Maid Sama"))
    setCategories([valueCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
