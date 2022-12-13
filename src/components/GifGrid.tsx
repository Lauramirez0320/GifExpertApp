import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifImage } from "./GifImage.js";

export interface IImages {
  imdId: string;
  imgTitle: string;
  imgUrl: string;
}

export const GifGrid = (props: { category: string }) => {
  const { category } = props;

  const [images, setImages] = useState<IImages[]>([]);

  const getImages = async () => {
    const categoryImages: void = await getGifs(category);
    setImages(categoryImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h4>{category}</h4>
      <div className="card-grid">
        {images.map((image) => (
          <GifImage {...image} />
        ))}
      </div>
    </>
  );
};
