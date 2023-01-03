import React from 'react';
import Badge from '../../core/badges/Badge';
import { FileCheck } from 'tabler-icons-react';
import details from '../../assets/images/application-details.png';

const DocumentsSection = () => {
  return (
    <div className="bg-white shadow flex flex-col lg:flex-row items-center pb-10">
      <div className="flex-1">
        <img src={details} alt="" className="shadow" />
      </div>
      <div className="flex-1 px-10 lg:px-20">
        <Badge text="Client Application" />
        <h3 className="font-bold text-2xl mt-1">Application Documents in one place</h3>
        <p className="text-sm text-gray-500 mt-2 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi recusandae,
          porro maiores officia.
        </p>

        <div className="flex items-start my-5">
          <div className="bg-red-400 text-white p-3 rounded-md mr-5">
            <FileCheck />
          </div>
          <div className="flex-1 flex-col">
            <h3 className="font-medium text-base">Fill it digitally</h3>
            <p className="text-sm text-gray-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi
              recusandae, porro maiores officia.
            </p>
          </div>
        </div>

        <div className="flex items-start my-5">
          <div className="bg-blue-400 text-white p-3 rounded-md mr-5">
            <FileCheck />
          </div>
          <div className="flex-1 flex-col">
            <h3 className="font-medium text-base">Save it for other cases</h3>
            <p className="text-sm text-gray-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi
              recusandae, porro maiores officia.
            </p>
          </div>
        </div>

        <div className="flex items-start my-5">
          <div className="bg-[#256D85] text-white p-3 rounded-md mr-5">
            <FileCheck />
          </div>
          <div className="flex-1 flex-col">
            <h3 className="font-medium text-base">No need to switch app</h3>
            <p className="text-sm text-gray-500 my-1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi
              recusandae, porro maiores officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
