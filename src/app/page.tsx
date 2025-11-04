import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <Hero />
        <About />
        <Pricing />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
