import HackRPILink from "./hackrpi-link";

export default function RegistrationLink({className}: {className?: string}) {
	return (
		<HackRPILink href="https://hackrpi.com" className={`${className}`}>
			{" "}
			Register Now{" "}
		</HackRPILink>
	);
}
