import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <WaitlistForm />
      <Footer />
    </div>
  );
}