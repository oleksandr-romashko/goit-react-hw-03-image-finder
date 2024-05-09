import { instance } from 'api/instance';

export const getImagesApi = async (searchQuery, page, perPage) => {
  const { data } = await instance(`?q=${searchQuery}`, {
    params: {
      page: page,
      per_page: perPage,
      image_type: 'photo',
    },
  });
  return data;
};

export default getImagesApi;
