import Link from 'next/link';

export default function Header() {
  return (
<header className="bg-light/60 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Khula
        </Link>
        <div className="hidden md:flex space-x-8">
  <ul className="flex gap-6 font-bold">
    <li>
      <a href="#activities" className="hover:text-accent transition-colors">Activities</a>
    </li>
    <li>
      <a href="#math-reading" className="hover:text-accent transition-colors">Math/Reading</a>
    </li>
    <li>
      <a href="#learning-path" className="hover:text-accent transition-colors">Guidance</a>
    </li>
    <li>
      <a href="#about" className="hover:text-accent transition-colors">About</a>
    </li>
    <li>
      <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
    </li>

  </ul>
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