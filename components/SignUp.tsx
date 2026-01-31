export default function SignUp() {
  return (
    <section id="signup" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to Start?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/90 sm:text-2xl">
          Join Lalita today and unlock a world of stories brought to life
        </p>
        
        <div className="mt-12">
          <form className="mx-auto max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-0 px-6 py-4 text-gray-900 shadow-lg ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-white/20 sm:text-lg"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Sign Up Free
              </button>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Start your 7-day free trial • No credit card required
            </p>
          </form>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { number: "100+", label: "Short Movies" },
            { number: "50+", label: "Indie Books" },
            { number: "New", label: "Content Monthly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white sm:text-5xl">
                {stat.number}
              </div>
              <div className="mt-2 text-lg text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
