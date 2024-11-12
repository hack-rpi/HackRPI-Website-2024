import HackRPILink from "./hackrpi-link";

export default function RegistrationLink({ className }: { className?: string }) {
	return (
		<HackRPILink href="https://hackrpi2024.devpost.com/project-gallery" className={`${className} pl-2 pr-6 py-2`}>
			See Winners
		</HackRPILink>
	);
}
