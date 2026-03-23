import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-900">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl">
            Get in touch with the association for membership or policy inquiries.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-8">Association Details</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Address</h3>
                    <p className="text-navy-900 font-medium leading-relaxed">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg text-brand-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</h3>
                    <div className="flex flex-col">
                      {CONTACT_INFO.phones.map(phone => (
                        <p key={phone} className="text-navy-900 font-medium">{phone}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-lg text-brand-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-navy-900 font-medium">contact@aiupma.org</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-slate-500 text-sm">
                    Registration No: <span className="font-bold text-navy-900">{CONTACT_INFO.regNo}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Organisation</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center space-x-2 ${
                    submitted ? 'bg-green-500' : 'bg-navy-900 hover:bg-slate-800'
                  }`}
                >
                  {submitted ? (
                    <><span>Message Sent Successfully</span></>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
