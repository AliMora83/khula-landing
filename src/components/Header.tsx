import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Khula
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </Link>
        </div>
        <Link
          href="#waitlist"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
}