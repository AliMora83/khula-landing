export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Khula Learning
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock a world of interactive, child-friendly learning designed for early development and joyful discovery.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#get-started"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-full shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}