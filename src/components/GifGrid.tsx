import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifImage } from "./GifImage.js";

export interface IImages {
  imdId: string;
  imgTitle: string;
  imgUrl: string;
}

export interface ICategory {
  category: string;
}

export const GifGrid = ({ category }: ICategory): JSX.Element => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h4>Cargando...</h4>}
      <h4>{category}</h4>

      <div className="card-grid">
        {images.map((image: IImages) => (
          <GifImage {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
