import React from 'react';
import {
  FileAnalytics,
  FileArrowRight,
  FilePlus,
  FileUpload,
  Message,
  Send,
  Speakerphone,
  Tag
} from 'tabler-icons-react';

const Feature = ({ title, text, icon }) => {
  return (
    <div className="mx-2 my-3">
      {icon}
      <h3 className="font-medium text-base">{title}</h3>
      <p className="text-sm text-gray-500 my-1">{text}</p>
    </div>
  );
};

const PlatformSection = () => {
  return (
    <div className="bg-white shadow flex flex-col items-center py-20">
      <h3 className="font-bold text-2xl">All-in-One Platform</h3>
      <p className="mx-5 lg:w-1/3 text-sm text-gray-500 mt-2 mb-5 text-center">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
        sagittis vel nulla nec.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 lg:mx-40">
        <Feature
          title="Import CSV"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-orange-50 text-orange-500 p-3 rounded-md mr-5 mb-2">
              <FileUpload />
            </div>
          }
        />
        <Feature
          title="Drive Campaigns"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-green-50 text-green-500 p-3 rounded-md mr-5 mb-2">
              <Speakerphone />
            </div>
          }
        />
        <Feature
          title="Add Tasks"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          color="cyan"
          icon={
            <div className="w-12 bg-cyan-50 text-cyan-500 p-3 rounded-md mr-5 mb-2">
              <FilePlus />
            </div>
          }
        />
        <Feature
          title="Add Tags"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-indigo-50 text-indigo-500 p-3 rounded-md mr-5 mb-2">
              <Tag />
            </div>
          }
        />

        <Feature
          title="See Statistics"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-red-50 text-red-500 p-3 rounded-md mr-5 mb-2">
              <FileAnalytics />
            </div>
          }
        />
        <Feature
          title="Email & Sms"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-yellow-50 text-yellow-500 p-3 rounded-md mr-5 mb-2">
              <Message />
            </div>
          }
        />
        <Feature
          title="Receive Applications"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-teal-50 text-teal-500 p-3 rounded-md mr-5 mb-2">
              <FileArrowRight />
            </div>
          }
        />
        <Feature
          title="Send Online Forms"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={
            <div className="w-12 bg-blue-50 text-blue-500 p-3 rounded-md mr-5 mb-2">
              <Send />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PlatformSection;
