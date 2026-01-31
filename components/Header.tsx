export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
          Lalita
        </div>
        <a
          href="#signup"
          className="rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          Sign Up
        </a>
      </nav>
    </header>
  );
}

