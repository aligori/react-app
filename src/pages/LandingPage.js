import React from 'react';
import Layout from '../hoc/Layout';
import FreeTrialForm from '../components/Landing/FreeTrialForm';
import landingImage from '../assets/images/landing-image.jpg';
import DealsSection from '../components/Landing/DealsSection';
import DocumentsSection from '../components/Landing/DocumentsSection';
import Review from '../components/Landing/Review';
import reviews from '../data/reviews';
import PlatformSection from '../components/Landing/PlatformSection';

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse border-b lg:flex-row bg-gray-50">
        <div className="flex-1">
          <FreeTrialForm />
        </div>
        <div className="flex-1">
          <img src={landingImage} alt="" className="object-fill bg-blend-darken" />
        </div>
      </div>
      <DealsSection />
      <DocumentsSection />
      <div className="bg-[#3057A3] text-white flex flex-col lg:flex-row items-center">
        {reviews.map(({ text, reviewer }, index) => (
          <div key={index}>
            <Review text={text} reviewer={reviewer} />
          </div>
        ))}
      </div>
      <PlatformSection />
    </Layout>
  );
};

export default LandingPage;
