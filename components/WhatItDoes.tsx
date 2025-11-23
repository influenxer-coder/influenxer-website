const features = [
  {
    title: "Prospect URL",
    description: "Simply paste a prospect's website URL to get started. Our AI analyzes their digital presence, market position, and growth opportunities.",
  },
  {
    title: "Market Scan",
    description: "Automated deep-dive into the prospect's industry, competitors, and market dynamics. Get comprehensive insights in seconds.",
  },
  {
    title: "90-Day Plan",
    description: "AI-generated strategic roadmap tailored to the prospect's specific needs. Data-driven recommendations for immediate impact.",
  },
  {
    title: "Pitch Deck",
    description: "Professional, conversion-optimized pitch deck ready to present. Customized messaging, case studies, and ROI projections.",
  },
];

export default function WhatItDoes() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What it does
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            From prospect URL to winning pitch deck in minutes
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <span className="text-lg font-semibold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

