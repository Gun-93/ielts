import React from "react";
const testimonials = [
  {
    name: "Riya Singh",
    text: "Scored Band 8 with IELTSPro! The speaking sessions were a game changer.",
  },
  {
    name: "Arpitha Majee",
    text: "Mock tests helped me overcome exam anxiety. Highly recommended!",
  },
  {
    name: "Dipti Bhowmik",
    text: "The AI feedback system is amazing! I knew exactly where to improve.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-gray-800">- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
