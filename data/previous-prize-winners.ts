import type { ProjectDisplayProps } from "@/components/prev-projects/project-display";
import type { ProjectCarouselProps } from "@/components/prev-projects/project-carousel";

export const podiumPrizes: ProjectDisplayProps[] = [
	{
		title: "DAVE",
		authors: ["Aryash", "Zachary Fernandes", "Drew Bhavsar", "Shamar Samuels"],
		description:
			"DAVE (Digital Assistant for Vision Enhancement) is an innovative project designed to assist people with vision impairments. Developed by a team of four, three of whom have personal experience with vision issues, DAVE aims to address the challenges faced by 2.2 billion people worldwide with vision impairments. The system uses a camera mounted on glasses to capture the user's surroundings, allowing users to interact with DAVE through voice commands. Users can ask DAVE to describe their environment or answer questions about their surroundings. The project utilizes Python for both frontend and backend, incorporating technologies such as LLaVA for multimodal processing, OpenAI's Whisper for speech recognition, and Google Text-to-Speech for verbal responses.",
		imageUrl: "/projectImages/Dave.jpg",
		prizeCategory: "First Place",
		imageOnLeft: false,
	},
	{
		title: "HealthChat",
		authors: ["Michael Anderson"],
		description:
			"HealthChat, is an AI-powered Medical Search System designed to simplify the process of finding appropriate medical care. Using the Bing GPT4 Engine, HealthChat offers two main features: a chat function for answering medical questions and a physician matching service. The project was built as a complete Next.js application, leveraging modern web technologies such as React, TypeScript, and MaterialUI 5. HealthChat's innovative use of prompt engineering ensures consistent and accurate JSON data responses, making it easier for users to understand their medical issues and find suitable doctors quickly.",
		imageUrl: "/projectImages/HealthChat.png",
		imageOnLeft: true,
		prizeCategory: "Second Place",
	},
	{
		title: "RPillPal: A Biometric Pill Dispenser",
		authors: ["Dan Fiumara", "Om Anavekar", "Abdul Muizz", "Amaan Qureshi"],
		description:
			"RPillPal is a biometric-based pill dispenser designed to help prevent opiate overdoses by ensuring accurate medication management at home. Developed as a solution for patients discharged from the hospital, it uses fingerprint data to verify patient identity and dispense the correct dosage based on doctor recommendations. The device connects directly with healthcare providers, enabling them to monitor patient progress and adjust treatment plans as needed. The machine itself is built with an Arduino UNO WiFi board, incorporating a keypad, OLED display, stepper motor, and piezo speaker to handle physical pill dispensing, and communicates with an online database via HTTP requests. The front end, built using Svelte, interacts with the database using the fetch API to send and receive data, offering seamless UI updates through its reactive features.",
		imageUrl: "/projectImages/RPillPal.png",
		prizeCategory: "PRHI Patient Safety",
		imageOnLeft: false,
	},
];

