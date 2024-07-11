import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProject from "../MyProject";
import Experiences from "../Experiences";

export default function Home () {
    return(
        <>
         <HeroSection />
         <AboutMe />
         <MyProject />
         <Experiences />
         <ContactMe />
         <Footer />
         
        </>
    )
}