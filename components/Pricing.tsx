export default function Pricing() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/30 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Simple Monthly Subscription
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Unlock unlimited access to our library of short movies
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="relative flex flex-col rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1 shadow-2xl">
            <div className="rounded-3xl bg-white p-8 sm:p-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Monthly Membership</h3>
                <p className="mt-4 text-lg text-gray-600">Access all short movies and exclusive content</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    $9.99
                  </span>
                  <span className="text-xl text-gray-600">/month</span>
                </div>
                <ul className="mt-10 space-y-4 text-left">
                  {[
                    "Unlimited access to all short movies",
                    "New content added monthly",
                    "Exclusive behind-the-scenes content",
                    "Early access to new releases",
                    "Purchase books at member prices",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="h-6 w-6 flex-none text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className="mt-10 block w-full rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-8 py-4 text-center text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Start Your Subscription
                </a>
                <p className="mt-6 text-sm text-gray-500">
                  Cancel anytime • No commitment • 7-day free trial
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-purple-600">Also available:</span> Purchase individual books to read
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