export const carouselPrizes: ProjectCarouselProps[] = [
	{
		title: "Ed-You",
		authors: ["Name 1", "Name 2", "Name 3", "Name 4"],
		description:
			"Ed-You is a web application designed to provide secure and anonymous feedback from students to school administrators. Inspired by personal experiences, the project aims to empower students to share their thoughts on teachers without fear of retaliation, promoting a safer and more constructive educational environment. The app employs a fine-tuned large language model to filter out toxic comments, ensuring that feedback remains respectful and useful. Administrators can log in through Google OAuth to access a dashboard where they can view summarized feedback, average ratings, and raw comments about their teachers. The front-end is built with HTML, Bulma, CSS, and Thymeleaf, while the back-end utilizes Java Spring, integrating multiple Cohere language models for advanced text processing and classification.",
		imageUrl: "/projectImages/EdYou.png",
		prizeCategory: "Best AI Hack",
	},
	{
		title: "PyPlay",
		authors: ["Jeremy Goldberger", "Nyssa Gandhi", "Floofer++ Rafael", "zcacciapalle"],
		description:
			"PyPlay is a tool designed to help children transition from Scratch to Python while retaining the visual aspects they enjoy. Recognizing that kids often find text-based games dull after using Scratch, the team created PyPlay to make this shift easier and more engaging. PyPlay ports Scratch's basic features into Python using PyGame and manages multithreading to ensure smooth execution of commands. This allows kids to continue making Scratch-like games while learning to write in a full-fledged programming language. Built with Python and PyGame, PyPlay uses a multithreading framework to handle commands like wait() without suspending the main thread, ensuring a seamless learning experience.",
		prizeCategory: "Best Education Hack",
		imageUrl: "/projectImages/PyPlay.png",
	},
	{
		title: "CryptoLearner",
		authors: ["Hunter Gould", "smullahy", "Ashlesha Bhagat", "Name 4"],
		description:
			"CryptoLearner is an interactive educational platform designed to make cryptographic algorithms accessible to aspiring cryptographers and security enthusiasts. Inspired by a fascination with cryptography and contemporary digital security challenges, the tool demystifies complex concepts through hands-on experience. Users can engage with key generation, encryption, decryption, and digital signatures via a user-friendly interface. The project was built using Python, with libraries like NumPy and SymPy for computations and symbolic mathematics. PySide6 and Qt were used to create an intuitive GUI, ensuring an engaging and accessible learning process.",
		imageUrl: "/projectImages/CryptoLearner.png",
		prizeCategory: "Cyber Security Hack",
	},
	{
		title: "Native Lawn",
		authors: ["Trinity Gagnon", "Ethan Cheon", "Oliver Centner"],
		description:
			"Native Lawn is a comprehensive online resource designed to educate and guide users on the benefits of replacing traditional lawns with native plants. Inspired by the negative impact of monocultural grass lawns on biodiversity, the project aims to provide accessible and visual information on the topic. The site features an interactive map showing lawn alternatives native to different areas within the U.S.A., promoting biodiversity and reducing the need for water and pesticides. Users can follow detailed instructions on how to swap and curate their lawns, making the transition easier. The website is built with HTML and CSS and is hosted on GitHub, with plans to leverage GitHub's full capabilities for future maintenance.",
		imageUrl: "/projectImages/NativeLawn.gif",
		prizeCategory: "Best Sustainability Hack",
	},
	{
		title: "¢Track (Every Cent Counts)",
		authors: ["Jimi Xia", "Nicole Spaul", "Jase Krebs", "Lilu K"],
		description:
			"¢Track aims to help individuals organize their finances for greater stability and peace of mind. The app takes in a user's financial plan using a savings-to-spending ratio slider and collects transaction data from various services like PayPal or banks. It tracks and categorizes these transactions, presenting the user’s spending habits through percentages and graphs. Based on this data, the app suggests ways to adhere to their financial plan and offers future financial strategies tailored to their income sources. Built using React, the mobile application comprises multiple .js files linked through a navigation.js file, ensuring a seamless user experience.",
		imageUrl: "/projectImages/CentTrack.gif",
		prizeCategory: "Best Mobile Hack",
	},
	{
		title: "Student Health Prediction Model",
		authors: ["Felipe Alves", "Sofia Carmona", "David Quintero", "Brina Bhagat"],
		description:
			"Student Health Prediction Model focuses on assisting college students dealing with mental health issues by utilizing a predictive model. It processes a CSV file of student data provided by America On Tech, including various attributes like gender, major, GPA, class status, marital status, and mental health indicators. By analyzing this data, the project employs Principal Component Analysis (PCA) and machine learning to predict the number of students who seek help for their mental health issues. The model is built using Python, leveraging libraries such as pandas, matplotlib, numpy, and sklearn. The data is cleaned and visualized before applying PCA, and the transformed data is used to create a model that predicts the likelihood of students seeking mental health support.",
		imageUrl: "/projectImages/StudentHealthPredictionModel.png",
		prizeCategory: "Best Data Science Hack",
	},
	{
		title: "HelpAlign",
		authors: ["Haddleton"],
		description:
			"HelpAlign is designed to simplify the process of connecting with mental health providers in your area, offering a streamlined alternative to traditional help lines. The app was inspired by the founder's personal experience of struggling to find a therapist, which involved tedious Google searches and numerous voicemails. With just a click of a button, HelpAlign efficiently matches users with local mental health professionals, aligning their needs with available support.",
		imageUrl: "/projectImages/HelpAlign.gif",
		prizeCategory: "Best Startup Hack",
	},
	{
		title: "PictoPlan",
		authors: ["Yash Kaul", "Crizbae", "Jason Chen", "Ryan Cole"],
		description:
			"PictoPlan is designed to ease the burden of creating lesson plans for teachers, allowing them to focus on building connections with students and delivering quality education. Users can upload photos of content from books or textbooks to the site, where the images are converted into text using OCR technology. This text is then processed through OpenAI's API to generate summarized lesson plans. These plans are displayed on the website and accessible via a permanent link, making it easy for teachers to share and collaborate. The backend of PictoPlan is built with Python and FastAPI, utilizing Pytesseract for OCR and MongoDB for data storage, while the frontend is developed with Flask. The application is deployed on Heroku and Cloudflare, accessible at pictoplan.org.",
		imageUrl: "/projectImages/PictoPlan.png",
		prizeCategory: "Best First Time Hack",
	},
	{
		title: "Augma",
		authors: ["Sadashiva Yalla", "Liam Banahan", "Shrujanus Mutheboyina"],
		description:
			"Introducing Augma, an innovative app that leverages artificial intelligence to revolutionize accessibility by automating text-to-speech conversion. Augma empowers individuals with disabilities by converting images of text into clear, natural-sounding speech with just a tap on a smartphone. This AI-driven solution caters to those with learning disabilities, visual impairments, or anyone seeking an easy way to consume written content independently. The app is built using Dart and the Flutter framework, while a Python API with Flask handles image input. Google Cloud's Vision AI API performs optical character recognition (OCR) to extract text, which is then stored in Firebase along with the original image and timestamp.",
		imageUrl: "/projectImages/Augma.png",
		prizeCategory: "Best Use of Google Cloud Winner 1",
	},
	{
		title: "EmergencyRoom.Compare",
		authors: ["Eden Bendheim", "Toby McDonald", "Viane Matsibekker", "Michael Halpern"],
		description:
			"EmergencyRoom.Compare addresses the challenge of prolonged wait times in crowded emergency rooms by providing a tool to help patients find the fastest ER option. Recognizing that longer waits can worsen patient outcomes, the team, which includes members with medical backgrounds, developed a solution to optimize ER visits. The tool calculates the best ER to visit based on a combination of driving time and estimated waiting times, helping patients receive timely care. Built on a Google Cloud VM with a LAMP stack, the app uses Leaflet.js and JQuery for a user-friendly interface. It integrates Google Maps API for driving times and an internal RESTful API for ER waiting times, with additional data hosted on GitHub. Although a planned feature for triaging patients using OpenAI's API was not completed due to technical issues, the project remains focused on improving emergency care efficiency.",
		imageUrl: "/projectImages/EmergencyRoomCompare.png",
		prizeCategory: "Best Use of Google Cloud Winner 2",
	},
	{
		title: "GitHub IDE",
		authors: ["Momir-Petrovic Petrovic", "Advait"],
		description:
			"GitHub IDE introduces a novel way to run code directly from a GitHub repository's README file. The project was inspired by exploring creative uses for GitHub and aims to enhance the development workflow. Whenever the repository is updated with a new commit, the IDE automatically extracts and compiles the code from the README file, appending the output to the end of the file. This allows users to see the results of their code changes immediately within the README, streamlining the development and testing process.",
		imageUrl: "/projectImages/GitHubIDE.gif",
		prizeCategory: "Most Creative Use of GitHub",
	},
	{
		title: "Terra",
		authors: ["Liam Agu Vaitkus", "Bigmaccar McCarthy", "Lillith", "Christian Monfiston"],
		description:
			// eslint-disable-next-line
			"Terra is designed to connect humanitarian organizations with volunteers ready to assist communities affected by natural disasters. Named after the goddess of nature, Terra aims to streamline the process of finding and offering help during times of tragedy. Organizations can post volunteer opportunities, and the platform manages the connection between them and potential volunteers. The project was developed using a front-end technology stack consisting of HTML, CSS, and JavaScript, with Firebase and MongoDB employed to create and manage the database systems.",
		imageUrl: "/projectImages/Terra.png",
		prizeCategory: "Best Domain Name from GoDaddy Registry",
	},
	{
		title: "SparkSwap",
		authors: ["Joe Schmoe", "Tripp Lyons"],
		description:
			"SparkSwap is designed to empower users with more control over their energy purchasing by leveraging smart contracts. The platform allows users to buy electricity tokens either directly from energy companies in advance or from traders. These tokens represent a specific amount of electricity produced in a certain manner at a particular time, which can be redeemed for actual electricity from the company. By enabling users to choose the type and amount of power they want, SparkSwap reduces risk for energy companies and lowers prices for consumers, creating mutual incentives to use the service. The project was developed using smart contracts written in Solidity and tested with Foundry's Forge library. The frontend is built with NextJS, connected to the smart contracts via the wagmi library, and styled using TailwindCSS.",
		imageUrl: "/projectImages/SparkSwap.png",
		prizeCategory: "Best Web3 Hack",
	},
	{
		title: "Graphing Guinea",
		authors: ["Hanna Nakajima", "Kevin Liu", "Claire Chen", "Jared Lee"],
		description:
			"Graphing Guinea is a game designed to help young students learn about graph shapes through engaging puzzle-solving. Inspired by games like Poly Bridge, the game features a guinea pig attempting to cross a gap by creating a tunnel based on player-inputted equations and limits. The game was developed in just two days using Godot for game development, with Visual Studio Code for coding, and Procreate and Pixilart for art and sprite editing. Kevin Liu and Jared Lee focused on software development, while Claire Chen and Khayniyah Culpepper handled the art and animations.",
		imageUrl: "/projectImages/GraphingGuinea.gif",
		prizeCategory: "Best Game",
	},
];
