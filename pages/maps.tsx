import React, { useState } from 'react';
import DCC from './maps_img/DCC.png';
import LOW from './maps_img/LOW.png';

const MapsPage = () => {
  const [showDCC, setShowDCC] = useState(false);
  const [showLOW, setShowLOW] = useState(false);

  return (
    <div id="about" className="MapsPage text-center w-80 mx-auto">
      <h1 className="title font-Mokoto text-5xl py-8">MAPS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="px-4">
          <h2 className="text-xl font-semibold mb-4">Darrin Communications Center</h2>
          <button onClick={() => setShowDCC(true)}>
            Show DCC Map
          </button>
          {showDCC && (
            <img
              src={DCC.src}
              alt="DCC Image"
              className="img-fluid mx-auto"
              style={{ maxWidth: '100%' }}
            />
          )}
        </div>
        <div className="px-4">
          <h2 className="text-xl font-semibold mb-4">Low Center for Industrial Innovation</h2>
          <button onClick={() => setShowLOW(true)}>
            Show LOW Map
          </button>
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
    </div>
  );
};

export default MapsPage;
