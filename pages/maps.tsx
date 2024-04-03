import React, { useState } from 'react';
import DCC from './maps_img/DCC.png';
import LOW from './maps_img/LOW.png';
import NavBar from "@/components/nav-bar/nav-bar";
import Head from "next/head";
import Footer from "@/components/footer";
import MlhBanner from "@/components/mlh-banner/mlh-banner";

const MapsPage = () => {
  const [showDCC, setShowDCC] = useState(true);
  const [showLOW, setShowLOW] = useState(false);

  const handleShowDCC = () => {
    setShowDCC(true);
    setShowLOW(false);
  };

  const handleShowLOW = () => {
    setShowDCC(false);
    setShowLOW(true);
  };

  return (
    <div>
      <Head>
        <title>Maps Page</title>
      </Head>
      <MlhBanner />
      <NavBar showOnScroll={false} />
      <div>
      <h1 className="title font-Mokoto text-5xl py-10"></h1>
      </div>
      <div id="about" className="MapsPage text-center mx-auto w-2/3">
        <h1 className="title font-bold font-sans-Mokoto text-hackrpi-secondary-grey text-7xl py-6">MAPS</h1>

        <div className="flex flex-col items-center space-y-1">
          <button onClick={handleShowDCC} className={`bg-hackrpi-secondary-light-blue hover:bg-hackrpi-primary-light-green text-hackrpi-secondary-grey font-bold font-sans-helvetica text-2xl py-6 px-24 rounded-full mb-2 ${showDCC ? 'bg-hackrpi-primary-dark-green border-hackrpi-secondary-grey border-4' : ''}`}>
            Darrin Communications Center
          </button>

          <button onClick={handleShowLOW} className={`bg-hackrpi-secondary-light-blue hover:bg-hackrpi-primary-light-green text-hackrpi-secondary-grey font-bold font-sans-helvetica text-2xl py-6 px-24 rounded-full mb-2 ${showLOW ? 'bg-hackrpi-primary-dark-green border-hackrpi-secondary-grey border-4' : ''}`}>
            Low Center for Industrial Innovation
          </button>
        </div>

        <div className="maps-container mt-4 mb-8">
          {showDCC && (
            <img
              src={DCC.src}
              alt="DCC Image"
              className="img-fluid mx-auto"
              style={{ maxWidth: '100%' }}
            />
          )}

          {showLOW && (
            <img
              src={LOW.src}
              alt="LOW Image"
              className="img-fluid mx-auto"
              style={{ maxWidth: '100%' }}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapsPage;