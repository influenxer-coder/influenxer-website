"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the AI pitch copilot work?",
    answer:
      "Simply paste a prospect's website URL. Our AI analyzes their market position, generates comprehensive insights, creates a 90-day strategic plan, and builds a conversion-optimized pitch deck—all in minutes.",
  },
  {
    question: "What makes this different from other pitch tools?",
    answer:
      "Influenxers AI is built specifically for performance agencies. It combines market intelligence, strategic planning, and pitch deck generation in one workflow, saving hours of research and preparation time.",
  },
  {
    question: "Can I customize the pitch decks?",
    answer:
      "Yes, all pitch decks are fully customizable. You can edit messaging, add your agency branding, include case studies, and adjust recommendations to match your agency's approach.",
  },
  {
    question: "How accurate is the market analysis?",
    answer:
      "Our AI uses real-time data and industry benchmarks to provide accurate market insights. The analysis includes competitor research, market trends, and growth opportunities specific to each prospect.",
  },
  {
    question: "When will the Design Partner Program start?",
    answer:
      "The Design Partner Program is launching soon. We're accepting applications now for the first 25 agencies. Selected partners will be notified and onboarded in the coming weeks.",
  },
  {
    question: "What happens after the 3-month Design Partner Program?",
    answer:
      "Design Partners will continue to receive lifetime pricing and early access to new features. You'll also have the option to transition to our standard Agency Pod plan at your special rate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
            >
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`h-5 w-5 flex-none text-gray-500 transition-transform ${
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
                <p className="mt-4 text-sm leading-6 text-gray-600">
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

