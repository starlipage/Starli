import AllQuestionSection from "./answerQuestion";
import { HeroSection } from "./heroSection";
import IdSection from "./idSection";
import NavbarSection from "./navbar";
import SidSection from "./sidSection";
import { SocialmediaSection } from "./socialmediaSection";
import { TitleSection } from "./titleSection";
import { TokenomicsSection } from "./tokenomicsSection";

function Layout() {
    return (
        <>
            <NavbarSection />
            <TitleSection />
            <HeroSection />
            <SidSection />
            <AllQuestionSection />
            <TokenomicsSection />
            <SocialmediaSection />
            <IdSection />
        </>
    )
}

export default Layout; 