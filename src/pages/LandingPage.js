import React from 'react';
import Layout from '../hoc/Layout';
import FreeTrialForm from '../components/Landing/FreeTrialForm';
import landingImage from '../assets/images/landing-image.jpg';
import DealsSection from '../components/Landing/DealsSection';
import DocumentsSection from '../components/Landing/DocumentsSection';
import Review from '../components/Landing/Review';
import reviews from '../data/reviews';
import { FileUpload } from 'tabler-icons-react';

const Functionality = ({ title, icon, text }) => {
  return (
    <div className="w-1/4">
      {icon}
      <h3 className="font-medium text-base">{title}</h3>
      <p className="text-sm text-gray-500 my-1">{text}</p>
    </div>
  );
};

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex bg-gray-50">
        <div className="flex-1">
          <FreeTrialForm />
        </div>
        <div className="flex-1">
          <img src={landingImage} alt="" className="object-fill bg-blend-darken" />
        </div>
      </div>
      <DealsSection />
      <DocumentsSection />
      <div className="bg-[#3057A3] text-white flex items-center">
        {reviews.map(({ text, reviewer, index }) => (
          <Review key={index} text={text} reviewer={reviewer} />
        ))}
      </div>
      <div className="bg-white shadow flex flex-col items-center py-10">
        <h3 className="font-bold text-2xl">All-in-One Platform</h3>
        <p className="w-1/3 text-sm text-gray-500 mt-2 mb-5 text-center">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
          sagittis vel nulla nec.
        </p>
        <div className="flex flex-wrap">
          <Functionality
            title="Import CSV"
            icon={
              <div className="w-12 bg-orange-100 text-orange-500 p-3 rounded-md mr-5">
                <FileUpload />
              </div>
            }
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          />
          <Functionality
            title="Drive Campaigns"
            icon={
              <div className="w-12 bg-orange-100 text-orange-500 p-3 rounded-md mr-5">
                <FileUpload />
              </div>
            }
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          />
          <Functionality
            title="Import CSV"
            icon={<FileUpload />}
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          />
          <Functionality
            title="Import CSV"
            icon={<FileUpload />}
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
            lobortis."
          />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
