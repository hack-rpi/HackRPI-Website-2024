import React from 'react';
import 'daisyui/dist/full.css'; // Import Daisy UI CSS
import maryellenImage from './../public/TeamPics/mel image.jpeg';
import ravenImage from './../public/TeamPics/raven image.jpg';
import xeniaImage from './../public/TeamPics/xenia image.jpg';
import adwaitImage from './../public/TeamPics/adwait image.jpg';
import sanayImage from './../public/TeamPics/sanay image.png';
import mirandaImage from './../public/TeamPics/miranda image.jpg';
import johnImage from './../public/TeamPics/john image.jpg';
import maryellenAvatar from './../public/TeamAvatars/Maryellen.png';
import ravenAvatar from './../public/TeamAvatars/Raven.png';
import xeniaAvatar from './../public/TeamAvatars/Xenia.png';
import adwaitAvatar from './../public/TeamAvatars/Adwait.png';
import sanayAvatar from './../public/TeamAvatars/Sanay.png';
import mirandaAvatar from './../public/TeamAvatars/Miranda.png';
import johnAvatar from './../public/TeamAvatars/John.png';
import cjImage from './../public/TeamPics/cj image.jpg';
import graceImage from './../public/TeamPics/grace image.jpg';
import hemanImage from './../public/TeamPics/heman image.jpg';
import amandaImage from './../public/TeamPics/amanda image.jpeg';
import cooperImage from './../public/TeamPics/cooper image.jpg';

const MeetTheTeamPage = () => {
  const teamMembersFirstRow = [
    {
      name: 'Maryellen Marino',
      role: 'President',
      image: maryellenImage.src,
      avatar: maryellenAvatar.src,
    },
    {
      name: 'Raven Levitt',
      role: 'Vice President',
      image: ravenImage.src,
      avatar: ravenAvatar.src,
    },
    {
      name: 'John Kloepfer',
      role: 'Director of Technology',
      image: johnImage.src,
      avatar: johnAvatar.src,
    },
  ];

  const teamMembersSecondRow = [
    {
      name: 'Xenia Khusid',
      role: 'Director of Logistics',
      image: xeniaImage.src,
      avatar: xeniaAvatar.src,
    },
    {
      name: 'Adwait Naware',
      role: 'Director of Finance',
      image: adwaitImage.src,
      avatar: adwaitAvatar.src,
    },
    {
      name: 'Sanay Tralshawala',
      role: 'Director of Sponsorship',
      image: sanayImage.src,
      avatar: sanayAvatar.src,
    },
    {
      name: 'Miranda Zheng',
      role: 'Director of Marketing',
      image: mirandaImage.src,
      avatar: mirandaAvatar.src,
    },
  ];

  const jrTeamMembersFirstRow = [
    {
      name: 'CJ Marino',
      role: 'Junior Director of Logistics',
      image: cjImage.src,
    },
    {
      name: 'Grace Hui',
      role: 'Junior Director of Finance',
      image: graceImage.src,
    },
  ];

  const jrTeamMembersSecondRow = [
    {
      name: 'Heman Kolla',
      role: 'Junior Director of Sponsorship',
      image: hemanImage.src,
    },
    {
      name: 'Amanda Ruan',
      role: 'Junior Director of Marketing',
      image: amandaImage.src,
    },
    {
      name: 'Cooper Werner',
      role: 'Junior Director of Technology',
      image: cooperImage.src,
    },
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-4">Team Members First Row</h2>
      <div className="flex flex-row justify-center"> {/* Wrapped with justify-center */}
        {teamMembersFirstRow.map((member, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center mx-4 mb-4">
            <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded-full" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Team Members Second Row</h2>
      <div className="flex flex-wrap justify-center"> {/* Wrapped with justify-center */}
        {teamMembersSecondRow.map((member, index) => (
          <div key={index} className="px-4 mb-8 text-center">
            <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded-full" style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '8px' }} />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
  
      <h2 className="text-2xl font-bold mt-8 text-center mb-4">Junior Team Members First Row</h2>
      <div className="flex flex-wrap justify-center"> {/* Wrapped with justify-center */}
        {jrTeamMembersFirstRow.map((member, index) => (
          <div key={index} className="px-4 mb-8 text-center">
            <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded-full" style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '8px' }} />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
  
      <h2 className="text-2xl font-bold mt-8 text-center mb-4">Junior Team Members Second Row</h2>
      <div className="flex flex-wrap justify-center"> {/* Wrapped with justify-center */}
        {jrTeamMembersSecondRow.map((member, index) => (
          <div key={index} className="px-4 mb-8 text-center">
            <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded-full" style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '8px' }} />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default MeetTheTeamPage;
