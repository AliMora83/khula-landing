export default function WaitlistForm() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-lg mx-auto px-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">
          Join Our Waitlist
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Be the first to get updates and early access to new features. Enter your email below!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Notify Me
          </button>
        </form>
        <div className="mt-6 text-xs text-gray-500 text-center">
          We respect your privacy. No spam ever.
        </div>
      </div>
    </section>
  );
}
