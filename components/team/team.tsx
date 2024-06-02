"use client";

import React, { useCallback, useEffect, useState } from "react";
import HackRPILink from "../themed-components/hackrpi-link";
import { Director, team, teamColors } from "../../data/members";
import Image from "next/image";

export default function TeamComponent() {
	const [directorsAnim, setDirectorsAnim] = useState({
		directors: team.directors,
		offset: 0,
		hover: false,
	});
	const [organizersAnim, setOrganizersAnim] = useState({
		organizers: team.organizers,
		offset: 0,
		hover: false,
	});

	const [teamTop, setTeamTop] = useState(0);
	const [highlightTeam, setHighlightTeam] = useState(false);

	const DIRECTOR_DX_PERCENT = 0.5;
	const ORGANIZER_DX_PERCENT = 1.25;

	const animate_directors = useCallback(() => {
		setDirectorsAnim((prev) => {
			if (prev.hover) return prev;
			if (prev.offset <= -110) {
				return { directors: [...prev.directors.slice(1), prev.directors[0]], offset: 5, hover: prev.hover };
			}
			return { directors: prev.directors, offset: prev.offset - DIRECTOR_DX_PERCENT, hover: prev.hover };
		});
		requestAnimationFrame(animate_directors);
	}, []);

	const animate_organizers = useCallback(() => {
		setOrganizersAnim((prev) => {
			if (prev.hover) return prev;
			if (prev.offset <= -105) {
				return { organizers: [...prev.organizers.slice(1), prev.organizers[0]], offset: 11.5, hover: prev.hover };
			}
			return { organizers: prev.organizers, offset: prev.offset - ORGANIZER_DX_PERCENT, hover: prev.hover };
		});
		requestAnimationFrame(animate_organizers);
	}, []);

	useEffect(() => {
		const animID = requestAnimationFrame(animate_directors);
		const animID2 = requestAnimationFrame(animate_organizers);

		// Highlight the team section in the navbar when the user scrolls to it
		let teamStart = (document.getElementById("team")?.offsetTop || window.innerHeight) - 140;
		let teamEnd = teamStart + (document.getElementById("team")?.offsetHeight || window.innerHeight);
		setTeamTop(teamStart + 140);

		// Update whether the team should be highlighted when the user scrolls
		const handleScroll = () => {
			setHighlightTeam(window.scrollY > teamStart && window.scrollY < teamEnd);
			teamStart = (document.getElementById("team")?.offsetTop || window.innerHeight) - 140;
			teamEnd = teamStart + (document.getElementById("team")?.offsetHeight || window.innerHeight);
			setTeamTop(teamStart + 140);
		};

		// Update the aboutStart and aboutEnd when the user resizes the window
		const handleResize = () => {
			teamStart = (document.getElementById("team")?.offsetTop || window.innerHeight) - 140;
			teamEnd = teamStart + (document.getElementById("team")?.offsetHeight || window.innerHeight);
			setTeamTop(teamStart + 140);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			cancelAnimationFrame(animID);
			cancelAnimationFrame(animID2);

			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [animate_directors, animate_organizers]);

	return (
		<div className="w-full flex items-center justify-center mb-4">
			<div
				className={`${
					highlightTeam ? `fixed bg-white right-3.5` : "absolute bg-hackrpi-secondary-dark-blue right-3.5"
				} w-12 h-12 rounded-full border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-[5]  `}
				style={{
					top: highlightTeam ? "8rem" : teamTop - 20 + "px",
				}}
			></div>
			<div id="team" className="flex w-full desktop:w-2/3 flex-col items-start justify-start">
				<h1 className="text-4xl text-white font-bold ">Meet the Team</h1>
				<p>
					We are a motivated team of RPI students who share a passion for exploring the bounds of Computer Science and a
					commitment to organizing a fantastic event. Our team of students from every grade and experience level work
					together to organize our Hackathon in the fall and a variety of other smaller events throughout the year. We
					are always looking for more students to join our team and help us make the event a success. If you are
					interested in helping out, please join our discord or fill out one of the forms below!
				</p>
				<div className="flex flex-wrap items-center justify-center  xl:justify-between w-full my-4">
					<HackRPILink className="w-60 text-center my-1" href="https://discord.gg/Pzmdt7FYnu">
						Join our Organizing Team!
					</HackRPILink>
					<HackRPILink className="w-60 text-center my-1 mx-2" href="https://forms.gle/">
						Help Mentor!
					</HackRPILink>
					<HackRPILink className="w-60 text-center my-1" href="https://forms.gle/">
						Volunteer!
					</HackRPILink>
				</div>
				<h2 className="text-2xl font-bold text-white">Our Executive Board</h2>
				<div
					className="w-full h-fit overflow-hidden flex text-nowrap py-4 text-white"
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
						return DirectorCard(director, directorsAnim.offset);
					})}
				</div>
				{/*<h2 className="text-2xl font-bold text-white">Thank You to All of our Organizers</h2>
				<div
					className="w-full h-fit overflow-hidden flex text-nowrap py-4"
					onMouseEnter={() => {
						setOrganizersAnim((prev) => {
							return { organizers: prev.organizers, offset: prev.offset, hover: true };
						});
					}}
					onMouseLeave={() => {
						setOrganizersAnim((prev) => {
							return { organizers: prev.organizers, offset: prev.offset, hover: false };
						});
					}}
				>
					{organizersAnim.organizers.map((organizer, indx) => {
						return (
							<div
								key={indx}
								className="w-fit flex-shrink-0 mr-8 flex items-center justify-center flex-col"
								style={{ transform: `translate(${organizersAnim.offset}%, 0%)` }}
							>
								<div
									className="w-fit h-fit rounded-full flex items-center justify-center px-8 "
									style={{ backgroundColor: teamColors[organizer.team].bg }}
								>
									<div className="my-2 w-full rounded-full flex items-center justify-center flex-col text-white text-center">
										<h3 className="text-lg font-bold whitespace-pre-wrap">{organizer.name}</h3>
										<p className="">{organizer.team}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>*/}
			</div>
		</div>
	);
}

function DirectorCard(director: Director, offset: number) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			key={director.name}
			className="w-[200px] flex-shrink-0 mr-8 flex items-center justify-center flex-col"
			style={{ transform: `translate(${offset}%, 0%)` }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{!hovered && (
				<Image
					src={director.image}
					alt={director.name}
					height={200}
					width={200}
					className="w-[200px] h-[200px] rounded-full object-cover"
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
}
