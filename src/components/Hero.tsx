export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-[var(--primary-green)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(28,53,45,0.08),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to{' '}
<span
  className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-deep)] bg-clip-text text-transparent"
>
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
            className="px-8 py-4 text-white text-md font-semibold rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            style={{
              background: "linear-gradient(to right, var(--primary-green), var(--secondary-deep))"
            }}
          >
            Get Started
          </a>

          <a
            href="#learn-more"
            className="px-8 py-4 bg-white text-gray-800 text-md font-normal rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to from-white to-transparent" />
    </section>
  );
}