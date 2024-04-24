import Footer from "@/components/footer/footer";
import FAQPage from "@/components/faq/faq";
import NavBar from "@/components/nav-bar/nav-bar";
import Head from "next/head";
import TitleComponent from "@/components/title-components/title";
import "../app/globals.css";

export default function Custom404() {
    return (
        <div className="flex flex-col items-start desktop:items-center justify-start">
				<NavBar showOnScroll={true} />
            <div className = "lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className = "xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className = "relative">
                        <div className = "absolute">
                            <div className = "">
                                <h1 className = "my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you've found the
                                    doorway to the great nothing
                                </h1>
                                <p className = "my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                <button className ="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div className="absolute w-3 top-[500px] desktop:top-[100vh] right-6 2xs:right-8 h-[1500px] desktop:h-[1000px] bg-hackrpi-primary-blue"></div>
            <div
                className={`absolute bg-hackrpi-secondary-dark-blue top-[460px] desktop:top-[100vh] w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-1.5 2xs:right-3.5`}
            ></div>
            <div
                className={`absolute bg-hackrpi-secondary-dark-blue top-[1960px] w-12 h-12 rounded-full  border-[6px] border-hackrpi-primary-blue transition-colors duration-300 z-0 right-1.5 2xs:right-3.5`}
            ></div>
    </div>
    );
}