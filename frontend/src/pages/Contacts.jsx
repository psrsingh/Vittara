import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Contact
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-gray-900">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We’d love to hear from you. Please fill out the form below.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            onChange={handleChange}
            className="input"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
            className="input"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={5}
            placeholder="Leave us a message..."
            required
            onChange={handleChange}
            className="input resize-none"
          />

          {/* Privacy */}
          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              name="privacy"
              required
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
            />
            <span>
              You agree to our{" "}
              <a
                href="#"
                className="font-medium underline underline-offset-4 hover:text-gray-900"
              >
                privacy policy
              </a>
              .
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 py-3 text-white font-medium transition hover:bg-gray-800 active:scale-[0.98]"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Reusable input style */}
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          color: #111827;
          transition: all 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #111827;
          box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
