import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Connect Talent with
          <span className="text-blue-600"> Opportunity</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Khula is revolutionizing the way companies find talent and professionals
          discover their next career move.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#waitlist"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Join Waitlist
          </Link>
          <Link
            href="#about"
            className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition text-lg font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}