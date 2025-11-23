const benefits = [
  "Early access to all features",
  "Direct input on product roadmap",
  "Dedicated support channel",
  "Exclusive pricing for life",
  "Co-marketing opportunities",
];

export default function DesignPartnerProgram() {
  return (
    <section className="bg-indigo-600 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Design Partner Program
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
          Join 25 select performance agencies in our 3-month design partner program. Help shape the future of AI-powered pitch generation.
        </p>
        <div className="mx-auto mt-10 max-w-xl">
          <h3 className="text-xl font-semibold text-white">Benefits:</h3>
          <ul className="mt-6 space-y-3 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-x-3">
                <svg
                  className="h-6 w-6 flex-none text-indigo-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-base text-indigo-100">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <a
            href="#contact"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Apply now
          </a>
        </div>
      </div>
    </section>
  );
}

