import { HeroSection } from "./heroSection";
import NavbarSection from "./navbar";
import SidSection from "./sidSection";
import { TitleSection } from "./titleSection";

function Layout() {
    return (
        <>
            <NavbarSection />
            <TitleSection />
            <HeroSection />
            <SidSection />
        </>
    )
}

export default Layout; 