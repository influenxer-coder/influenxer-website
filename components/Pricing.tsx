const tiers = [
  {
    name: "Solo",
    price: "Coming soon",
    description: "Perfect for individual consultants and freelancers",
    features: [
      "Unlimited pitch generation",
      "Basic market insights",
      "Standard pitch templates",
      "Email support",
    ],
  },
  {
    name: "Agency Pod",
    price: "Coming soon",
    description: "For small to medium performance agencies",
    features: [
      "Everything in Solo",
      "Team collaboration",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
    ],
    popular: false,
  },
  {
    name: "Design Partner",
    price: "Special pricing",
    description: "Exclusive 3-month program for 25 agencies",
    features: [
      "Everything in Agency Pod",
      "Early access to features",
      "Direct product input",
      "Dedicated support",
      "Lifetime pricing",
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose the plan that fits your agency
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg ${
                tier.popular
                  ? "bg-indigo-600 ring-2 ring-indigo-600"
                  : "bg-gray-50 ring-1 ring-gray-900/5"
              } p-8`}
            >
              {tier.popular && (
                <p className="text-sm font-semibold text-indigo-200">
                  Most popular
                </p>
              )}
              <h3
                className={`mt-4 text-2xl font-semibold ${
                  tier.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-6 ${
                  tier.popular ? "text-indigo-100" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>
              <p
                className={`mt-6 text-3xl font-bold ${
                  tier.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {tier.price}
              </p>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.popular ? "text-indigo-100" : "text-gray-600"
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${
                        tier.popular ? "text-indigo-200" : "text-indigo-600"
                      }`}
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
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 ${
                  tier.popular
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

