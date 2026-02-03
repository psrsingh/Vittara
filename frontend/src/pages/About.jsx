import React from "react";

const faqs = [
  {
    question: "What is Vittara?",
    answer:
      "Vittara is built to simplify everyday experiences through thoughtful design, clarity, and care. We focus on creating products that feel natural, purposeful, and human.",
  },
  {
    question: "What does Vittara believe in?",
    answer:
      "We believe great products come from empathy. Every decision we make is guided by usability, honesty, and long-term value.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. Vittara offers a 30-day free trial so you can explore the platform freely and confidently.",
  },
  {
    question: "Can Vittara grow with us?",
    answer:
      "Absolutely. Our platform is flexible by design, allowing plans to evolve as your needs change.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is workspace-based, keeping things transparent, predictable, and easy to manage.",
  },
  {
    question: "How does Vittara support its users?",
    answer:
      "We focus on real relationships. Our team listens, responds, and works alongside you whenever support is needed.",
  },
];

const FAQAboutVittara = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-8">

        {/* Intro */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            About Vittara
          </p>
          <h2 className="mt-4 text-4xl font-light text-gray-900 md:text-5xl">
            Designed with intention
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Vittara is shaped by simplicity, empathy, and trust.  
            Here’s what people often want to know about us.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-gray-200 to-transparent md:block" />

          <div className="space-y-14">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="group relative grid grid-cols-1 gap-6 md:grid-cols-12"
              >
                {/* Dot */}
                <div className="md:col-span-1 hidden md:flex justify-center">
                  <span className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-600 transition-transform group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="md:col-span-11 max-w-2xl">
                  <h3 className="text-lg font-medium text-gray-900 transition-colors group-hover:text-gray-800">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAboutVittara;
