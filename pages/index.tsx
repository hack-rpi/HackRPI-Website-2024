import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import MlhBanner from "@/components/mlh-banner/mlh-banner";

export default function Home() {
	return (
		<div className="flex flex-col items-start  sm:items-center justify-start w-full">
			<MlhBanner />
			<NavBar showOnScroll={true} />
			<div className="w-5/6 pl-4 sm:p-0">
				<TitleComponent />
				<FAQPage />
			</div>
		</div>
	);
}
