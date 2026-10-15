import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Services from './Services';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
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
      </main>
      <Footer />
    </>
  );
}
