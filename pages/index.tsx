import "../app/globals.css";
import Link from "../components/link";

export default function Home() {
	return (
		<div>
			<h1 className="font-sans">Home</h1>
			<p>
				Welcome to HackRPI 2024! We are still in the process of building this website, so please check back later for
				more information.
			</p>
			<Link href="/sponsor-us">Sponsor Us</Link>
			<Link href="/MeetTheTeamPage">Meet The Team</Link>
		</div>
	);
}
