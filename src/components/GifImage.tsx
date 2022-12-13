import { IImages } from "./GifGrid";

export const GifImage = (props: IImages) => {
  const { imgTitle, imdId, imgUrl } = props;

  return (
    <div className="card">
      <h2>{imgTitle}</h2>
      <img key={imdId} alt={imgTitle} src={imgUrl} />
    </div>
  );
};
