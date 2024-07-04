import { Prize } from "@/data/prizes";
import Image from "next/image";

export default function MajorPrizes({ majorPrizes }: { majorPrizes: Prize[] }) {
	return (
		<div className="w-11/12 desktop:w-3/4 lg:w-2/3 2xl:w-3/5 h-fit flex flex-col items-center justify-start">
			{majorPrizes.map((prize, index) => (
				<div
					className={`flex items-center justify-between h-48 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse bg-hackrpi-primary-dark-green"} w-full py-2 `}
					key={index}
				>
					<div className="flex flex-col items-start justify-center mx-4">
						<h1 className="text-4xl font-bold font-sans">{prize.name}</h1>
						<h2 className="text-2xl font-sans font-bold">{prize.amount}</h2>
						<p>{prize.description}</p>
					</div>
					<div className="h-full min-w-fit w-1/3 flex items-center justify-center my-2">
						<Image src={prize.imagePath!} alt={prize.name} className="object-contain h-full w-fit" />
					</div>
				</div>
			))}
		</div>
	);
}
