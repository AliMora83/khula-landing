export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          About Khula Landing
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Khula helps you launch and grow with modern tools and design. Our mission is to empower your business through intuitive interfaces, reliable technology, and beautiful experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <div className="bg-blue-100 p-6 rounded-xl shadow w-full sm:w-auto">
            <span className="text-blue-700 font-semibold text-xl">Fast Deployment</span>
          </div>
          <div className="bg-purple-100 p-6 rounded-xl shadow w-full sm:w-auto">
            <span className="text-purple-700 font-semibold text-xl">Modern UI</span>
          </div>
          <div className="bg-pink-100 p-6 rounded-xl shadow w-full sm:w-auto">
            <span className="text-pink-700 font-semibold text-xl">Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
