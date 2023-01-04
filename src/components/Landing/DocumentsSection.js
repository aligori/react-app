import React from 'react';
import Badge from '../../core/badges/Badge';
import { FileCheck } from 'tabler-icons-react';
import details from '../../assets/images/application-details.png';

const ListItem = ({ title, text, icon, bgColor }) => {
  return (
    <div className="flex items-start my-6">
      <div className={`${bgColor} text-white p-3 rounded-md mr-5`}>{icon}</div>
      <div className="flex-1 flex-col">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm text-gray-500 my-1">{text}</p>
      </div>
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div className="bg-white shadow flex flex-col lg:flex-row items-start pb-10">
      <div className="flex-1">
        <img src={details} alt="" className="shadow" />
      </div>
      <div className="flex-1 px-10 lg:px-20">
        <Badge className="my-1" text="Client Application" />
        <h3 className="font-bold text-2xl mt-1">Application Documents in one place</h3>
        <p className="text-sm text-gray-500 mt-2 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi recusandae,
          porro maiores officia.
        </p>
        <ListItem
          title="Fill it digitally"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi
              recusandae, porro maiores officia."
          icon={<FileCheck />}
          bgColor="bg-red-400"
        />
        <ListItem
          title="Save it for other cases"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi
              recusandae, porro maiores officia."
          icon={<FileCheck />}
          bgColor="bg-blue-400"
        />
        <ListItem
          title="No need to switch app"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur minima sequi
              recusandae, porro maiores officia."
          icon={<FileCheck />}
          bgColor="bg-cyan-700"
        />
      </div>
    </div>
  );
};

export default DocumentsSection;
