import React, { useState } from 'react';
import calendarImage from '../pages/about-us_images/calendar.png';
import locationImage from '../pages/about-us_images/location.png';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('one');

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <div id="about" className="text-center w-90 mx-auto mt-12 mb-8"> {/* Added margin-top and margin-bottom */}
      <h1 className="text-white text-5xl mb-4 font-serif">About Us</h1>
      
      <div className="flex justify-center">
        <div className={`text-left mx-auto text-hackrpi-secondary-grey ${activeTab === 'one' ? 'block' : 'hidden'}`} style={{width: "60%", minWidth: "300px"}}>
          <p>
            HackRPI 11 is the 11th annual intercollegiate hackathon hosted by RPI for students not only from RPI but also from all around the
            world. Get swag and free food as you compete for exciting prizes! With a broad range of workshops and mentors on-site, there’s no
            experience necessary to attend. Hackers will also have the opportunity to network with our fantastic sponsors from the
            companies that make our event possible. This year's theme,{' '}
            <span className="font-bold text-hackrpi-primary-blue">Urban Upgrade</span> is an ode to a decade inspiring students and HackRPI!
            <br /><br />Come join us this November 9-10, 2024 to hack, learn, and meet other people!
            We are a motivated team of RPI students who share a passion for exploring the bounds of computer science and a commitment to
            organizing a fantastic event. Our team of students from every grade level works together to plan the hackathon and find sponsors
            to bring the event together.
            <br /><br />
            We believe that HackRPI is a vital part of our school. Our goal is to inspire and challenge innovators, creators, developers, and
            entrepreneurs in New York’s Tech Valley and beyond. We help attendees develop their skills, explore new technologies, and turn
            their interests and visions into opportunities. Staying true to our slogan “Why Not Code the World?"
          </p>
          
          {/* Calendar and Location Images with Text */}
          <div className="flex items-center mt-4 justify-center">
            <div className="flex items-center mr-8"> 
              <img src={calendarImage.src} alt="Calendar" className="mr-2" />
              <span>November 9-10, 2024</span>
            </div>
            <div className="flex">
              <img src={locationImage.src} alt="Location" className="mr-2" />
              <span>Darrins Communications Center<br />Rensselaer Polytechnic Institute</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
