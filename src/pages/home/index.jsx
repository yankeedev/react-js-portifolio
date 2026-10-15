import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Services from './Services';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
      </main>
      <Footer />
    </>
  );
}
