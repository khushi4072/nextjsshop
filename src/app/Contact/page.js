'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendMessage = () => {
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <p className="text-green-500">Thank you! Your message has been sent.</p>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
          </div>

          <button
            onClick={handleSendMessage}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      )}
    </div>
  );
}
