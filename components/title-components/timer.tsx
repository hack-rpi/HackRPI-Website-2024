export default function Timer() {
	return (
		<div className="w-full h-fit flex flex-col items-center justify-center pl-12">
			<div className="flex items-center justify-between w-full mb-4">
				<Circle bgColor="bg-hackrpi-primary-light-green" textColor="text-black">
					1
				</Circle>
				<Circle bgColor="bg-hackrpi-secondary-yellow" textColor="text-black">
					2
				</Circle>
				<Circle bgColor="bg-hackrpi-primary-dark-green" textColor="text-white">
					3
				</Circle>
				<Circle bgColor="bg-hackrpi-primary-blue" textColor="text-black">
					4
				</Circle>
				<Circle bgColor="bg-hackrpi-secondary-light-blue" textColor="text-white">
					5
				</Circle>
			</div>
			<div className="flex items-center justify-between w-full">
				<Circle bgColor="bg-hackrpi-secondary-yellow" textColor="text-black">
					M
				</Circle>
				<Circle bgColor="bg-hackrpi-primary-blue" textColor="text-black">
					D
				</Circle>
				<Circle bgColor="bg-hackrpi-secondary-light-blue" textColor="text-white">
					H
				</Circle>
				<Circle bgColor="bg-hackrpi-primary-dark-green" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-hackrpi-primary-light-green" textColor="text-black">
					S
				</Circle>
			</div>
		</div>
	);
}

function Circle({ bgColor, textColor, children }: { bgColor: string; textColor: string; children: React.ReactNode }) {
	return (
		<div
			className={`w-1/6 aspect-square rounded-full flex items-center justify-center ${bgColor} ${textColor} text-6xl font-bold shadow-lg`}
		>
			{children}
		</div>
	);
}
