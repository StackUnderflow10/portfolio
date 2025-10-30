
import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"


const App = () => {
  return (
   <>
   <NavBar />
    <Hero />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
   </>
  )
}

export default App