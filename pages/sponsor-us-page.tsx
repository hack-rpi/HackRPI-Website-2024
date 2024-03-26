import React from 'react';
import Link from 'next/link';
import "../app/globals.css";

function SponsorUsPage() {
  return (
    // main container
    <div className="flex flex-col items-center justify-center min-h-screen text-center w-5/6 mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-4xl font-bold mb-4">Sponsor Us!</h3>
        <Link 
          href="https://tinyurl.com/hackrpi-donation"
          className="btn btn-primary rounded-full bg-gradient-to-r from-red-700 to-red-500 border-none hover:from-red-800 hover:to-red-600 px-7 custom-btn-height"
        >
          Donate
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-full lg:w-1/2 p-2" style={{ marginRight: '20px' }}> {/* Left frame Adjusted for spacing */}
          <h1 className="text-2xl font-bold mb-4">Want to support?</h1>
          <iframe
            className="w-full h-auto lg:h-[50vh]" 
            src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2 p-2" style={{ marginLeft: '20px' }}> {/* Right Frame Adjusted for spacing */}
          <h3 className="text-2xl font-bold mb-4">Interested in sponsoring?</h3>
          <iframe
            className="w-full h-auto lg:h-[50vh]" 
            src="https://drive.google.com/file/d/17GguOFdq5aU5NuFXnHyLxxsXSzxryHQc/preview"
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SponsorUsPage;