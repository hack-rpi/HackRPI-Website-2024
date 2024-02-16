import React, { useState } from 'react';
import '../app/globals.css'; // Global styles location for tailwind css

const faqs = [
  { title: 'What is HackRPI?', 
    content:
      'HackRPI is a 24 hour coding event where hackers will work in teams of 1 to 4 people to create projects based around the theme to win epic prizes thanks to our sponsors!',
  },
  { title: 'When is HackRPI X?',
    content:
      "November 4th-5th 2024, is the date for our 11th annual HackRPI. Arrival and check-in will take place from 10-11am with the opening ceremony beginning at 11am. The event will end at 4pm on Sunday, November 5th. We're really excited to celebrate the 10th year of our incredible event with YOU! Save the date!",
  },
  { title: 'Is it free to attend?',
    content:
      'Yes! Thanks to our many wonderful sponsors, HackRPI is free, as is all the swag, food, and snacks you can get!',
  },
  { title: 'How do I apply?',
    content: 'Click the link above to apply!', //fix this or provide the direct link
  },
  { title: 'Who can participate?',
    content:
      "Anyone with any skill level! Whether you're an experienced hackathon veteran, or if you've never coded before, our hackathon is for you! With our team of mentors ready to assist you with whatever direction you're taking your project, HackRPI is the place you should go to grow and test your technical skills!",
  },
  { title: 'Do I have to be an RPI student?',
    content:
      "No! You don't have to be an RPI student to participate! Students from other colleges are welcome and any recent college graduates!",
  },
  { title: 'Who else will be there?',
    content: 'Not only can you meet other RPI students and people from other colleges, but we’ve got wonderful sponsors who make this event possible! You’ll have the opportunity to talk to representatives from a variety of tech companies at career-fair style tables.'
  },
  { title: 'Does HackRPI provide travel reimbursement?',
    content: 'We are unable to provide travel reimbursement at this time, but are happy to offer advice for nearby and affordable transportation options.',
  },
];

const FAQPage = () => {
    return (
        <div className="h-auto mb-8 flex flex-col items-center text-white bg-gradient-to-r from-[#74b7ef] to-[#264e33]" id="faq"> 
            <h1 className="font-mokoto font-normal text-white text-center text-3xl text-shadow-md pb-10">
                FAQs
            </h1>
            <div className="w-full md:w-1/2 lg:w-1/3 mx-auto"> 
                {faqs.map((faq, index) => (

                    // controls the accordion size p-4 controls the padding while mb-4 creates space between each accordion 
                    <div key={index} className="collapse bg-base-200 p-4 mb-4">
                        <input type="radio" name="my-accordion-1" defaultChecked={index === 0} /> 
                        <div className="collapse-title text-xl font-medium">
                            {faq.title}
                        </div>
                        <div className="collapse-content"> 
                            <p>{faq.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 id='sponsors' className="font-poppins text-lg text-center pt-20">
                Feel free to contact us with any other questions at{' '}
                <a href='mailto:hackrpi@rpi.edu' className="text-blue-500">hackrpi@rpi.edu!</a>
            </h2>
        </div>
    );
};

export default FAQPage;

