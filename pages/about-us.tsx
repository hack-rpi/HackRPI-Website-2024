import React, { useState } from 'react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('one');

  const handleTabClick = (tabKey: React.SetStateAction<string>) => {
    setActiveTab(tabKey);
  };

  return (
    <div id="about" className="text-center w-80 mx-auto">
      <h1 className="font- text-5xl mt-8 mb-4">HackRPI 11</h1>
      <div className="p-4">
        <button
          className={`button ${activeTab === 'one' ? '#74b7ef #264e33' : 'bg-red-700 text-white'}`}
          onClick={() => handleTabClick('one')}
        >
          the event
        </button>
        <button
          className={`button ${activeTab === 'two' ? 'bg-white text-black' : 'bg-red-700 text-white'}`}
          onClick={() => handleTabClick('two')}
        >
          the team
        </button>
      </div>

      <div className="text-left">
        {activeTab === 'one' ? (
          <p>
            HackRPI 11 is the 11th annual intercollegiate hackathon hosted by RPI for students not only from RPI but also from all around the
            world. Get swag and free food as you compete for exciting prizes! With a broad range of workshops and mentors on-site, there’s no
            experience necessary to attend. Hackers will also have the opportunity to network with our fantastic sponsors from the
            companies that make our event possible. This year's theme,{' '}
            <span className="font-bold text-white">Urban Planning</span> is an ode to a decade inspiring students and HackRPI!
            <br /><br />Come join us this coming TBD to hack, learn, and meet other people!
          </p>
        ) : (
          <p>
            We are a motivated team of RPI students who share a passion for exploring the bounds of computer science and a commitment to
            organizing a fantastic event. Our team of students from every grade level works together to plan the hackathon and find sponsors
            to bring the event together.
            <br /><br />
            We believe that HackRPI is a vital part of our school. Our goal is to inspire and challenge innovators, creators, developers, and
            entrepreneurs in New York’s Tech Valley and beyond. We help attendees develop their skills, explore new technologies, and turn
            their interests and visions into opportunities. Staying true to our slogan “Why Not Code the World?"
          </p>
        )}
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="circle"></div>
        <div className="about-info">
          <h2>DATE</h2>
          <p>TBD</p>
        </div>

        <div className="circle"></div>
        <div className="about-info">
          <h2>LOCATION</h2>
          <p>
            Rensselear Polytechnic Institute (RPI), NY <br />
            Darrin Communications Center
          </p>
        </div>

        <div>
          <a href="https://organize.mlh.io/participants/events/9892-hackrpi">
            <button
              className="button bg-red-700 text-white"
            >
              Register Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
