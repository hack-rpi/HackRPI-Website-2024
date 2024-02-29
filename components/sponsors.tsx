import React, { useState } from "react";
import sponsorsJson from "../../HackRPI-Website-2024/public/sponsors/sponsors.json";
import { SponsorsJSON, sponsorTiers } from "@/types/sponsorsType";
import NextImage from "next/image";

const SponsorPage = () => {
	const tierList: sponsorTiers[] = ["Obsidian", "Gold", "Silver", "Bronze", "Collaborators"];
	const [sponsors] = useState<SponsorsJSON>(sponsorsJson);

	return (
		<div className="flex flex-col w-full justify-start items-center bg-gradient-to-b from-hackrpi-secondary-dark-blue via-hackrpi-primary-blue to-hackrpi-secondary-dark-blue">
			<div className="w-3/4">
				<h2 className="pb-10 text-white font-sans font-bold text-center text-4xl">
					Thank you to our sponsors that make HackRPI possible!
				</h2>

				{tierList.map((tier) => {
					return (
						<div className="w-11/12">
							<h3 className="text-white font-sans font-semibold text-left text-4xl">{tier}</h3>
							<hr className="bg-white h-[1.5px]"></hr>
							<div className="flex flex-row flex-wrap justify-around items-center">
								{sponsors[tier].map((sponsor) => {
									return (
										<div
											key={sponsor.name}
											className="w-fit h-fit p-4 m-10 hover:scale-110 bg-black bg-opacity-0 hover:bg-opacity-15 rounded-md transition-all flex items-center justify-center mx-4"
										>
											<a href={sponsor.url} target="_blank" rel="noreferrer">
												<NextImage
													src={`/sponsors/sponsor_logos${sponsor.logoPath}`}
													alt={sponsor.name}
													width={250}
													height={250}
												/>
											</a>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SponsorPage;
