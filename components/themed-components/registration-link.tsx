import HackRPILink from "./hackrpi-link";

export default function RegistrationLink({ className }: { className?: string }) {
	return (
		<HackRPILink href="https://events.mlh.io/events/11258-hackrpi" className={`${className} pl-2 pr-6 py-2`}>
			Register Now
		</HackRPILink>
	);
}
