import React, { useState } from 'react';
import "../app/globals.css";
import workshopMern from './../public/workshopPics/mern.png';
import workshopPassword from './../public/workshopPics/password.jpeg';
import workshopHacking from './../public/workshopPics/hacking.jpeg';
import workshopSafety from './../public/workshopPics/safety.jpeg';
import workshopDesign from './../public/workshopPics/design.jpeg';
import workshopAI from './../public/workshopPics/ai.jpeg';
import workshopAgile from './../public/workshopPics/agile.jpeg';
import workshopForge from './../public/workshopPics/forge.png';
import workshopMobdev from './../public/workshopPics/mobdev.png';
import workshopQuantum from './../public/workshopPics/quantum.png';
import workshopSemi from './../public/workshopPics/semi.jpeg';
import workshopTechstack from './../public/workshopPics/techstack.jpeg';

interface Workshop {
    title: string;
    time: string;
    location: string;
    speaker: string;
    pic: string;
    description: string;
}

    const workshops = [
        {
            title: 'Patient Safety 101',
            time: '12-12:30pm',
            location: 'DCC 318',
            speaker: 'Kathy Rauch',
            pic: workshopSafety.src,
            description: 'This workshop is designed for hackers interested in the Patient Safety Tech Prize. It will\
            give you background on patient safety as an urgent issue and will help inspire you to\
            spend your weekend hacking together a project that has the potential to save lives! \
            The team with the best tech-enabled solution will win $1000.'
        },

        {
          title: 'Intro to Tech Stacks',
          time: '12:30-1:30pm',
          location: 'DCC 308',
          speaker: 'Michael Anderson and Konstantin Kuzmin',
          pic: workshopTechstack.src,
          description: 'TBD'
        },
        
        {
            title: 'Intro to MERN Stack Web Dev Workshop',
            time: '1:30-2:30pm',
            location: 'DCC 308',
            speaker: 'Yash Kaul',
            pic: workshopMern.src,
            description: 'Gain hands-on experience with MongoDB—covering schema validation, client to database connection, and implementing API \
            controllers. Learn about Express: including routing, middleware, and error handling. Utilize React to quickly build \
            interactive applications with state management. Explore Node.js and Npm to manage package dependencies\
             and build/run/test your application easily.  This workshop aims to introduce the basics of MERN applications for use in the\
             hackathon and discuss potential considerations for real world use and deployment.'
        },

        {
          title: 'Mobile Dev Workshop',
          time: '1:30-2:30pm',
          location: 'DCC 318',
          speaker: 'Ryan Hickey',
          pic: workshopMobdev.src,
          description: "If you've ever wondered how those awesome apps on your phone are made, or if you've got an itch to create something fun and \
          innovative, the Mobile Dev Workshop is the perfect place to start! The main course of our workshop revolves around React and Flutter.  \
          These two powerful frameworks empower you to create fantastic, user-friendly, and visually stunning apps for both IOS and Android at  \
          once. We also will explore Google Firebase, a service that lets you effortlessly manage user data, authentication, and real-time updates.\
          With this software, you can quickly and effectively deploy fully functioning apps with minimal hardships. \
          But what's learning without doing? We've got an exciting coding activity for you! Get ready to roll up your \
          sleeves as you embark on a mini-project to create your mobile app. You'll apply everything you've \
          learned in a fun, hands-on session, and you might come up with the next big app idea!\
          No experience? No problem! This workshop is designed for beginners, and we will\
          be there every step of the way to help you get everything set up."
        },

        {
          title: "A beginner's Guide to Quantum Computing",
          time: '2:30-3:30pm',
          location: 'DCC 308',
          speaker: 'Brian Ingmanson',
          pic: workshopQuantum.src,
          description: 'How folks can run their first quantum circuit on a real quantum computer, and some of the quirks of quantum computing.'
        },

        {
          title: 'Agile Development Workshop',
          time: '3:30-4:30pm',
          location: 'DCC 324',
          speaker: 'John Sturman',
          pic: workshopAgile.src,
          description: 'Join John Sturman for a presentation about agile development and how to work in a development group for maximum productivity.\
          We will explore Scrum and iterative development doing a fun simulation exercise to give you some hands-on experience. \
          This is a good workshop to support you in working in a group creating a project efficiently and effectively.'
      },

      {
        title: 'Hacking the machine for fun (and sometimes profit)',
        time: '4:30-5:30pm',
        location: 'DCC 318',
        speaker: ' Dr. Brian Callahan (w/ Ayah Tharwat )',
        pic: workshopHacking.src,
        description: 'Securing software requires developers to learn how to think like an attacker; you cannot defend against what you cannot\
        imagine going  wrong with your software. There are a wide variety of potential attacks, but \
        learning just a basic few can go a very long way towards improving your coding skills. In this workshop, we will participate in a \
        set of interactive Capture the Flag (CTF) challenges designed to demonstrate some of the \
        ways attackers think. Alongside hacking our machines, we will also learn some secure coding paradigms \
        to protect against these attacks. By the end of the workshop, you will have a newfound appreciation for the importance \
        of secure coding and be armed with the ability to build more secure software.'
    },

    {
      title: 'Design Thinking for Technical Innovation',
      time: '4:30-5:30pm',
      location: 'DCC 308',
      speaker: 'Kylinn Askew',
      pic: workshopDesign.src,
      description: 'Explore the power of design thinking to drive innovation and foster collaboration to build\
      strong technical products and startups. Learn how to harness creative problem-solving,\
      empathetic user-centric approaches, and cross-functional teamwork to create products\
      that not only meet technical requirements but also exceed user expectations'
    },

    {
        title: 'Password Exploitation - FBI Albany',
        time: '5:30-6:30pm',
        location: 'DCC 318',
        speaker: 'Alex Vargas and Ryan Gallagher',
        pic: workshopPassword.src,
        description: 'Join the FBI as they explain the math behind password complexity, including tactics for how to attack and\
        break passwords. They will cover steps on how to extract a password hash from a file and run it with \
        hashcat to crack the password. '
    },

    {
      title: 'Semiconductor Industry Overview',
      time: '5:30-6:30pm',
      location: 'DCC 324',
      speaker: 'Alexander Martin',
      pic: workshopSemi.src,
      description: 'Software needs hardware to operate. The last several years has seen a fundamental shift in the\
      Semiconductor Supply Chain. We will provide an overview of the Semiconductor Industry and the role of Global \
      Foundries in that ecosystem.'
  },

    {
        title: 'AI made easy with Hugging Face',
        time: '6:30-7:30pm',
        location: 'DCC 324',
        speaker: 'Raven Levitt',
        pic: workshopAI.src,
        description: 'Have a hack that needs AI but no idea where to start? In this workshop I’ll go over how to use the\
        Hugging Face API to easily leverage thousands of different machine learning models to tackle whatever\
          challenge you’re dealing with, be it text-generation, object detection, or just about any other machine \
        learning challenge, hugging face is a great place to start! After a short presentation we’ll hold a mini \
        competition for the best use of the API, and there just might be prizes…'
    },

      {
        title: 'Sticker Workshop with The Forge',
        time: '7:30-8:30',
        location: 'Forge',
        speaker: 'Mikiel Gica, Saad Mujahid, and Julia Kapchynsky',
        pic: workshopForge.src,
        description: 'The Forge will be open to anyone interested in designing and creating their\
        own contour-cut vinyl stickers. We will be holding a workshop on using free\
        design software to prepare designs for our Roland BN-20A, and \
       afterwards, we will help you print your designs for free! Bringing a laptop\
        and a few images you want to turn into stickers is strongly recommended \
       to be able to follow along and participate.'
    },

];


