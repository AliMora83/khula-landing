export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Logo or Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold text-white tracking-wide mb-2">Khula Learning</span>
          <p className="text-sm max-w-xs text-gray-400">
            Khula is dedicated to empowering children through interactive, joyful, and holistic learning experiences—helping young minds grow into confident, curious learners ready for tomorrow.
          </p>
        </div>
        {/* Footer Navigation or Actions */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Khula Learning. All rights reserved.
      </div>
    </footer>
  );
}
