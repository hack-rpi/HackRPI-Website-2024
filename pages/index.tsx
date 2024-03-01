import TitleComponent from "@/components/title-components/title";
import "../app/globals.css";

export default function Home() {
	return (
		<div className="flex flex-col h-fit items-center justify-start">
			<TitleComponent />
		</div>
	);
}
