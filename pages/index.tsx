import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import MlhBanner from "@/components/mlh-banner/mlh-banner";

export default function Home() {
	return (
		<div className="flex flex-col items-start  desktop:items-center justify-start w-full">
			<MlhBanner />
			<NavBar showOnScroll={true} />
			<div className="w-5/6 desktop:w-full pl-8 desktop:px-8">
				<TitleComponent />
				<FAQPage />
			</div>
		</div>
	);
}
