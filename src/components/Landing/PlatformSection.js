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

const Functionality = ({ title, text, icon, color }) => {
  return (
    <div className="mx-2 my-3">
      <div className={`w-12 bg-${color}-50 text-${color}-500 p-3 rounded-md mr-5 mb-2`}>{icon}</div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-40">
        <Functionality
          title="Import CSV"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<FileUpload />}
          color="orange"
        />
        <Functionality
          title="Drive Campaigns"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<Speakerphone />}
          color="green"
        />
        <Functionality
          title="Add Tasks"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<FilePlus />}
          color="cyan"
        />
        <Functionality
          title="Add Tags"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<Tag />}
          color="indigo"
        />

        <Functionality
          title="See Statistics"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<FileAnalytics />}
          color="red"
        />
        <Functionality
          title="Email & Sms"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<Message />}
          color="yellow"
        />
        <Functionality
          title="Receive Applications"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<FileArrowRight />}
          color="teal"
        />
        <Functionality
          title="Send Online Forms"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          icon={<Send />}
          color="blue"
        />
      </div>
    </div>
  );
};

export default PlatformSection;
