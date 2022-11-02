import { useState } from "react";

import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//pK8UwLNHBhn85q3RdONULuAVbUJcejnM

const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (valueCategory: string): void => {
    // setCategories(categories.concat("Kaichou Wa Maid Sama"))
    if (categories.includes(valueCategory)) return;
    setCategories([valueCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
