import "../app/globals.css";
import Head from "next/head";

export default function SponsorUs() {
	return (
		<div>
			<Head>
				<title>Sponsor Us</title>
			</Head>
			<div className="container">
				<h1>Sponsor Us</h1>
				<p>
					We are looking for sponsors to help us cover the costs of running the conference. If you are interested in
					sponsoring, please contact us at <a href="mailto:hackrpi@rpi.edu">hackrpi@rpi.edu</a>
				</p>
			</div>
		</div>
	);
}
