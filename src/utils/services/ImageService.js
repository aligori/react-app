import API from '../plugins/API';

const ImageService = {
  getRandomList: () => API.get('/v2/list')
};

export default ImageService;
