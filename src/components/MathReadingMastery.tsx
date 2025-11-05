import { FaRegLightbulb, FaRegChartBar } from "react-icons/fa";

export default function MathReadingMastery() {
  return (
    <section className="bg-yellow-50 py-14">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex justify-center items-center gap-3">
          <FaRegLightbulb className="text-yellow-400 text-3xl" />
          Math & Reading Mastery
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-3">
          Boost essential skills through visually rich, interactive exercises tailored to help children excel in math and reading.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <div className="bg-white p-4 rounded-xl shadow w-full sm:w-64 text-center">
            <FaRegChartBar className="mx-auto text-indigo-500 text-2xl mb-1" />
            <span className="block font-semibold text-gray-800">Interactive Math Practice</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow w-full sm:w-64 text-center">
            <FaRegLightbulb className="mx-auto text-yellow-400 text-2xl mb-1" />
            <span className="block font-semibold text-gray-800">Engaging Reading Activities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
