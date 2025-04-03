import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
