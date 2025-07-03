export default function About() {
  return (
    <section className="py-16 bg-white flex items-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/images/headshot.jpg"
            alt="Profile picture"
            className="rounded-lg shadow-lg w-[380px] md:w-[480px] h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="font-sans text-gray-800">
          <h2 className="text-[3rem] leading-[1] font-bold mb-6 text-[#6d4d3f]">
            Dr. Serena Blake, PsyD (Clinical Psychologist)
          </h2>
          <p className="mb-6 text-[1.5rem] leading-8">8 years of practice, 500+ sessions</p>
          <p className="mb-6 text-[1.5rem] leading-8">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
