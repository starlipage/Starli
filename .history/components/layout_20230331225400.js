import AllQuestionSection from "./answerQuestion";
import { HeroSection } from "./heroSection";
import NavbarSection from "./navbar";
import SidSection from "./sidSection";
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
        </>
    )
}

export default Layout; 