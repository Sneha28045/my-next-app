"use client";

export default function Banner() {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center px-4 text-center overflow-hidden mx-auto">
      {/* Animated Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-pan"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=75')",
        }}
      >
        {/* Ocean Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#005c73cc] via-[#005c7388] to-[#005c7300]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl leading-10 font-bold mb-4 drop-shadow-lg font-[inherit]">
          Welcome To Our Website
        </h1>
        <p className="text-xl leading-8 mt-4 mb-4 drop-shadow font-[inherit]">
          Discover our amazing features and services crafted just for you.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-[#005c73] text-xl px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition font-[inherit] tracking-[inherit]"
        >
          Book a Free Consult
        </a>

        {/* Experience Text */}
        <p className="mt-6 text-xs leading-4 drop-shadow font-[inherit] underline">
          🧠 8 years of practice, 500+ sessions
        </p>
      </div>
    </section>
  );
}


