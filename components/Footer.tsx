export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-900 via-pink-900 to-orange-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
              Lalita
            </h3>
            <p className="text-purple-200 max-w-md">
              Transforming indie books into stunning short movies. Discover stories that inspire creativity and freedom.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#signup" className="hover:text-white transition-colors">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-purple-800 pt-8 text-center text-sm text-purple-300">
          <p>&copy; {new Date().getFullYear()} Lalita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
