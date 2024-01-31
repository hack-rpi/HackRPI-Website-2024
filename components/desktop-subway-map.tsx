import NextImg from "next/image";

export default function DesktopSubwayMap() {
	return (
		<div className="width-full height-full absolute top-0 bottom-0 left-0 right-0 bg-base-100 -z-10">
			{/* Circles */}
			<div className="aspect-square w-80 flex items-center justify-center absolute top-[20.0%] right-[80px]">
				<div className="w-full border-hackrpi-secondary-yellow aspect-square border-[12px] rounded-full flex items-center justify-center">
					<div className="w-11/12 border-hackrpi-primary-light-green aspect-square border-[12px] rounded-full flex items-center justify-center">
						<div className="w-11/12 border-hackrpi-primary-blue aspect-square square border-[12px] rounded-full flex items-center justify-center">
							<NextImg src={"/images/hackrpi-logo.png"} className="w-3/4 aspect-square" width={100} height={100} alt="HackRPI Logo" />
						</div>
					</div>
				</div>
			</div>
            {/* Lines */}
            {/* top Yellow */}
            <div className="absolute top-[100px] right-[300px] w-56 h-3 bg-hackrpi-secondary-yellow rotate-45"></div>
            {/* right Green */}
            <div className="absolute top-[475px] right-[15px] w-[175px] h-3 bg-hackrpi-primary-light-green rotate-45"></div>
            <div className="absolute top-[540px] right-[35px] w-3 h-[1000px] bg-hackrpi-primary-light-green "></div>
            {/* bottom Blue */}
            <div className="absolute top-[520px] right-[250px] w-[400px] h-3 bg-hackrpi-primary-blue -rotate-45"></div>
            <div className="absolute top-[660px] left-[0px] w-[calc(100vw-580px)] h-3 bg-hackrpi-primary-blue "></div>

		</div>
	);
}
