import React from 'react';
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
        image: maryellenImage,
        avatar: maryellenAvatar,
      },
      {
        name: 'Raven Levitt',
        role: 'Vice President',
        image: ravenImage,
        avatar: ravenAvatar,
      },
      {
        name: 'John Kloepfer',
        role: 'Director of Technology',
        image: johnImage,
        avatar: johnAvatar,
      },
    ];
  
    const teamMembersSecondRow = [
      {
        name: 'Xenia Khusid',
        role: 'Director of Logistics',
        image: xeniaImage,
        avatar: xeniaAvatar,
      },
      {
        name: 'Adwait Naware',
        role: 'Director of Finance',
        image: adwaitImage,
        avatar: adwaitAvatar,
      },
      {
        name: 'Sanay Tralshawala',
        role: 'Director of Sponsorship',
        image: sanayImage,
        avatar: sanayAvatar,
      },
      {
        name: 'Miranda Zheng',
        role: 'Director of Marketing',
        image: mirandaImage,
        avatar: mirandaAvatar,
      },
    ];
  
    const jrTeamMembersFirstRow = [
      {
        name: 'CJ Marino',
        role: 'Junior Director of Logistics',
        image: cjImage,
      },
      {
        name: 'Grace Hui',
        role: 'Junior Director of Finance',
        image: graceImage,
      },
    ];
  
    const jrTeamMembersSecondRow = [
      {
        name: 'Heman Kolla',
        role: 'Junior Director of Sponsorship',
        image: hemanImage,
      },
      {
        name: 'Amanda Ruan',
        role: 'Junior Director of Marketing',
        image: amandaImage,
      },
      {
        name: 'Cooper Werner',
        role: 'Junior Director of Technology',
        image: cooperImage,
      },
    ];
  
    return (
      <div id="members" className="MeetTheTeamPage centeredText">
        <h1 id="meet-our-team-header" className="font-Mokoto text-5xl mb-10">
          Meet Our Team!
        </h1>
  
        <div className="team-members w-1100 mx-auto">
          <h1 className="director-jrDirector-header font-Mokoto text-3xl mb-8">
            Meet The Directors
            <p className="text-sm italic">Avatars by Lilu Kaufman</p>
          </h1>
  
          <div className="grid grid-cols-3 gap-4">
            {/* Directors */}
            {teamMembersFirstRow.map((member, index) => (
              <div key={index} className="director-div">
                <div className="flex justify-center items-center">
                  <img className="director-img" src={member.image} alt={member.name}/>
                  <img className="director-avatar" src={member.avatar} alt={member.name}/>
                </div>
                <div className="director-name-div">
                  <h2 className="name">{member.name}</h2>
                  <p className="position">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-3 gap-4">
            {/* Directors */}
            {teamMembersSecondRow.map((member, index) => (
              <div key={index} className="director-div">
                <div className="flex justify-center items-center">
                  <img className="director-img" src={member.image} alt={member.name}/>
                  <img className="director-avatar" src={member.avatar} alt={member.name}/>
                </div>
                <div className="director-name-div">
                  <h2 className="name">{member.name}</h2>
                  <p className="position">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Jr Directors */}
          <h1 className="director-jrDirector-header mt-10 font-Mokoto text-2xl">
            Meet the Junior Directors
          </h1>
  
          <div className="grid grid-cols-2 gap-4">
            {/* Jr Directors */}
            {jrTeamMembersFirstRow.map((member, index) => (
              <div key={index} className="director-div">
                <div className="flex justify-center items-center">
                  <img className="director-img" src={member.image} alt={member.name}/>
                </div>
                <div className="director-name-div">
                  <h2 className="name">{member.name}</h2>
                  <p className="position junior">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-3 gap-4">
            {/* Jr Directors */}
            {jrTeamMembersSecondRow.map((member, index) => (
              <div key={index} className="director-div">
                <div className="flex justify-center items-center">
                  <img className="director-img" src={member.image} alt={member.name}/>
                </div>
                <div className="director-name-div">
                  <h2 className="name">{member.name}</h2>
                  <p className="position junior">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Tab content and buttons */}
          <p className="text-2xl font-bold mt-8 mb-4">
            Want to Help?
          </p>
  
          <div className="flex justify-center">
            <a href="https://forms.gle/VY1vXF1mPMgx82wdA" className="btn btn-outline btn-primary mr-4">
              Mentor Application
            </a>
            <a href="https://forms.gle/kEpdKKKrFsSUQztR6" className="btn btn-outline btn-primary">
              Volunteer Application
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default MeetTheTeamPage;
