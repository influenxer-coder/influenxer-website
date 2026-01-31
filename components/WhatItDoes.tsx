const features = [
  {
    title: "Discover Hidden Gems",
    description: "Explore curated indie books and novels from talented authors. Each story is carefully selected for its cinematic potential.",
    icon: "📚",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Watch Short Movies",
    description: "Experience stories come alive through beautifully crafted short films. Each movie captures the essence of the original book.",
    icon: "🎬",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "Read Original Books",
    description: "Purchase and read the original books that inspired the movies. Support indie authors and dive deeper into the stories.",
    icon: "📖",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Monthly Access",
    description: "Subscribe monthly to unlock unlimited access to our library of short movies. New content added regularly.",
    icon: "✨",
    gradient: "from-blue-500 to-purple-500",
  },
];

export default function WhatItDoes() {
  return (
    <section id="features" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            From page to screen, discover stories that inspire
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold leading-7 text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

