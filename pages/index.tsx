import "../app/globals.css";
import Link from "../components/link";
import AboutSection from './about-us';

export default function Home() {
	return (
		<div>
			<h1 className="font-sans">Home</h1>
			<p>
				Welcome to HackRPI 2024! We are still in the process of building this website, so please check back later for
				more information.
			</p>
			<p>
			<Link href="/sponsor-us">Sponsor Us</Link>
			</p>
			<p>
			<Link href="/maps">Maps</Link>
			</p>
			<div>
      			<AboutSection />
    		</div>
		</div>
	);
}
