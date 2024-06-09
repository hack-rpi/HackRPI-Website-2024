import React, { useEffect, useState, useCallback } from "react";
import "../app/globals.css";
import Footer from "../../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import ProjectDisplay, { ProjectDisplayProps } from "@/components/prev-projects/projectdisplay";
import Arrow from "@/components/prev-projects/Arrow";

const PastYearProjects: React.FC = () => {
	const allProjects: ProjectDisplayProps[] = [
		{
			title: "DAVE",
			authors: ["Aryash", "Zachary Fernandes", "Drew Bhavsar"],
			description:
				"We used LLaVA, Whisper, and TTS to create a conversational, multimodal AI assistant for the visually impaired. Users provide images and questions, and the AI describes images and answers questions. This project places a camera above the user's left eye on a pair of glasses to take pictures of the world around the user. The user can summon the assistant by saying 'DAVE'. The user can ask DAVE to describe the image of the world around them. Alternatively, the user can ask DAVE questions about their surroundings. The camera takes a picture from its perspective. The user's speech is interpreted as text and combined with the image to prompt the model. The model provides an appropriate response to the user through speech.",
			imageUrl: "/projectImages/firstPlaceHack.png",
		},
		{
			title: "HealthChat",
			authors: ["Michael Anderson"],
			description:
				"HealthChat uses AI to answer patient questions to help them better find a doctor that suites their needs! Gone are the days of endless searching when you need the services of a medical professional. With HealthChat you can ask questions about your medical issue and be provided with doctors in your area that match your criteria. Using the Bing GPT4 Engine, HealthChat is able to search the internet for you, using the most reliable sources first.",
			imageUrl: "/projectImages/secondPlaceHack.png",
			imageOnLeft: true,
			textRightAlign: true,
		},
		{
			title: "RPillPal: A Biometric Pill Dispenser",
			authors: ["Dan Fiumara", "Om Anavekar", "Abdul Muizz", "Amaan Qureshi"],
			description:
				"RPillPal is a biometric-based pill dispenser designed for home use. Its goal is to utilize biometric fingerprint data to determine patient identity and supply the correct dose based on doctor recommendations. It connects directly with a patient's healthcare providers, allowing them to monitor progress and make timely adjustments to treatment plans.",
			imageUrl: "/projectImages/patientsafety.png",
		},
		{
			title: "Ed-You",
			authors: ["Name 1", "Name 2", "Name 3", "Name 4"],
			description:
				"Ed-You is a web application that creates a direct channel for secure feedback from students about teachers to administration. Ed-You is catered to two main audiences: students and administrators. Students enter their school code, which is randomly generated and available to the admin in their school, and are able to choose from a list of teachers at their school and provide anonymous feedback whenever they want. The only restriction to student-feedback is toxicity: the application uses a fine-tuned large language model to flag any potentially harmful comments and force the student to reword them. On the administration side, admins can log in through Google OAuth to access their dashboard. A list of teachers from their school will be visible, and admins can click on any teacher to learn more about the feedback given to them. This feedback takes the form of an average rating calculated by another fine-tuned LLM, an AI-generated summary, and raw comments with time stamps.",
			imageUrl: "/projectImages/AIHack.png",
		},
		{
			title: "PyPlay",
			authors: ["Jeremy Goldberger", "Nyssa Gandhi", "Floofer++ Rafael", "zcacciapalle"],
			description:
				"PyPlay ports through the basic features of Scratch via PyGame and handles all of the multithreading behind the scenes so that kids can learn to code easily, continuing making Scratch-like games while learning to write in a full-fledged programming language.",
			imageUrl: "/projectImages/EducationHack.png",
		},
		{
			title: "CryptoLearner",
			authors: ["Hunter Gould", "smullahy", "Ashlesha Bhagat", "Name 4"],
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			imageUrl: "/projectImages/cyber.png",
		},
		{
			title: "Native Lawn",
			authors: ["Trinity Gagnon", "Ethan Cheon", "Oliver Centner"],
			description:
				"A straightforward website that helps people swap their lawns for environmentally friendly native alternatives by providing visual resources and information. Our site serves as a one-stop resource for learning about the cons of lawns, and what alternatives are available. Planting native plants encourages biodiversity and diminishes the need for watering, pesticide use, and other resource-reliant or damaging tools. Native plants vary greatly by area, even only within the U.S.A., so our site provides a visual guide to what lawn alternatives are native to where, via an interactive map. Further details on how to swap and curate your lawn are then provided, with Native Lawn acting as an every-step guide to swapping your lawn.",
			imageUrl: "/projectImages/unNamed.png",
		},
		{
			title: "¢Track (Every Cent Counts)",
			authors: ["Jimi Xia", "Nicole Spaul", "Jase Krebs", "Lilu K"],
			description:
				"Intakes the prospective financial plan from the user in the form of a slider showing savings to spending ratio (also intakes users source of income, or if they are a homemaker or elderly). Intakes the transactions of the user from their service of choice (Paypal, Bank, etc.). Tracts the categories of transactions, outputs user spending habits in the form of percentages and graphs. Makes suggestions off the previously found data on how to better adhere to the users plan of finances. Also makes suggestions for financial plans/ future plans based on the users determined source of income, and their predetermined set plan when they first downloaded the app.",
			imageUrl: "/projectImages/unNamed.png",
		},
		{
			title: "Student Health Prediction Model",
			authors: ["Felipe Alves", "Sofia Carmona", "David Quintero", "Brina Bhagat"],
			description:
				"In this model, we take in a CSV file of students at the college level. This Data was provided by the America On Tech organization, we used their data. The data is categorized into an ID to prevent any data from the same student, gender, major, GPA, class status, marital status, whether or not they have depression, whether or not they have anxiety, whether or not they have panic attacks, and if they've sought treatment previously. Using this data we created a Principle Component Analysis and created a Machine Learning Model to predict the number of students who received help and how many didn't.",
			imageUrl: "/projectImages/datascience.png",
		},
		{
			title: "HelpAlign",
			authors: ["Haddleton"],
			description:
				"HelpAlign helps you connect with mental health providers in your area, all with the click of a button. We're not a help line - we help you, and your help, align.",
			imageUrl: "/projectImages/unNamed.png",
		},
		{
			title: "PictoPlan",
			authors: ["Yash Kaul", "Crizbae", "Jason Chen", "Ryan Cole"],
			description:
				"PictoPlan lets the user select their own photos of content from books or textbooks and upload them to our site. After this happens, the photo is converted into text using OCR and then passed through OpenAI's API in order to summarize and create a lesson plan for the respective content. This lesson plan is then displayed on the website, and is accessible through a permanent link to facilitate teachers sharing lesson-plans and collaborating.",
			imageUrl: "/projectImages/firstTime.png",
		},
		{
			title: "Augma",
			authors: ["Sadashiva Yalla", "Liam Banahan", "Shrujanus Mutheboyina"],
			description:
				"Introducing Augma, the groundbreaking app that leverages the power of artificial intelligence to transform the world of accessibility. Our innovative solution empowers individuals with disabilities by automating text-to-speech like never before. With Augma, we've reimagined inclusivity for a digital age, making any text accessible in an instant. Imagine a world where barriers to communication are shattered with a simple tap on your smartphone. Augma effortlessly converts images of text into clear, natural-sounding speech. Whether you have a learning disability, are visually impaired, or just looking for a convenient way to consume written content, our AI-driven app ensures everyone can access information independently. Join us in revolutionizing accessibility and ensuring that everyone has the power to hear the world around them.",
			imageUrl: "/projectImages/googlecloudusage.png",
		},
		{
			title: "EmergencyRoom.Compare",
			authors: ["Eden Bendheim", "Toby McDonald", "Viane Matsibekker", "Michael Halpern"],
			description:
				"In some cases when going to the ER, it may be faster to go to a further away ER to avoid waiting time and be seen faster in net time. Using our tool, we will find you the ERs that will see you the soonest based on a combination of the time to drive to the ER and the estimated ER waiting time.",
			imageUrl: "/projectImages/googlecloudusage2.png",
		},
		{
			title: "GitHub IDE",
			authors: ["Momir-Petrovic Petrovic", "Advait"],
			description:
				"Our project allows you to run your code straight from the github repository readme file. Whenever the GitHub repository has a commit, it takes the readme, compiles the code and adds the output to the end of the readme",
			imageUrl: "/projectImages/unNamed.png",
		},
		{
			title: "Terra",
			authors: ["Liam Agu Vaitkus", "Bigmaccar McCarthy", "Lillith", "Christian Monfiston"],
			description:
				'Terra, named after the goddess of nature, or, "Mother Earth", seeks to connect humanitarian organizations with volunteers who are eager to lend a hand to communities impacted by tragedy. Organizations can post volunteer openings and our site facilitates the rest.',
			imageUrl: "/projectImages/domainName.png",
		},
		{
			title: "SparkSwap",
			authors: ["Joe Schmoe", "Tripp Lyons"],
			description:
				"SparkSwap allows users to buy electricity tokens either directly from energy companies in advance or purchase from traders. These tokens are for a certain amount of electricity produced in a certain manner at a particular time. These tokens are then redeemed for actual electricity from the company. The ability of a user to directly choose how much power of each particular type they want is a strength of this system. Additionally, buying a particular amount of electricity from the energy company ahead of time reduces the risk for the energy company and the price for the consumer, thus both have an incentive to use the service.",
			imageUrl: "/projectImages/web3.png",
		},
		{
			title: "Graphing Guinea",
			authors: ["Hanna Nakajima", "Kevin Liu", "Claire Chen", "MEKNOWKNOOB Lee"],
			description:
				"Our game uses puzzle-solving to make learning fun. Each level begins with a guinea pig trying to traverse a gap to the other side of the room. With the player's inputted equations and limits, the guinea pig's tunnel is created allowing it to successfully reach the end goal.",
			imageUrl: "/projectImages/bestGame.png",
		},
	];

	const topProjects = allProjects.slice(0, 3);
	const otherProjects = allProjects.slice(3);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		//preload next and previous image on initial render
		const nextIndex = (currentIndex + 1) % otherProjects.length;
		const prevIndex = (currentIndex - 1 + otherProjects.length) % otherProjects.length;
		const nextImg = new Image();
		const prevImg = new Image();
		if (otherProjects[nextIndex].imageUrl) {
			nextImg.src = otherProjects[nextIndex].imageUrl || "";
		}
		if (otherProjects[prevIndex].imageUrl) {
			prevImg.src = otherProjects[prevIndex].imageUrl || "";
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const nextProject = useCallback(() => {
		setCurrentIndex((prevIndex) => {
			const nextIndex = (prevIndex + 1) % otherProjects.length;
			// Preload next image
			const nextNextIndex = (nextIndex + 1) % otherProjects.length;
			const img = new Image();
			if (otherProjects[nextNextIndex].imageUrl) {
				img.src = otherProjects[nextNextIndex].imageUrl || "";
			}
			return nextIndex;
		});
	}, [otherProjects]);

	const prevProject = useCallback(() => {
		setCurrentIndex((prevIndex) => {
			const newIndex = (prevIndex - 1 + otherProjects.length) % otherProjects.length;
			// Preload previous image
			const prevPrevIndex = (newIndex - 1 + otherProjects.length) % otherProjects.length;
			const img = new Image();
			if (otherProjects[prevPrevIndex].imageUrl) {
				img.src = otherProjects[prevPrevIndex].imageUrl || "";
			}
			return newIndex;
		});
	}, [otherProjects]);

	return (
		<div>
			<div className="container mx-auto px-4 py-8 max-w-screen-lg pb-60">
				<NavBar showOnScroll={false} />
				<h2 className="text-3xl font-bold text-center mb-8 pt-20">Previous Projects From HackRPI X</h2>
				<div className="grid grid-cols-1 gap-8 mx-auto">
					{topProjects.map((project, index) => (
						<div key={index}>
							<ProjectDisplay {...project} />
							{index < topProjects.length - 1 && <hr className="my-8 border-t border-gray-200 w-1/2 mx-auto" />}
						</div>
					))}
				</div>
				<hr className="my-8 border-t border-gray-200 w-1/2 mx-auto" /> {/* Moved the horizontal bar here */}
				<div className="flex justify-center items-center my-8 mx-auto h-96">
					<div className="flex items-center bg-gray-200 p-4" style={{ height: "70%" }}>
						<Arrow direction="left" onClick={prevProject} />
					</div>
					<div className="flex flex-col items-center h-full mx-8">
						{" "}
						{/* Added horizontal margins here */}
						<img
							src={otherProjects[currentIndex].imageUrl}
							alt={otherProjects[currentIndex].title}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex items-center bg-gray-200 p-4" style={{ height: "70%" }}>
						<Arrow direction="right" onClick={nextProject} />
					</div>
				</div>
				<ProjectDisplay {...otherProjects[currentIndex]} displayImage={false} />
				<hr className="my-8 border-t border-gray-200 w-1/2 mx-auto mb-20" />
			</div>
			<Footer />
		</div>
	);
};

export default PastYearProjects;
