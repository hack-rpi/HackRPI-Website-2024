"use client";

import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
// import Image from "next/image";
import "@/app/globals.css";

export default function Page() {
	return (
		<div className="flex flex-col w-full h-fit min-h-screen items-center justify-center">
			<NavBar showOnScroll={false} />
			<div className="flex flex-col w-full flex-grow flex-shrink basis-auto mt-24 lg:mt-16 items-center">
				<h1 className="text-4xl sm:text-6xl font-bold font-sans my-4 text-center">Judging Schedule</h1>
				<p className="text-lg sm:text-xl font-sans my-4 text-center w-11/12">
					Please make sure you are at your assigned room at least 5 minutes before your assigned time! Thank you!
				</p>
				<p className="text-lg sm:text-xl font-sans my-4 text-center">
					The judging schedule will be released around 10:45 am on November 10th.
				</p>
				{/* <div className="bg-pink-500 h-fit w-2/3">
                    <div className="h-[500px]"></div>
                </div> */}
				{/* <div className="w-11/12 desktop:w-2/3 h-fit">
					<Image
						src="/images/judging-schedule.png"
						alt="Judging Schedule"
						width={1200}
						height={1200}
						className="rounded-lg"
					/>
				</div> */}
			</div>
			<Footer />
		</div>
	);
}
