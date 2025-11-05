import { FaSmile, FaCheckCircle, FaShieldAlt, FaStar } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <FaSmile className="text-green-400 text-2xl" />
          Playful, Trusted, and Flexible
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-7">
          Choose the path that fits you: enjoy a safe, expertly crafted, and playful environment with zero cost—or unlock premium features and enhanced progress with a paid plan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-start mt-4">

          {/* Free Option Card */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <FaCheckCircle className="text-green-400 text-3xl mb-2" />
            <span className="text-2xl font-semibold text-gray-900 mb-2">Free</span>
            <ul className="text-gray-700 text-left mb-2 space-y-1">
              <li>Access core learning activities</li>
              <li>Safe, child-friendly experience</li>
              <li>Build confidence & social-emotional skills</li>
            </ul>
            <span className="font-medium text-green-500">R0 / month</span>
          </div>

          {/* Paid Option Card */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center border-2 border-yellow-200">
            <FaStar className="text-yellow-400 text-3xl mb-2" />
            <span className="text-2xl font-semibold text-gray-900 mb-2">Paid</span>
            <ul className="text-gray-700 text-left mb-2 space-y-1">
              <li>Unlock advanced features</li>
              <li>Track progress & achievements</li>
              <li>Personalized learning paths</li>
              <li>Priority support</li>
            </ul>
            <span className="font-medium text-yellow-500">R49 / month</span>
          </div>

        </div>
      </div>
    </section>
  );
}
