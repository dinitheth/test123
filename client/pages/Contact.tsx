import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">CONTACT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-black mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-black mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 text-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-fs-cyan text-black font-bold py-3 px-8 rounded hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Address</h3>
                <p className="text-lg text-gray-700">
                  F&S Clothing Store<br />
                  123 Fashion Street<br />
                  Colombo, Sri Lanka
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                <p className="text-lg text-gray-700">
                  +94 (0) 11 234 5678<br />
                  +94 (0) 77 123 4567
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                <p className="text-lg text-gray-700">
                  info@fsclothing.com<br />
                  support@fsclothing.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-2">Business Hours</h3>
                <p className="text-lg text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Facebook</a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded hover:bg-pink-700">Instagram</a>
                  <a href="#" className="bg-green-600 text-white p-3 rounded hover:bg-green-700">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
