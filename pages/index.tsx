import React from "react";
import SponsorPage from '../../HackRPI-Website-2024/components/sponsors';

import "../app/globals.css";
import Link from "../components/link";

const Home = () => {
  return (
    <div>
      <h1 className="font-sans">Home</h1>
      <p>
        Welcome to HackRPI 2024! We are still in the process of building this
        website, so please check back later for more information.
      </p>
      <Link href="/sponsor-us">Sponsor Us</Link>

      {/* Include the SponsorPage component here */}
      <SponsorPage />
    </div>
  );
};

export default Home;