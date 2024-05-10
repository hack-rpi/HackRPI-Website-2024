import React from "react";
import HackRPILink from "../themed-components/hackrpi-link";

export default function TeamComponent() {
	return (
		<div className="w-full flex items-center justify-center mb-4">
			<div id="team" className="flex w-full desktop:w-2/3 flex-col items-start justify-start">
				<h1 className="text-4xl text-white font-bold ">Meet the Team</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi vitae eligendi aspernatur laboriosam
					consectetur perspiciatis ipsa harum accusantium itaque error. Nisi, voluptatibus quod! Cupiditate, molestiae.
					Quas laboriosam optio nostrum explicabo.
				</p>
				<div className="flex items-center justify-between w-full my-4">
					<HackRPILink className="w-60 text-center"  href="https://discord.gg/Pzmdt7FYnu">Join our Organizing Team!</HackRPILink>
					<HackRPILink className="w-60 text-center" href="https://forms.gle/">Help Mentor!</HackRPILink>
					<HackRPILink className="w-60 text-center" href="https://forms.gle/">Volunteer!</HackRPILink>
				</div>
				<h2 className="text-2xl font-bold text-white">Our Executive Board</h2>
				<div></div>
				<h2 className="text-2xl font-bold text-white">Thank You to All of our Organizers</h2>
				<div></div>
			</div>
		</div>
	);
}
