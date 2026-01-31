export default function SocialMedia() {
  const platforms = [
    {
      name: "TikTok",
      icon: "🎵",
      description: "Watch behind-the-scenes and movie previews",
      gradient: "from-pink-500 to-purple-500",
      url: "#",
    },
    {
      name: "YouTube",
      icon: "📺",
      description: "Full movie trailers and author interviews",
      gradient: "from-red-500 to-pink-500",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "📸",
      description: "Visual storytelling and daily inspiration",
      gradient: "from-purple-500 via-pink-500 to-orange-500",
      url: "#",
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-gradient-to-b from-white to-purple-50/20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Follow Our Journey
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Join us on social media for exclusive content, updates, and inspiration
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="group relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${platform.gradient} text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {platform.name}
              </h3>
              <p className="text-center text-gray-600">
                {platform.description}
              </p>
              <div className="mt-6 text-sm font-semibold text-purple-600 group-hover:text-purple-700">
                Follow us →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
