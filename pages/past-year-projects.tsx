import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Footer from "../components/footer/footer";
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
			title: "Project Title 5",
			authors: ["Name 1", "Name 2", "Name 3", "Name 4"],
			description: "In tempus sit amet lorem sed suscipit...",
			imageUrl: "/images/project5.jpg",
		},
		// Repeat similar objects for projects 6 to 18
		{
			title: "Project Title 19",
			authors: ["Name 1", "Name 2", "Name 3", "Name 4"],
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			imageUrl: "/images/project19.jpg",
		},
		{
			title: "Project Title 20",
			authors: ["Name 1", "Name 2", "Name 3", "Name 4"],
			description: "In tempus sit amet lorem sed suscipit...",
			imageUrl: "/images/project20.jpg",
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
			nextImg.src = otherProjects[nextIndex].imageUrl || '';
		}
		if (otherProjects[prevIndex].imageUrl) {
			prevImg.src = otherProjects[prevIndex].imageUrl || '';
		}
	}, []);

const nextProject = () => {
    setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % otherProjects.length;
        // Preload next image
        const nextNextIndex = (nextIndex + 1) % otherProjects.length;
        const img = new Image();
		if (otherProjects[nextNextIndex].imageUrl) {
			img.src = otherProjects[nextNextIndex].imageUrl || '';
		}
        return nextIndex;
    });
};

const prevProject = () => {
    setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex - 1 + otherProjects.length) % otherProjects.length; // Renamed to newIndex
        // Preload previous image
        const prevPrevIndex = (newIndex - 1 + otherProjects.length) % otherProjects.length; // Use newIndex here
        const img = new Image();
		if (otherProjects[prevPrevIndex].imageUrl) {
			img.src = otherProjects[prevPrevIndex].imageUrl || '';
		}
        return newIndex; // Return newIndex
    });
};

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