const WorkshopPage = () => {
    const [show, setShow] = useState(false);
    const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

    const handleShow = (workshop: Workshop) => {
        setSelectedWorkshop(workshop);
        setShow(true);
    };

    const handleClose = () => {
        setSelectedWorkshop(null);
        setShow(false);
    };

    return (
        <div id="workshops" className="WorkshopPage text-center max-w-screen-xlg mx-auto px-6">
            <h1 className="font-Mokoto text-6xl mb-10">Checkout our Workshops!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {workshops.map((workshop, index) => (
                    <div key={index} className="mb-8">
                        <div className="cursor-pointer" onClick={() => handleShow(workshop)}>
                            <div className="group">
                                <div className="workshop-container rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                                    <img
                                        src={workshop.pic}
                                        className="rounded-t-lg h-48 object-cover mx-auto"
                                        alt="workshop"
                                    />
                                    <div className="bg-transparent p-4">
                                        <h2 className="text-white">{workshop.title}</h2>
                                        <p className="text-sm"><span className="text-red font-bold">Time:</span> {workshop.time}</p>
                                        <p className="text-sm"><span className="text-red font-bold">Location:</span> {workshop.location}</p>
                                        <p className="text-sm"><span className="text-red font-bold">Speaker:</span> {workshop.speaker}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedWorkshop && (
                <div>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="bg-white p-8 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">{selectedWorkshop.title}</h2>
                            <p><strong className="text-red font-bold">Time:</strong> {selectedWorkshop.time}</p>
                            <p><strong className="text-red font-bold">Location:</strong> {selectedWorkshop.location}</p>
                            <p><strong className="text-red font-bold">Speaker:</strong> {selectedWorkshop.speaker}</p>
                            <p>{selectedWorkshop.description}</p>
                            <button className="bg-red text-white px-4 py-2 mt-4" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkshopPage;