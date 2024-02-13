import NextImg from "next/image";

export default function SubwayCircles() {
	return (
		<div className="w-64 h-64 sm:h-80 sm:w-80 border-hackrpi-secondary-yellow aspect-square border-[12px] rounded-full flex items-center justify-center">
			<div className="w-11/12 border-hackrpi-primary-light-green aspect-square border-[12px] rounded-full flex items-center justify-center">
				<div className="w-11/12 border-hackrpi-primary-blue aspect-square square border-[12px] rounded-full flex items-center justify-center">
					{/* This logo should change, miranda has one with a different yellow arrow */}
					<NextImg
						alt="HackRPI 2024"
						src="/HackRPI_Logo_Yellow_Arrow.png"
						className="image-full"
						height="100"
						width="100"
					/>
				</div>
			</div>
		</div>
	);
}
