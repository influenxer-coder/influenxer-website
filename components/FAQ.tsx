"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the subscription work?",
    answer:
      "Sign up for a monthly subscription to get unlimited access to all short movies in our library. New content is added regularly, and you can watch as many movies as you want. You can cancel anytime with no commitment.",
  },
  {
    question: "Do I need to sign up to watch movies?",
    answer:
      "Yes, you'll need to create an account and subscribe to access the short movies. We offer a 7-day free trial so you can explore our content before committing.",
  },
  {
    question: "Can I purchase books without a subscription?",
    answer:
      "Yes! You can purchase individual books to read without needing a subscription. However, subscribers get special member pricing on all books.",
  },
  {
    question: "What types of books do you feature?",
    answer:
      "We focus on indie books and novels from talented independent authors. Each book is carefully selected for its cinematic potential and unique storytelling.",
  },
  {
    question: "How often is new content added?",
    answer:
      "We add new short movies and books to our library monthly. Subscribers get early access to new releases and exclusive behind-the-scenes content.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! There's no commitment or long-term contract. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-center sm:text-5xl">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-purple-100 hover:shadow-xl transition-shadow"
            >
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold leading-7 text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`h-6 w-6 flex-none text-purple-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-base leading-6 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

