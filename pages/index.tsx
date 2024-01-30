import Link from 'next/link';
// import { useRouter } from 'next/router';

export default function Home() {
	return (
		<div>
			<h1 className="font-sans">Home</h1>
			<p>
				Welcome to HackRPI 2024! We are still in the process of building this website, so please check back later for
				more information.
			</p>
			<Link href="/sponsor-us">Sponsor Us</Link>
			<br />
			<Link href="/faq">faqPage</Link>
		</div>
	);
}

// In Next.js, you don't need to manually create a router. 
// Each file inside the 'pages' directory becomes a route automatically.