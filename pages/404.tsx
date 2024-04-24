import logo from "@/public/HackRPI-logo-blue.png";
import NextImg from "next/image";
import NavBarLink from "@/components/nav-bar/nav-bar-link";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import "../app/globals.css";

export default function Custom404() {
    return (
        <div className="flex flex-col items-start desktop:items-center justify-start">
            <NavBar showOnScroll={false} />
            <div className="error-message text-center mt-10">
                <h1 className="text-4xl font-bold text-red-500">Error - 404: No page</h1>
                <p>Sorry, the page you're looking for could not be found.</p>
            </div>
            <div className="mt-10">
                <NavBarLink href="/">
                    <NextImg alt="HackRPI Logo" aria-label="Home Page" src={logo} className="w-18 image-full" />
                </NavBarLink>
            </div>
            <Footer />
        </div>
    );
}
