import TitleComponent from "@/components/title-components/title";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import MlhBanner from "@/components/mlh-banner/mlh-banner";

export default function Home() {
	return (
		<div className="flex flex-col items-start  desktop:items-center justify-start overflow-x-hidden overflow-y-auto">
			<MlhBanner />
			<NavBar showOnScroll={true} />
			<div className="w-5/6 desktop:w-full pl-8 desktop:px-8">
				<TitleComponent />
				<FAQPage />
			</div>

			<div className="absolute w-3 top-[500px] desktop:top-[100vh] right-8 h-[1300px] desktop:h-[1000px] bg-hackrpi-primary-blue"></div>
			<div className="w-3 h-[75px] rotate-45 absolute top-[440px] right-2 desktop:hidden bg-hackrpi-primary-blue"></div>
		</div>
	);
}
