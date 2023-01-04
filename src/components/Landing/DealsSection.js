import React, { useEffect, useState } from 'react';
import RadioButton from '../../core/radio/RadioButton';
import { dealSectionOptions as options } from '../../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, imagesSelector } from '../../redux/slices/imagesSlice';

const DealsSection = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const images = useSelector(imagesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className="bg-white shadow flex flex-col items-center py-10">
      <h3 className="font-bold text-2xl">A better way to close deals</h3>
      <p className="mx-5 lg:w-1/3 text-sm text-gray-500 mt-2 mb-5 text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Possimus magnam voluptatum
        cupiditate veritatis in, accusamus quisquam.
      </p>
      <div className="flex flex-wrap justify-center">
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
      <div className="mx-5 lg:w-1/3 my-10">
        {images.length ? <img src={images[selectedOption].url} alt="" /> : ''}
      </div>
    </div>
  );
};

export default DealsSection;
