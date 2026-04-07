import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@adetuladaniel.design',
      href: 'mailto:hello@adetuladaniel.design'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something
            <span className="text-[#CECA64]"> Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brand? I'd love to hear about your project 
            and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center">
                    <div className="w-12 h-12 bg-[#7f7b0d]/90 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-[#CECA64] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">
                What to Expect
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Quick Response</p>
                    <p className="text-gray-300 text-sm">I'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Free Consultation</p>
                    <p className="text-gray-300 text-sm">30-minute strategy call to discuss your project</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Custom Proposal</p>
                    <p className="text-gray-300 text-sm">Tailored solution and timeline for your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Form */}
<div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors"
          placeholder="your@email.com"
        />
      </div>
    </div>

    <div>
      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
        Company / Organization
      </label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors"
        placeholder="Your company"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">
          Investment Goals *
        </label>
        <select
          id="goals"
          name="goals"
          required
          value={formData.goals}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors"
        >
          <option value="">Select goal</option>
          <option value="wealth-preservation">Wealth Preservation</option>
          <option value="growth">Growth</option>
          <option value="retirement">Retirement Planning</option>
          <option value="institutional">Institutional Strategy</option>
          <option value="real-estate">Real Estate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="assets" className="block text-sm font-medium text-gray-300 mb-2">
          Preferred Asset Classes
        </label>
        <select
          id="assets"
          name="assets"
          value={formData.assets}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors"
        >
          <option value="">Select asset class</option>
          <option value="gov-securities">Government Securities</option>
          <option value="equities">Equities</option>
          <option value="real-estate">Real Estate</option>
          <option value="commercial-papers">Commercial Papers</option>
          <option value="mixed">Mixed Portfolio</option>
        </select>
      </div>
    </div>

    <div>
      <label htmlFor="investment" className="block text-sm font-medium text-gray-300 mb-2">
        Investment Range
      </label>
      <select
        id="investment"
        name="investment"
        value={formData.investment}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors"
      >
        <option value="">Select range</option>
        <option value="<50k">Less than $50,000</option>
        <option value="50k-250k">$50,000 - $250,000</option>
        <option value="250k-1m">$250,000 - $1,000,000</option>
        <option value="1m+">$1,000,000+</option>
      </select>
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
        Additional Details *
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-[#4456BE] focus:border-transparent transition-colors resize-none"
        placeholder="Tell us about your investment goals, timeline, or specific needs..."
      ></textarea>
    </div>

    <button
      type="submit"
      disabled={isSubmitted}
      className="w-full bg-[#7f7b0d]/90 hover:bg-[#CECA64]/80 hover:text-[#4456BE] disabled:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
    >
      {isSubmitted ? (
        <>
          <CheckCircle size={20} />
          <span>Message Sent!</span>
        </>
      ) : (
        <>
          <Send size={20} />
          <span>Submit Inquiry</span>
        </>
      )}
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;