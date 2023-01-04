import React from 'react';
import Layout from '../hoc/Layout';
import FreeTrialForm from '../components/Landing/FreeTrialForm';
import landingImage from '../assets/images/landing-image.jpg';
import avatar from '../assets/images/avatar.png';
import DealsSection from '../components/Landing/DealsSection';
import DocumentsSection from '../components/Landing/DocumentsSection';
import Review from '../components/Landing/Review';
import reviews from '../data/reviews';
import PlatformSection from '../components/Landing/PlatformSection';
import { Bath, Bed, Sofa } from 'tabler-icons-react';

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse border-b lg:border-b-0 lg:flex-row bg-gray-50">
        <div className="flex-1">
          <FreeTrialForm />
        </div>
        <div className="flex-1">
          <div className="relative z-0">
            <img src={landingImage} alt="" className="object-fill bg-blend-darken" />
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="flex items-start">
                <img src={avatar} alt="" />
                <div className="mx-3">
                  <div className="bg-white p-4 rounded-md text-xs mb-2 pr-10 italic font-medium">
                    Hi, I am Interested for an Apartment <br />
                    in Upper East Side
                  </div>
                  <div className="bg-white p-4 rounded-md text-xs">
                    <span className="font-medium">to have:</span>
                    <ul className="mt-3">
                      <li className="flex items-center mb-1">
                        <Sofa className="h-5" />
                        <b className="mr-1">1</b> Living Room
                      </li>
                      <li className="flex items-center mb-1">
                        <Bed className="h-5" />
                        <b className="mr-1">1</b> Bedroom
                      </li>
                      <li className="flex items-center mb-1">
                        <Bath className="h-5" />
                        <b className="mr-1">1</b> Bathroom
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DealsSection />
      <DocumentsSection />
      <div className="bg-[#3057A3] text-white flex flex-col lg:flex-row items-center">
        {reviews.map(({ text, reviewer, logo }, index) => (
          <div key={index}>
            <Review logo={logo} text={text} reviewer={reviewer} />
          </div>
        ))}
      </div>
      <PlatformSection />
    </Layout>
  );
};

export default LandingPage;
