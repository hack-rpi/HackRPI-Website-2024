import { Prize } from "@/data/prizes";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MinorPrizes({ minorPrizes }: { minorPrizes: Prize[] }) {
	const responsive = {
		all: {
			breakpoint: { max: 4000, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="min-h-fit w-11/12 desktop:w-3/4 lg:w-2/3 2xl:w-3/5 mb-4 ">
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				infinite={true}
				keyBoardControl={true}
				ssr={true}
				containerClass="w-full rounded-md"
				itemClass="carousel-item-padding-40-px"
			>
				{minorPrizes.map((prize, index) => (
					<div className="w-full h-fit flex items-start justify-center my-4" key={index}>
						<div className="w-3/4 flex flex-col items-center justify-start bg-silver rounded-md m-4 text-hackrpi-secondary-dark-blue shadow-lg shadow-hackrpi-primary-blue">
							<Image
								src={prize.imagePath!}
								alt={prize.name}
								className="w-full max-h-60 object-cover mb-2 rounded-md"
							></Image>
							<h1 className="w-11/12 text-center text-xl xs:text-2xl sm:text-3xl font-bold font-sans">{prize.name}</h1>
							<h2 className="w-11/12 text-center text-2xl font-bold font-sans">{prize.amount}</h2>
							<p className="w-11/12 text-lg font-sans text-center mb-2">{prize.description}</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}
