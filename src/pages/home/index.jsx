import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Services from './Services';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import ContactMe from './ContactMe';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <AboutMe />
        <Portfolio />
        <Testimonials />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
