"use client";
import { useState, useEffect } from "react";

// Accordion data
const accordionData = [
  {
    title: "Do you accept insurance?",
    content:
      "No, but a superbill is provided for self-submission to your insurance provider.",
  },
  {
    title: "Are online sessions available?",
    content:
      "Yes, all virtual sessions are conducted via Zoom for your convenience.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "Please provide at least 24-hour notice to avoid cancellation fees.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
  }, []);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!hasMounted) return null;

  return (
    <div className="bg-[#b5dbdf] flex flex-col">
      <section className="flex-grow pt-16 pb-16">
        <div className="max-w-screen-lg mx-auto px-4 font-sans">
          <p className="font-bold text-[3.75rem] leading-[1] text-left text-green-900 mb-10">
            Frequently Asked Questions
          </p>

          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-6 text-left text-2xl md:text-3xl font-semibold text-gray-800"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="pb-4 pt-0 font-para text-xl text-gray-700">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

