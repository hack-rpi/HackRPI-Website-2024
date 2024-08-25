import React, { useState } from "react";
import sponsorsJson from "@/public/sponsors/sponsors.json";
import { SponsorsJSON, sponsorTiers } from "@/types/sponsorsType";
import NextImage from "next/image";

const Sponsors = () => {
	const tierList: sponsorTiers[] = ["Obsidian", "Gold", "Silver", "Bronze", "Collaborators"];
	const [sponsors] = useState<SponsorsJSON>(sponsorsJson);

	return (
		<div className="flex flex-col w-full justify-center items-start desktop:items-center pl-8 desktop:pl-0 bg-gradient-to-b from-hackrpi-secondary-dark-blue via-hackrpi-primary-blue to-hackrpi-secondary-dark-blue py-8 ">
			<div className="w-11/12 desktop:w-2/3">
				<h2 className="pb-10 text-white font-sans font-bold text-left text-4xl">
					Thank you to our sponsors that make HackRPI possible!
				</h2>

				{tierList.map((tier) => {
					if (sponsors[tier].length === 0) return null;
					return (
						<div className="w-11/12" key={tier}>
							<h3 className="text-white font-sans font-semibold text-left text-4xl">{tier}</h3>
							<hr className="bg-white h-[1.5px]"></hr>
							<div className="flex flex-row flex-wrap justify-around items-center">
								{sponsors[tier].map((sponsor) => {
									return (
										<div
											key={sponsor.name}
											className="w-fit h-fit p-4 m-4 hover:scale-110 bg-black bg-opacity-0 hover:bg-opacity-15 rounded-md transition-all flex items-center justify-center mx-4"
										>
											<a href={sponsor.url} target="_blank" rel="noreferrer">
												<NextImage
													src={`/sponsors/sponsor_logos${sponsor.logoPath}`}
													alt={sponsor.name}
													width={250}
													height={250}
													className="rounded-md"
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

export default Sponsors;
