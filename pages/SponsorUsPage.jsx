import React from 'react';
import { Link } from 'react-router-dom';
import "../app/globals.css";
import Head from "next/head";


function SponsorUsPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Sponsor Us!</h1>
      <h2 className="mb-4">
        <Link
          className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          to="https://tinyurl.com/hackrpi-donation"
        >
          Donate
        </Link>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-4">Want to support?</h3>
          <iframe
            className="w-full"
            src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          {/* Rest of your code... */}
        </div>
      </div>
    </div>
  );
}

export default SponsorUsPage;