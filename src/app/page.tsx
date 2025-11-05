import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InclusiveActivities from "@/components/InclusiveActivities";
import MathReadingMastery from "@/components/MathReadingMastery";
import GuidedLearningPath from "@/components/GuidedLearningPath";
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
        <div id="activities"><InclusiveActivities /></div>
        <div id="math-reading"><MathReadingMastery /></div>
        <div id="learning-path"><GuidedLearningPath /></div>
        <div id="about"><About /></div>
        <div id="pricing"><Pricing /></div>
        <div id="waitlist"><WaitlistForm /></div>
      <Footer />
    </div>
  );
}