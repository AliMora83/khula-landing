'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Be among the first to experience the future of talent matching.
          Sign up now to get early access.
        </p>
        {submitted ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Thank You!
            </h3>
            <p className="text-green-700">
              You're on the list! We'll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none flex-1 max-w-md"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}