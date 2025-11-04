export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Khula</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We're building the future of work by connecting talented professionals
              with opportunities that match their skills and aspirations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Khula?</h3>
            <p className="text-gray-600">
              Our platform leverages AI to ensure the best matches between talent
              and opportunities, making the hiring process faster and more effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}