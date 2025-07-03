// src/app/components/Contact.tsx
"use client";

import React, { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    contactMethod: "",
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    const updatedValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    if (validate()) {
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredTime: "",
        contactMethod: "",
        consent: false,
      });
    }
  };

  return (
    <div className="bg-white px-4 md:px-16 py-16 flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20">
      {/* Contact Info Section */}
      <div className="w-full max-w-sm md:ml-[-40px] border border-black rounded-md p-8 text-[#1e1e1e] space-y-6">
        <div>
          <h2 className="text-3xl leading-10 font-bold mb-1">Our Office</h2>
          <p className="text-lg leading-7">
            1287 Maplewood Drive<br />
            Los Angeles, CA 90026
          </p>
        </div>
        <div>
          <h2 className="text-[2.25rem] leading-[2.5rem] font-bold mb-1">Office Hours</h2>
          <p className="text-base leading-7">
            In-person: Tue & Thu, 10 AM – 6 PM<br />
            Virtual: Mon, Wed & Fri, 1 PM – 5 PM
          </p>
        </div>
        <div>
          <h2 className="text-[2.25rem] leading-[2.5rem] font-bold mb-1">Contact</h2>
          <p className="text-lg leading-7">📞 (323) 555-0192</p>
          <p className="text-lg leading-7">
            📧 <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-lg border border-black rounded-md p-8 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Get In Touch</h2>
        <p className="text-center text-base text-gray-800 mb-6">
          Simply fill out the brief fields below and Dr. Serena Blake will be in
          touch with you soon, usually within one business day. This form is safe,
          private, and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-[#1e1e1e]">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full border border-black rounded px-3 py-2" placeholder="Name" />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full border border-black rounded px-3 py-2" placeholder="you@example.com" />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
              className="w-full border border-black rounded px-3 py-2" placeholder="(555) 234–5678" />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}
              className="w-full border border-black rounded px-3 py-2 h-24" placeholder="What brings you here?" />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Preferred Time</label>
            <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleChange}
              className="w-full border border-black rounded px-3 py-2" placeholder="Mornings / Evenings" />
            {errors.preferredTime && <p className="text-red-600 text-sm">{errors.preferredTime}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Contact Method</label>
            <select name="contactMethod" value={formData.contactMethod} onChange={handleChange}
              className="w-full border border-black rounded px-3 py-2">
              <option value="">Select method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange}
              className="h-4 w-4" />
            <label className="text-sm">I agree to be contacted</label>
            {errors.consent && <p className="text-red-600 text-sm ml-2">{errors.consent}</p>}
          </div>


          <button type="submit"
            className="w-full bg-[#1e1e1e] text-white py-2 rounded hover:bg-black mt-2">
            Submit
          </button>

          <p className="text-xs text-center text-gray-600 mt-2">
            ⓘ You agree to receive messages from Dr. Blake by submitting this form.
          </p>
        </form>
      </div>
    </div>
  );

}
