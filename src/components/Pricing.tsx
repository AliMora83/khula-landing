export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Transparent Pricing
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Choose the plan that fits your needs. No hidden fees.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Basic</h3>
            <div className="text-4xl font-extrabold text-blue-600 mb-4">Free</div>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>✔️ 1 project</li>
              <li>✔️ Basic support</li>
              <li>✔️ Core features</li>
            </ul>
            <button className="mt-6 w-full rounded bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 text-white shadow-lg rounded-2xl px-8 py-10 w-full md:w-1/3 border-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-4xl font-extrabold mb-4">R199/mo</div>
            <ul className="mb-4 space-y-2">
              <li>✔️ Unlimited projects</li>
              <li>✔️ Priority support</li>
              <li>✔️ All features</li>
            </ul>
            <button className="mt-6 w-full rounded bg-white text-blue-700 py-2 font-medium hover:bg-blue-100 transition">Start Pro</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Enterprise</h3>
            <div className="text-4xl font-extrabold text-blue-600 mb-4">Custom</div>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>✔️ Custom solutions</li>
              <li>✔️ Dedicated support</li>
              <li>✔️ Advanced integrations</li>
            </ul>
            <button className="mt-6 w-full rounded bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
