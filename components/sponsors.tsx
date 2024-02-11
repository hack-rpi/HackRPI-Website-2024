import React, { useState } from 'react';
import sponsorsJson from '../../HackRPI-Website-2024/public/sponsors/sponsors.json';

const SponsorPage = () => {
  const [sponsorGroups] = useState(sponsorsJson);

  return (
    <>
      <div className="flex flex-col w-full justify-start items-center bg-gradient-to-b from-black via-hackrpi-primary-blue to-black">
        <h2 className="my-5 text-white font-helvetica text-center text-2xl">
          Thank you to our sponsors that make HackRPI possible!
        </h2>

        {sponsorGroups.sponsorGroups.map((sponsorGroup, indx) => {
          const tierList = [
            'Obsidian',
            'Gold',
            'Silver',
            'Bronze',
            'Collaborators',
          ];
          return (
            <div className="container" key={'sponsorGroup' + indx}>
              <h3 className="font-helvetica text-xl tierHeader mb-5 border-b-2 border-white pb-2 relative cursor-pointer group">
                <span className="transition-all duration-250 group-hover:font-bold group-hover:text-light-blue-500">
                  {tierList[indx]}
                </span>
              </h3>
              <div className="flex justify-center flex-wrap">
                {tierList[indx] === 'Obsidian'
                  ? sponsorGroup
                      .slice()
                      .reverse()
                      .map((sponsor, innerIndx) => {
                        let img;
                        if (sponsor.webpack_bundled === true) {
                          img = require(`../../HackRPI-Website-2024/public/sponsors/sponsor_logos/${sponsor.logoPath}`);
                        }

                        return (
                          <div
                            className="sponsor col-md-3 flex mb-5"
                            key={'sponsorGroup' + indx + 'sponsor' + innerIndx}
                          >
                            <a
                              href={sponsor.url}
                              target="_blank"
                              className="rounded px-3"
                            >
                              <div
                                className="flex flex-col items-center justify-center innerSponsor m-10"
                                style={{ cursor: 'pointer' }} // Add cursor pointer
                              >
                                <img
                                  src={
                                    sponsor.webpack_bundled === true
                                      ? img
                                      : sponsor.logoPath
                                  }
                                  className="img-fluid rounded w-32 h-auto"
                                  alt={sponsor.name}
                                  style={{ transition: 'transform 0.3s ease' }} // Add transition
                                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Apply hover effect
                                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Remove hover effect
                                />
                              </div>
                            </a>
                          </div>
                        );
                      })
                  : sponsorGroup.map((sponsor, innerIndx) => {
                      let img;
                      if (sponsor.webpack_bundled === true) {
                        img = require(`../../HackRPI-Website-2024/public/sponsors/sponsor_logos/${sponsor.logoPath}`);
                      }

                      return (
                        <div
                          className="sponsor col-md-3 flex mb-5"
                          key={'sponsorGroup' + indx + 'sponsor' + innerIndx}
                        >
                          <a
                            href={sponsor.url}
                            target="_blank"
                            className="rounded px-3"
                          >
                            <div
                              className="flex flex-col items-center justify-center innerSponsor m-10"
                              style={{ cursor: 'pointer' }} // Add cursor pointer
                            >
                              <img
                                src={
                                  sponsor.webpack_bundled === true
                                    ? img
                                    : sponsor.logoPath
                                }
                                className="img-fluid rounded w-32 h-auto"
                                alt={sponsor.name}
                                style={{ transition: 'transform 0.3s ease' }} // Add transition
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Apply hover effect
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Remove hover effect
                              />
                            </div>
                          </a>
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SponsorPage;
