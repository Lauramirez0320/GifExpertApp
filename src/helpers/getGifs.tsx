export interface ICategoryImages {
	id: string;
	title: string;
	images: {
		downsized_medium: {
			url: string;
		}
	}
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pK8UwLNHBhn85q3RdONULuAVbUJcejnM&q=${category}&limit=${20}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifsInfo = data.map(
    (img: ICategoryImages ) => ({
      imdId: img.id,
      imgTitle: img.title,
      imgUrl: img.images.downsized_medium.url,
    })
  );
  
  return gifsInfo;
};
