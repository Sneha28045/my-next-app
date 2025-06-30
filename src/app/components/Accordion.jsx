"use client";
import { useState } from "react";

const accordionData = [
  {
    title: "Do you accept insurance?",
    content: "No, but a superbill is provided for self-submission to your insurance provider.",
  },
  {
    title: "Are online sessions available?",
    content: "Yes, all virtual sessions are conducted via Zoom for your convenience.",
  },
  {
    title: "What is your cancellation policy?",
    content: "Please provide at least 24-hour notice to avoid cancellation fees.",
  },
];


export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl max-w-6xl mx-auto">
        <p class="font-bold text-4xl block text-left md:text-6xl text-darkMain1 pb-2 md:pb-4 md:flex gap-2 md:gap-4 relative text">Frequently Asked Questions</p>
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
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
            <div className="pb-4 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
