import Link from 'next/link';

export default function Header() {
  return (
<header className="bg-light/60 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Khula
        </Link>
        <div className="hidden md:flex space-x-8">
<ul className="flex gap-6 font-normal text-md">
  <li>
    <a
      href="#activities"
      className="hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
    >
      Activities
    </a>
  </li>
  <li>
    <a
      href="#math-reading"
      className="hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
    >
      Math/Reading
    </a>
  </li>
  <li>
    <a
      href="#learning-path"
      className="hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
    >
      Guidance
    </a>
  </li>
  <li>
    <a
      href="#pricing"
      className="hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
    >
      Pricing
    </a>
  </li>
  <li>
    <a
      href="#about"
      className="hover:text-accent hover:font-bold hover:scale-105 transition-all duration-200"
    >
      About
    </a>
  </li>
</ul>

        </div>
        <Link
              href="#waitlist"
              className="px-6 py-2 rounded-lg text-white transition transform hover:scale-105 duration-300"
              style={{ backgroundColor: "var(--secondary-deep)" }}
            >
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
}