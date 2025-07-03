"use client";

import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn how to manage anxiety, panic attacks, and chronic stress with proven techniques like CBT and mindfulness. Dr. Blake helps clients identify triggers, build resilience, and restore emotional balance for a calmer daily life.",
    image: "/ui-ux.webp",
  },
  {
    title: "Relationship Counseling",
    description:
      "Whether you're navigating a breakup or seeking to strengthen your partnership, relationship counseling provides a safe space to explore challenges, improve communication, and rebuild trust. Sessions are available for individuals and couples.",
    image: "/web-development.webp",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past emotional wounds through supportive, evidence-based therapy. Dr. Blake guides clients through trauma recovery using approaches like EMDR, mindfulness, and narrative therapy to reclaim peace and empowerment.",
    image: "/images/recovery.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-[#f8f6f1]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">Services & Specialties</h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-green-900">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

       
      
      </div>
    </section>
  );
}

