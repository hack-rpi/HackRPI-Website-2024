import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export interface ProjectCarouselProps {
	prizeCategory: string;
	title: string;
	authors: string[];
	description: string;
	imageUrl: string;
}

export default function ProjectCarousel({ projects }: { projects: ProjectCarouselProps[] }) {
	const responsive = {
		all: {
			breakpoint: { max: 4000, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="w-full">
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				infinite={true}
				keyBoardControl={true}
				ssr={true}
				containerClass="w-full h-fit rounded-md mb-2"
			>
				{projects.map((project, index) => (
					<div className="w-full h-fit flex items-start justify-center my-4" key={index}>
						<div className="w-full sm:w-3/4 flex flex-col items-center justify-start bg-silver rounded-md m-4 text-hackrpi-secondary-dark-blue shadow-lg shadow-hackrpi-primary-blue">
							<Image
								src={project.imageUrl}
								alt={project.title}
								width={500}
								height={500}
								className="w-full max-h-60 object-contain mb-2 rounded-md"
							></Image>
							<h1 className="w-11/12 text-left text-xl xs:text-2xl sm:text-3xl font-bold font-sans">
								{project.prizeCategory}
							</h1>
							<h2 className="w-11/12 text-left text-2xl font-bold font-sans">{project.title}</h2>
							<hr className="border-black w-11/12"></hr>
							<p className="w-11/12 text-left">{project.authors.join(", ")}</p>
							<hr className="border-black w-11/12"></hr>
							<p className="w-11/12 font-sans text-left my-2">{project.description}</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}
