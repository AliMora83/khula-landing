import { FaRoute, FaAward } from "react-icons/fa";

export default function GuidedLearningPath() {
  return (
    <section className="bg-gradient-to-tr from-purple-50 via-white to-green-50 py-32">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side: Heading and Paragraph */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 drop-shadow justify-center md:justify-start" style={{ color: "var(--secondary-deep)" }}>
            <FaRoute className="text-3xl" color="var(--accent-purple)" />
            Guided Learning Path
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "var(--secondary-deep)" }}>
            Empower children to progress with structured programs that lead them through each step, encouraging growth and rewarding achievement across subjects.
          </p>
        </div>
        {/* Right Side: Feature Cards */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
            <FaRoute className="text-2xl mb-1" color="var(--accent-purple)" />
            <span className="font-medium" style={{ color: "var(--secondary-deep)" }}>
              Step-by-step Growth
            </span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
            <FaAward className="text-2xl mb-1" color="var(--accent-purple)" />
            <span className="font-medium" style={{ color: "var(--secondary-deep)" }}>
              Celebrate Achievement
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
