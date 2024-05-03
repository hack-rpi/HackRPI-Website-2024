import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import RegistrationButton from "../nav-bar/registration-button";

type FAQ = {
	title: string;
	content: React.ReactNode;
};

const faqs: FAQ[] = [
	{
		title: "What is HackRPI?",
		content:
			"HackRPI is a 24 hour coding event where hackers will work in teams of 1 to 4 people to create projects based around the theme to win epic prizes thanks to our sponsors!",
	},
	{
		title: "When is HackRPI?",
		content:
			"November 9th-10th 2024, is the date for our 11th annual HackRPI. Arrival and check-in will take place from 10-11am with the opening ceremony beginning at 11am. The event will end at 4pm on Sunday, November 10th. We're really excited to celebrate the 11th year of our incredible event with YOU! Save the date!",
	},
	{
		title: "Where is HackRPI?",
		content:
			"HackRPI is held at the RPI campus in Troy, New York. The event will take place in the Darrin Communications Center (DCC).",
	},
	{
		title: "Is it free to attend?",
		content:
			"Yes! Thanks to our many wonderful sponsors, HackRPI is free, as is all the swag, food, and snacks you can get!",
	},
	{
		title: "How do I register?",
		content: (
			<div className="flex items-center justify-start">
				<p className="pr-2">Click here to register:</p>
				<RegistrationButton /> {/* This is a custom button component will update later */}
			</div>
		),
	},
	{
		title: "Who can participate?",
		content:
			"Anyone with any skill level! Whether you're an experienced hackathon veteran, or if you've never coded before, our hackathon is for you! With our team of mentors ready to assist you with whatever direction you're taking your project, HackRPI is the place you should go to grow and test your technical skills!",
	},
	{
		title: "Do I have to be an RPI student?",
		content:
			"No! You don't have to be an RPI student to participate! Students from other colleges are welcome and any recent college graduates!",
	},
	{
		title: "Who else will be there?",
		content:
			"Not only can you meet other RPI students and people from other colleges, but we've got wonderful sponsors who make this event possible! You'll have the opportunity to talk to representatives from a variety of tech companies at career-fair style tables.",
	},
	{
		title: "Does HackRPI provide travel reimbursement?",
		content:
			"We are unable to provide travel reimbursement at this time, but are happy to offer advice for nearby and affordable transportation options.",
	},
];

function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const FAQPage = () => {
	const [highlightFAQ, setHighlightFAQ] = useState(false);
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
	const [faqTop, setFaqTop] = useState(0);

	useEffect(() => {
		// Highlight the FAQ section in the navbar when the user scrolls to it
		let faqStart = (document.getElementById("faq")?.offsetTop || window.innerHeight) - 140;
		let faqEnd = faqStart + (document.getElementById("faq")?.offsetHeight || window.innerHeight);
		setFaqTop(faqStart + 140);

		// Update whether the faq should be highlighted when the user scrolls
		const handleScroll = () => {
			setHighlightFAQ(window.scrollY > faqStart && window.scrollY < faqEnd);
			faqStart = (document.getElementById("faq")?.offsetTop || window.innerHeight) - 140;
			faqEnd = faqStart + (document.getElementById("faq")?.offsetHeight || window.innerHeight);
			setFaqTop(faqStart + 140);
		};

		// Update the faqStart and faqEnd when the user resizes the window
		const handleResize = () => {
			faqStart = (document.getElementById("faq")?.offsetTop || window.innerHeight) - 140;
			faqEnd = faqStart + (document.getElementById("faq")?.offsetHeight || window.innerHeight);
			setFaqTop(faqStart + 140);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleToggle = (index: number) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="h-auto mb-8 flex flex-col items-center text-white bg-base-100" id="faq">
			<div className="flex w-full desktop:w-2/3">
				<h1 className="font-mokoto font-normal text-white text-left text-4xl text-shadow-md pb-4">FAQs</h1>
				<div>
					<div
						className={`${
							highlightFAQ ? `fixed bg-white ${isMobileDevice() ? "right-9" :"right-3.5"}` : "absolute bg-hackrpi-secondary-dark-blue right-3.5"
						} w-12 h-12 rounded-full border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-[5]  `}
						style={{
							top: highlightFAQ ? "8rem" : faqTop - 20 + "px",
						}}
					></div>
				</div>
			</div>
			<div className="w-full desktop:w-2/3">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className={`collapse collapse-arrow custom-arrow bg-base-200 p-1 text-2xl border-t-2 ${
							index === faqs.length - 1 ? "border-b-2" : ""
						} border-hackrpi-primary-blue rounded-none`}
					>
						<input
							type="checkbox"
							className="w-auto h-auto"
							checked={expandedIndex === index}
							onChange={() => handleToggle(index)}
						/>
						<div className="collapse-title font-medium text-2xl text-hackrpi-primary-blue">{faq.title}</div>
						<div className="collapse-content">{faq.content}</div>
					</div>
				))}
			</div>
			<div className="w-full desktop:w-2/3">
				<h2 id="sponsors" className="font-poppins text-2xl text-center pt-10">
					Feel free to contact us with any other questions at{" "}
					<a href="mailto:hackrpi@rpi.edu" className="text-hackrpi-primary-blue">
						hackrpi@rpi.edu!
					</a>
				</h2>
			</div>
		</div>
	);
};

export default FAQPage;
