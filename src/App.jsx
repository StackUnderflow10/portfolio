
import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contacts from "./sections/Contacts"




const App = () => {
  return (
   <>
   <NavBar />
    <Hero />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
    <Contacts />
   </>
  )
}

export default App