import Image from "next/image";
import registerImage from "../pages/about-us_images/register.png";
import whenwhereImage from "../pages/about-us_images/w&w.png";

const AboutSection: React.FC = () => {
    const paragraphStyle: React.CSSProperties = {
        marginBottom: "10px",
        width: "100%", // Adjusted width to fill the container
        minWidth: "300px",
        textAlign: "left",
    };    
    
    return (
        <div id="about" className="w-full mx-auto mt-12 mb-8 flex flex-col lg:flex-row items-start"> {/* Adjusted layout for different screen sizes */}
            <div className="w-full lg:w-2/5 lg:ml-1/6 ml-auto"> {/* Adjusted layout for different screen sizes */}
                <h1 className="text-white text-4xl mb-4 font-bold font-sans-Helvetica">About HackRPI</h1>
                
                <div style={paragraphStyle}>
                    <>
                        <p style={paragraphStyle}>
                            HackRPI 11 is the 11th annual intercollegiate hackathon hosted by RPI for students not only from RPI but
                            also from all around the world. Get swag and free food as you compete for exciting prizes! With a broad
                            range of workshops and mentors on-site, there&apos;s no experience necessary to attend. Hackers will also
                            have the opportunity to network with our fantastic sponsors from the companies that make our event
                            possible. This year&apos;s theme,{" "}
                            <span className="font-bold text-hackrpi-primary-light-green">Urban Upgrade</span> is an ode to a decade
                            inspiring students and HackRPI!
                        </p>
                        <p style={paragraphStyle}>
                            Come join us this November 9-10, 2024 to hack, learn, and meet other people! We are a motivated team of
                            RPI students who share a passion for exploring the bounds of computer science and a commitment to
                            organizing a fantastic event. Our team of students from every grade level works together to plan the
                            hackathon and find sponsors to bring the event together.
                        </p>
                        <p style={paragraphStyle}>
                            We believe that HackRPI is a vital part of our school. Our goal is to inspire and challenge innovators,
                            creators, developers, and entrepreneurs in New York&apos;s Tech Valley and beyond. We help attendees
                            develop their skills, explore new technologies, and turn their interests and visions into opportunities.
                            Staying true to our slogan &quot;Why Not Code the World?&quot;
                        </p>
                    </>
                </div>
            </div>
            
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start mt-4 lg:mt-0"> {/* Adjusted layout for different screen sizes */}
                <div className="flex flex-col items-center mb-2 lg:mb-0"> {/* Adjusted layout */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Image src={registerImage} alt="Register" width={3000} height={200} /> {/* Adjusted image size */}
                </div>
                <br></br>
                <div className="flex flex-col items-center mt-2 lg:mt-0"> {/* Adjusted layout */}
                    <Image src={whenwhereImage} alt="When & Where" width={3000} height={2000} /> {/* Adjusted image size */}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
