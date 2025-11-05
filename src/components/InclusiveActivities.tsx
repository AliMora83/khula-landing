import { FaBookOpen, FaCalculator, FaFlask, FaPaintBrush } from "react-icons/fa";

export default function InclusiveActivities() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 drop-shadow">
          All-Inclusive Learning Activities
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore engaging lessons that cover reading, math, science, art, and more—making every subject accessible and enjoyable for young children.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <FeatureCard icon={<FaBookOpen />} title="Reading" />
          <FeatureCard icon={<FaCalculator />} title="Math" />
          <FeatureCard icon={<FaFlask />} title="Science" />
          <FeatureCard icon={<FaPaintBrush />} title="Art" />
        </div>
      </div>
    </section>
  );
}

// Simple card subcomponent for each subject
function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
      <div className="text-4xl text-indigo-500 mb-3">{icon}</div>
      <h3 className="text-xl font-medium text-gray-800">{title}</h3>
    </div>
  );
}
