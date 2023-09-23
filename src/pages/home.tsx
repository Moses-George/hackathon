import RulesSection from "@/components/rulesSection"; 
import CriteriaSection from "@/components/criteriaSection";
import FaQs from "@/components/faqs";
import IntroSection from "@/components/introSection";
import TitleSection from "@/components/titleSection";
import Timeline from "@/components/timeline";
import Rewards from "@/components/rewards";
import Partners from "@/components/Partners";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/layout/footer";


const Home = () => {

    return (
        <>
            <TitleSection />
            <IntroSection />
            <RulesSection />
            <CriteriaSection />
            <FaQs />
            <Timeline />
            <Rewards />
            <Partners />
            <PrivacyPolicy />
            <Footer />
        </>
    )
}

export default Home;