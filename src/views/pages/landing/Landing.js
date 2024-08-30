import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";
import Client from "./Client";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import StartUp from "./StartUp";
import Testimonial from "./Testimonial";

const Landing = () => {
    return(<div className="landing-fuild-wrapper">
        <Header />
        <Banner />
        {/* <Client /> */}
        <AboutUs />
        <StartUp />
        <Testimonial />        
        <Features />
        <HowItWorks />
        <Blog />
        <Footer />
    </div>)
}

export default Landing;