import React, { useMemo } from "react";
import Image from "next/image";

export interface ProjectDisplayProps {
	title: string;
	authors: string[];
	prizeCategory: string;
	description: string;
	imageUrl: string;
	imageOnLeft: boolean;
}

export default function ProjectDisplay(props: ProjectDisplayProps) {
	return (
		<>
			<DesktopProjectDisplay {...props} />
			<MobileProjectDisplay {...props} />
		</>
	);
}

function DesktopProjectDisplay(props: ProjectDisplayProps) {
	return (
		<div
			className={`hidden xl:flex  ${props.imageOnLeft ? "flex-row-reverse" : "flex-row"} items-center justify-between`}
		>
			<div className="w-1/2">
				<h1 className="font-sans font-bold font-white text-4xl">{props.prizeCategory}</h1>
				<h2 className="font-sans font-bold font-white text-2xl">{props.title}</h2>
				<hr />
				<p className="font-sans font-white text-lg text-nowrap">{props.authors.join(", ")}</p>
				<hr />
				<p className="mt-2">{props.description}</p>
			</div>
			<div className="w-2/5">
				<Image src={props.imageUrl} alt={props.title} height={500} width={500} />
			</div>
		</div>
	);
}

function MobileProjectDisplay(props: ProjectDisplayProps) {
	return (
		<div className="flex xl:hidden flex-col items-start justify-start w-fit">
			<div className="w-full flex items-center justify-center">
				<Image src={props.imageUrl} alt={props.title} height={500} width={500} className="" />
			</div>
			<div>
				<h1 className="font-sans font-bold font-white text-4xl">{props.prizeCategory}</h1>
				<h2 className="font-sans font-bold font-white text-2xl">{props.title}</h2>
				<hr />
				<p className="font-sans font-white text-lg">{props.authors.join(", ")}</p>
				<hr />
				<p className="mt-2">{props.description}</p>
			</div>
		</div>
	);
}
