import { createSlice } from '@reduxjs/toolkit';
import ImageService from '../../utils/services/ImageService';
import { dealSectionOptions as options } from '../../constants';

const initialState = { value: [] };

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { addImages } = imagesSlice.actions;

export const imagesSelector = (state) => state.images.value;

export const fetchImages = () => async (dispatch, getState) => {
  const currentImages = imagesSelector(getState());
  if (currentImages.length) return;

  const response = await ImageService.getRandomList();
  const images = response.data?.map((image, index) => {
    return { ...options[index], url: image.download_url };
  });

  dispatch(addImages(images));
};

export default imagesSlice.reducer;
