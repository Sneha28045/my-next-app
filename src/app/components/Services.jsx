// app/components/Services.tsx
const services = [
  {
    title: "Anxiety & Stress Management",
    description: "Personalized therapy to help reduce overwhelming stress and anxiety using evidence-based techniques like CBT and mindfulness.",
    image: "/anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description: "Helping couples and individuals strengthen their communication, resolve conflicts, and build healthier relationships.",
    image: "/relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    description: "Support for healing from emotional trauma, PTSD, and painful experiences with empathy and clinical expertise.",
    image: "/trauma.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-12 md:grid-cols-3">
        {services
          .filter((service) =>
            ["Web Development", "UI/UX Design"].includes(service.title)
          )
          .map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
