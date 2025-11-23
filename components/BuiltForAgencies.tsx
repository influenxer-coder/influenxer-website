const benefits = [
  "More pitches: Generate pitch-ready materials in minutes, not days",
  "Higher win rate: Data-driven insights and tailored messaging increase conversion",
  "Shared playbooks: Build and reuse winning strategies across your team",
];

export default function BuiltForAgencies() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for performance agencies
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Designed specifically for performance marketing agencies who need to move fast and win more.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-x-4">
                <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-600">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-base leading-7 text-gray-600">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

