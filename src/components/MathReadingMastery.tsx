import { FaRegLightbulb, FaRegChartBar } from "react-icons/fa";

export default function MathReadingMastery() {
  return (
    <section
      className="py-32"
      style={{ background: "var(--primary-green)" }} // bg now primary green
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 flex justify-center items-center gap-3" style={{ color: "var(--secondary-deep)" }}>
          <FaRegLightbulb className="text-3xl" color="var(--soft-gray)" />
          Math & Reading Mastery
        </h2>
        <p className="text-lg md:text-xl mb-3" style={{ color: "var(--secondary-deep)" }}>
          Boost essential skills through visually rich, interactive exercises tailored to help children excel in math and reading.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <div className="bg-white p-4 rounded-xl shadow w-full sm:w-64 text-center">
            <FaRegChartBar className="mx-auto text-2xl mb-1" color="var(--primary-green)" />
            <span className="block font-semibold" style={{ color: "var(--secondary-deep)" }}>
              Interactive Math Practice
            </span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow w-full sm:w-64 text-center">
            <FaRegLightbulb className="mx-auto text-2xl mb-1" color="var(--primary-green)" />
            <span className="block font-semibold" style={{ color: "var(--secondary-deep)" }}>
              Engaging Reading Activities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

