export default function Footer() {
	return (
		<div className="bg-hackrpi-secondary-light-blue w-full min-h-64 h-fit absolute bottom-0">
			<div className="flex flex-col justify-between items-center p-2 min-h-64 h-fit">
				<h1 className="text-4xl font-bold w-3/4">
					Join us this coming November 9-10, 2024 to learn, hack, and make our cities better!
				</h1>
				<div className="flex justify-around items-center w-fit px-4 m-2"></div>
				<h3 className="text-xl font-bold">(c) 2024 HackRPI</h3>
				<h3 className="text-xl font-bold">Made with ❤️ by HackRPI</h3>
				<a href="#home" className="text-xl font-bold">
					Return to top
				</a>
			</div>
		</div>
	);
}

function Card({svgPath, link, name, bgGradienFrom, bgGradientTo}:{svgPath: string, link: string, name: string, bgGradienFrom: string, bgGradientTo: string}){
	return (
		
	);
}
