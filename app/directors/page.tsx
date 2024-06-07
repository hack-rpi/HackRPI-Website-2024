"use client";

import { Amplify } from "aws-amplify";
import * as Auth from "@aws-amplify/auth";
import { Authenticator } from "@aws-amplify/ui-react";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import "@aws-amplify/ui-react/styles.css";
import "@/app/globals.css";
import amplify_outputs  from "@/amplify_outputs.json";

Amplify.configure(amplify_outputs);

export default function Page() {
	return (
		<div>
			<NavBar showOnScroll={false} />
			<div className="mt-24 font-sans">
					<Authenticator hideSignUp={true}>
						<div><button onClick={() => Auth.signOut()}>sign out</button></div>
					</Authenticator>
			</div>
			<Footer />
		</div>
	);
}
