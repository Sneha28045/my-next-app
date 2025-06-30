'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    contactMethod: '',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Please share your message';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.contactMethod.trim()) newErrors.contactMethod = 'Select a contact method';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-900">
      <div className="bg-white max-w-md w-full rounded-xl p-6 shadow-md border">
        <h2 className="text-center text-xl font-bold text-green-900 mb-2">Get In Touch</h2>
        <p className="text-center text-sm text-gray-700 mb-5">
          Simply fill out the brief fields below and Dr. Norman will be in touch with you soon,
          usually within one business day. This form is safe, private, and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="(555) 234-5678"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="What brings you here?"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none"
          />
          {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

          <input
            type="text"
            name="preferredTime"
            placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.preferredTime && <p className="text-red-600 text-sm">{errors.preferredTime}</p>}
          <p className="text-xs text-gray-600">Let us know when you're typically available for a call or consultation</p>

          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select preferred method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="text">Text</option>
          </select>
          {errors.contactMethod && <p className="text-red-600 text-sm">{errors.contactMethod}</p>}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="text-sm text-gray-700">I agree to be contacted</label>
          </div>
          {errors.consent && <p className="text-red-600 text-sm -mt-2">{errors.consent}</p>}

          <div className="bg-gray-100 text-center py-3 rounded">
            <span className="text-xs text-gray-500">[reCAPTCHA placeholder]</span>
          </div>

          <button type="submit" className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800">
            Submit
          </button>

          <p className="text-xs text-center text-gray-500">
            © By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
          </p>
        </form>
      </div>
    </div>
  );
}
