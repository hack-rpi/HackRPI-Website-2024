import React from "react";
import "../app/globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import Image from "next/image";

const MeetTheTeamPage = () => {
	const teamMembersFirstRow = [
		{
			name: "Maryellen Marino",
			role: "President",
			imagePath: "/TeamPics/mel image.jpeg",
		},
		{
			name: "Raven Levitt",
			role: "Vice President",
			imagePath: "/TeamPics/raven image.jpg",
		},
		{
			name: "John Kloepfer",
			role: "Director of Technology",
			imagePath: "/TeamPics/john image.jpg",
		},
	];

	// Define other team member rows similarly
	const teamMembersSecondRow = [
		{
			name: "Xenia Khusid",
			role: "Director of Logistics",
			imagePath: "/TeamPics/xenia image.jpg",
		},
		{
			name: "Adwait Naware",
			role: "Director of Finance",
			imagePath: "/TeamPics/adwait image.jpg",
		},
		{
			name: "Sanay Tralshawala",
			role: "Director of Sponsorship",
			imagePath: "/TeamPics/sanay image.png",
		},
		{
			name: "Miranda Zheng",
			role: "Director of Marketing",
			imagePath: "/TeamPics/miranda image.jpg",
		},
	];

	const jrTeamMembersFirstRow = [
		{
			name: "CJ Marino",
			role: "Junior Director of Logistics",
			imagePath: "/TeamPics/cj image.jpg",
		},
		{
			name: "Grace Hui",
			role: "Junior Director of Finance",
			imagePath: "/TeamPics/grace image.jpg",
		},
	];

	const jrTeamMembersSecondRow = [
		{
			name: "Heman Kolla",
			role: "Junior Director of Sponsorship",
			imagePath: "/TeamPics/heman image.jpg",
		},
		{
			name: "Amanda Ruan",
			role: "Junior Director of Marketing",
			imagePath: "/TeamPics/amanda image.jpeg",
		},
		{
			name: "Cooper Werner",
			role: "Junior Director of Technology",
			imagePath: "/TeamPics/cooper image.jpg",
		},
	];

	return (
		<div className="flex flex-col w-full justify-start items-center bg-gradient-to-b">
			<NavBar showOnScroll={false} />
			<br />
			<br />
			<div className="p-8">
				<h1 className="my-5 text-white font-helvetica text-center text-4xl font-bold">Meet The Team!</h1>
				<h2 className="my-5 text-white font-helvetica text-center text-2xl">MEET THE DIRECTORS</h2>
				<div className="flex flex-wrap justify-center">
					{teamMembersFirstRow.map((member, index) => (
						<div key={index} className="flex flex-col items-center justify-center text-center mx-4 mb-4">
							<Image
								src={member.imagePath}
								alt={member.name}
								className="w-48 h-48 object-cover rounded-full" // Adjusted size
								width={500} // Adjusted size
								height={500} // Adjusted size
							/>
							<h3 className="text-lg text-white font-semibold">{member.name}</h3>
							<p className="font-bold text-green-400">{member.role}</p>
						</div>
					))}
				</div>

				<div className="flex flex-wrap justify-center">
					{teamMembersSecondRow.map((member, index) => (
						<div key={index} className="flex flex-col items-center justify-center text-center mx-4 mb-4">
							<Image
								src={member.imagePath}
								alt={member.name}
								className="w-48 h-48 object-cover rounded-full" // Adjusted size
								width={500} // Adjusted size
								height={500} // Adjusted size
							/>
							<h3 className="text-lg text-white font-semibold">{member.name}</h3>
							<p className="font-bold text-green-400">{member.role}</p>
						</div>
					))}
				</div>

				<h2 className="my-5 text-white font-helvetica text-center text-2xl">MEET THE JUNIOR DIRECTORS</h2>
				<div className="flex flex-wrap justify-center">
					{jrTeamMembersFirstRow.map((member, index) => (
						<div key={index} className="flex flex-col items-center justify-center text-center mx-4 mb-4">
							<Image
								src={member.imagePath}
								alt={member.name}
								className="w-48 h-48 object-cover rounded-full" // Adjusted size
								width={500} // Adjusted size
								height={500} // Adjusted size
							/>
							<h3 className="text-lg text-white font-semibold">{member.name}</h3>
							<p className="font-bold text-green-400">{member.role}</p>
						</div>
					))}
				</div>

				<div className="flex flex-wrap justify-center">
					{jrTeamMembersSecondRow.map((member, index) => (
						<div key={index} className="flex flex-col items-center justify-center text-center mx-4 mb-4">
							<Image
								src={member.imagePath}
								alt={member.name}
								className="w-48 h-48 object-cover rounded-full" // Adjusted size
								width={500} // Adjusted size
								height={500} // Adjusted size
							/>
							<h3 className="text-lg text-white font-semibold">{member.name}</h3>
							<p className="font-bold text-green-500">{member.role}</p>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MeetTheTeamPage;
