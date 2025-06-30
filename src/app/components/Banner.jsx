// app/components/Banner.tsx
export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Our Website
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Discover our amazing features and services crafted just for you.
      </p>
      <a
        href="#get-started"
        className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </section>
  );
}
