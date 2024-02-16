import React, { useState } from 'react';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('one');

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <div id="about" className="text-center w-90 mx-auto mt-8">
      <h1 className="text-hackrpi-primary-blue text-5xl mb-4">HackRPI 11</h1>
      <div className="p-4">
        <button
          className={`btn ${activeTab === 'one' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleTabClick('one')}
        >
          the event
        </button>
        <button
          className={`btn ${activeTab === 'two' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleTabClick('two')}
        >
          the team
        </button>
      </div>

      <div className="flex justify-center">
        <div className={`text-center mx-auto border text-hackrpi-secondary-grey ${activeTab === 'one' ? 'block' : 'hidden'}`} style={{width: "60%", minWidth: "300px"}}>
          <h2>The Event</h2>
          <p>
            HackRPI 11 is the 11th annual intercollegiate hackathon hosted by RPI for students not only from RPI but also from all around the
            world. Get swag and free food as you compete for exciting prizes! With a broad range of workshops and mentors on-site, there’s no
            experience necessary to attend. Hackers will also have the opportunity to network with our fantastic sponsors from the
            companies that make our event possible. This year's theme,{' '}
            <span className="font-bold text-hackrpi-primary-blue">Urban Upgrade</span> is an ode to a decade inspiring students and HackRPI!
            <br /><br />Come join us this coming TBD to hack, learn, and meet other people!
          </p>
        </div>
        <div className={`mx-auto px-4 border text-hackrpi-secondary-grey ${activeTab === 'two' ? 'block' : 'hidden'}`} style={{width: "60%", minWidth: "300px"}}>
          <h2>The Team</h2>
          <p>
            We are a motivated team of RPI students who share a passion for exploring the bounds of computer science and a commitment to
            organizing a fantastic event. Our team of students from every grade level works together to plan the hackathon and find sponsors
            to bring the event together.
            <br /><br />
            We believe that HackRPI is a vital part of our school. Our goal is to inspire and challenge innovators, creators, developers, and
            entrepreneurs in New York’s Tech Valley and beyond. We help attendees develop their skills, explore new technologies, and turn
            their interests and visions into opportunities. Staying true to our slogan “Why Not Code the World?"
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="rounded-full bg-blue-500 text-white flex justify-center items-center w-24 h-24 mr-4"> {/* Increased width and height */}
          <div className="about-info">
            <h2>DATE</h2>
            <p>TBD</p>
          </div>
        </div>

        <div className="rounded-full bg-blue-500 text-white flex justify-center items-center w-100 h-100 mr-4"> {/* Increased width and height */}
          <div className="about-info">
            <h2>LOCATION</h2>
            <p>
              Rensselear Polytechnic Institute (RPI), NY <br />
              Darrin Communications Center
            </p>
          </div>
        </div>

        <div>
          <a href="https://organize.mlh.io/participants/events/9892-hackrpi">
            <div className="rounded-full bg-blue-500 text-white flex justify-center items-center w-24 h-24"> {/* Increased width and height */}
                Register Now!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
