import React, { useCallback, useEffect, useState } from 'react';
import RadioButton from '../../core/radio/RadioButton';
import ImageService from '../../utils/services/ImageService';
import { dealSectionOptions as options } from '../../constants/index';

const DealsSection = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(() => {
    ImageService.getRandomList().then((response) => {
      const images = response.data?.map((image, index) => {
        return { ...options[index], url: image.download_url };
      });
      setImages(images);
    });
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="bg-white shadow flex flex-col items-center py-10">
      <h3 className="font-bold text-2xl">A better way to close deals</h3>
      <p className="w-1/3 text-sm text-gray-500 mt-2 mb-5 text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Possimus magnam voluptatum
        cupiditate veritatis in, accusamus quisquam.
      </p>
      <div className="flex">
        {options.map(({ id, text }) => (
          <div key={id}>
            <RadioButton
              label={text}
              onClick={() => setSelectedOption(id)}
              checked={selectedOption === id}
            />
          </div>
        ))}
      </div>
      <div className="w-1/3 my-10">
        {images.length ? <img src={images[selectedOption].url} alt="" /> : ''}
      </div>
    </div>
  );
};

export default DealsSection;
