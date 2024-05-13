"use client";

import React, { useEffect, useState } from "react";
import HackRPILink from "../themed-components/hackrpi-link";
import { team } from "../../data/members";
import Image from "next/image";

export default function TeamComponent() {
	const [directorsAnim, setDirectorsAnim] = useState({
		directors: team.directors,
		offset: 0,
		hover: false,
	});
	const [organizers, setOrganizers] = useState(team.organizers);

	const DIRECTOR_DX_PERCENT = 0.5;

	const moveDirectors = () => {
		setDirectorsAnim((prev) => {
			if (prev.hover) return prev;
			if (prev.offset <= -110) {
				return { directors: [...prev.directors.slice(1), prev.directors[0]], offset: 5, hover: prev.hover };
			}
			return { directors: prev.directors, offset: prev.offset - DIRECTOR_DX_PERCENT, hover: prev.hover };
		});
	};

	const animate_directors = () => {
		moveDirectors();
		requestAnimationFrame(animate_directors);
	};

	useEffect(() => {
		const animID = requestAnimationFrame(animate_directors);
		return () => {
			cancelAnimationFrame(animID);
		};
	}, []);

	return (
		<div className="w-full flex items-center justify-center mb-4">
			<div id="team" className="flex w-full desktop:w-2/3 flex-col items-start justify-start">
				<h1 className="text-4xl text-white font-bold ">Meet the Team</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi vitae eligendi aspernatur laboriosam
					consectetur perspiciatis ipsa harum accusantium itaque error. Nisi, voluptatibus quod! Cupiditate, molestiae.
					Quas laboriosam optio nostrum explicabo.
				</p>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full my-4">
					<HackRPILink className="w-60 text-center" href="https://discord.gg/Pzmdt7FYnu">
						Join our Organizing Team!
					</HackRPILink>
					<HackRPILink className="w-60 text-center" href="https://forms.gle/">
						Help Mentor!
					</HackRPILink>
					<HackRPILink className="w-60 text-center" href="https://forms.gle/">
						Volunteer!
					</HackRPILink>
				</div>
				<h2 className="text-2xl font-bold text-white">Our Executive Board</h2>
				<div
					className="w-full h-fit overflow-hidden flex text-nowrap py-12"
					onMouseEnter={() => {
						setDirectorsAnim((prev) => {
							return { directors: prev.directors, offset: prev.offset, hover: true };
						});
					}}
					onMouseLeave={() => {
						setDirectorsAnim((prev) => {
							return { directors: prev.directors, offset: prev.offset, hover: false };
						});
					}}
				>
					{directorsAnim.directors.map((director) => {
						const [hovered, setHovered] = useState(false);

						return (
							<div
								key={director.name}
								className="w-[200px] flex-shrink-0 mr-8 flex items-center justify-center flex-col"
								style={{ transform: `translate(${directorsAnim.offset}%, 0%)` }}
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
							>
								{!hovered && (
									<Image
										src={director.image}
										alt={director.name}
										height={200}
										width={200}
										className="w-[200px] h-[200px] rounded-full"
									/>
								)}

								{hovered && (
									<div
										className="w-[200px] h-[200px] rounded-full flex items-center justify-center whitespace-pre-wrap"
										style={{ backgroundColor: director["team-color"].bg }}
									>
										<p className="w-11/12 h-fit rounded-full text-sm text-center">{director.teamDescription}</p>
									</div>
								)}

								<div
									className={`my-2 w-full rounded-full flex items-center justify-center flex-col`}
									style={{ backgroundColor: director["team-color"].bg, color: director["team-color"].text }}
								>
									<h3 className="text-xl font-bold">{director.name}</h3>
									<p className="">{director.role}</p>
								</div>
							</div>
						);
					})}
				</div>
				<h2 className="text-2xl font-bold text-white">Thank You to All of our Organizers</h2>
				<div></div>
			</div>
		</div>
	);
}
