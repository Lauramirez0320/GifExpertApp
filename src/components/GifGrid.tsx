import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifImage } from "./GifImage.js";

export interface IImages {
  imdId: string;
  imgTitle: string;
  imgUrl: string;
}

export const GifGrid = (props: { category: string }) => {
  const { category } = props;

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>
      <div className="card-grid">
        {images.map((image: IImages) => (
          <GifImage {...image} />
        ))}
      </div>
    </>
  );
};
