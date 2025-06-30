// app/components/About.tsx
// app/components/About.tsx
export default function About() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src="/headshot.jpg" // Make sure to put your image in /public
            alt="Profile picture"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Dr. Serena Blake</h2>
          <p className="text-gray-600 mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>

          {/* Session Fees */}
          <h3 className="text-2xl font-semibold mb-4 mt-8">Session Fees</h3>
          <p className="text-gray-700 mb-2">$200 / individual session</p>
          <p className="text-gray-700">$240 / couples session</p>
        </div>
      </div>
    </section>
  );
}
