import PropTypes from "prop-types";
import { IImages } from "./GifGrid";

const GifImage = (props: IImages) => {
  const { imgTitle, imdId, imgUrl } = props;

  return (
    <div className="card">
      <h2>{imgTitle}</h2>
      <img key={imdId} alt={imgTitle} src={imgUrl} />
    </div>
  );
};

GifImage.propTypes = {
  imgTitle: PropTypes.string,
  imdId: PropTypes.string,
  imgUrl: PropTypes.string,
};

export { GifImage };
