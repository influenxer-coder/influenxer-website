export default function Hero() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 gradient-animate opacity-50"></div>
      
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 px-4 py-1.5 text-sm font-semibold text-purple-900">
          ✨ Stories Come to Life
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Stories Come Alive
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            On Screen
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-gray-700 sm:text-2xl">
          Discover hidden literary gems transformed into stunning short films. 
          <span className="font-semibold text-purple-600"> Subscribe monthly</span> to access exclusive content, 
          or <span className="font-semibold text-pink-600">purchase books</span> to read the original stories.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#signup"
            className="group rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            Start Your Journey →
          </a>
          <a
            href="#features"
            className="rounded-full border-2 border-purple-300 px-8 py-4 text-lg font-semibold text-purple-700 hover:bg-purple-50 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-8 opacity-60">
          <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-pink-500 animate-pulse delay-75"></div>
          <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
}

