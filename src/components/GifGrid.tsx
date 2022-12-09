import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export interface IImages {
	imdId: string;
	imgTitle: string;
	imgUrl:  string;
}

export const GifGrid = (props: { category: string }) => {
  const { category } = props;

  const [images, setImages] = useState<IImages[]>([]);

  const getImages = async () => {
    const categoryImages:void = await getGifs(category);
    setImages(categoryImages);
  };

  useEffect(() => {
    getImages();
  }, []);
console.log([images]);

  return (
    <div>
      <h4>{category}</h4>
      <ol>
        {images.map((image) => {
          return <li key={image.imdId}>{image.imgTitle}</li>;
        })}
      </ol>
    </div>
  );
};
