import NextImage from "next/image";

export default function MlhBanner() {
	return (
		<a
			id="mlh-trust-badge"
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
			target="_blank"
			className="block max-w-[80] desktop:max-w-[100px] min-w-[60px] w-[8%] h-auto fixed right-[5px] lg:right-[25px]  top-0 z-[10000] "
		>
			<NextImage
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
				alt="Major League Hacking 2024 Hackathon Season"
				width={100}
				height={100}
				priority={true}
			/>
		</a>
	);
}
