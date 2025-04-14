import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import TeamSection from './components/TeamSection'
import ProjectSection from './components/ProjectSection'
import DonationSection from './components/DonationSection'
import AppPromotion from './components/AppPromotion'
import Partners from './components/Partners'
import Footer from './components/Footer'
import CeoMessage from './components/CeoMessage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
      offset: 50
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Introduction />
      <CeoMessage />
      <TeamSection />
      <ProjectSection />
      <DonationSection />
      <AppPromotion />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
