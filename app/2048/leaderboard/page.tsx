"use client";

import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";

export default function (){
    return (
        <div className="flex flex-col items-start desktop:items-center justify-start w-full h-full">
            <NavBar showOnScroll={false}></NavBar>

            <div className="flex-grow flex-shrink basis-auto">
                
            </div>

            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </div> 
    )
}