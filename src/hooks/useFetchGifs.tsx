import { useEffect, useState } from "react";
import { IImages } from "../components/GifGrid";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<IImages[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getImages = async () => {
    const categoryImages: void = await getGifs(category);
    setImages(categoryImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading: isLoading,
  };
};
