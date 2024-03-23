import React from 'react';
import Link from 'next/link';
import "../app/globals.css";

function SponsorUsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col items-center"> {/* New flex container */}
        <h1 className="text-4xl font-bold mb-4">Interested in sponsoring?</h1>
        <h3 className="text-2xl font-bold mb-4">Sponsor Us!</h3>
      </div>
      <h2 className="mb-4">
        <Link href="https://tinyurl.com/hackrpi-donation">
          <span className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
            Donate
          </span>
        </Link>
      </h2>
      <h3 className="text-2xl font-bold mb-4">Want to support?</h3>
      <div className="flex flex-wrap justify-center">  {/* Main container */}
        <div className="w-full lg:w-1/2 p-2">  {/* Left section, reduced padding and increased width */}
          <iframe
            className="w-full h-auto lg:h-[50vh]" 
            src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 p-2">  {/* Right section, reduced padding and increased width */}
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
