import API from '../plugins/API';

const ImageService = {
  getRandomList: (page = 1, limit = 7) => API.get('/v2/list', { params: { page, limit } })
};

export default ImageService;
