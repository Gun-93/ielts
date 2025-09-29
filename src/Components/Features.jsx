import React from "react";
const features = [
  {
    title: "Speaking Practice",
    desc: "Daily speaking sessions with certified IELTS trainers.",
    icon: "💬",
  },
  {
    title: "Mock Tests",
    desc: "Full-length mock tests that simulate real exam conditions.",
    icon: "📝",
  },
  {
    title: "AI Band Score",
    desc: "Instant feedback and AI-based band score prediction.",
    icon: "🤖",
  },
  {
    title: "Personalized Plans",
    desc: "Tailored study plans to match your current skill level.",
    icon: "🎯",
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose <span className="text-blue-600">IELTSPro</span>?
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
