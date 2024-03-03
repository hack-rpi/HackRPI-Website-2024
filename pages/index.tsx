import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";

export default function Home() {
	return (
		<div className="flex flex-col h-fit items-start justify-start w-screen px-8">
			<TitleComponent />
			<FAQPage />
		</div>
	);
}
