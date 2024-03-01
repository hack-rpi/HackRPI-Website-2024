export default function Timer() {
	return (
		<div className="w-full h-fit flex flex-col items-center justify-center pl-12">
			<div className="flex items-center justify-between w-full mb-4">
				<Circle bgColor="bg-[#ef3a42]" textColor="text-white">
					99
				</Circle>
				<Circle bgColor="bg-[#f8a13a]" textColor="text-white">
					99
				</Circle>
				<Circle bgColor="bg-[#00a65c]" textColor="text-white">
					99
				</Circle>
				<Circle bgColor="bg-[#0058a9]" textColor="text-white">
					99
				</Circle>
				<Circle bgColor="bg-[#b43c96]" textColor="text-white">
					99
				</Circle>
			</div>
			<div className="flex items-center justify-between w-full">
				<Circle bgColor="bg-[#ef3a42]" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-[#f8a13a]" textColor="text-white">
					D
				</Circle>
				<Circle bgColor="bg-[#00a65c]" textColor="text-white">
					H
				</Circle>
				<Circle bgColor="bg-[#0058a9]" textColor="text-white">
					M
				</Circle>
				<Circle bgColor="bg-[#b43c96]" textColor="text-white">
					S
				</Circle>
			</div>
		</div>
	);
}

function Circle({ bgColor, textColor, children }: { bgColor: string; textColor: string; children: React.ReactNode }) {
	return (
		<div
			className={`w-1/6 aspect-square rounded-full flex items-center justify-center ${bgColor} ${textColor} text-5xl lg:text-6xl xl:text-7xl font-bold shadow-lg`}
		>
			{children}
		</div>
	);
}
