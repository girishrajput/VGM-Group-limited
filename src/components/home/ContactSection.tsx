'use client';

import { Mail, Phone, MessageSquare, User } from 'lucide-react';
import { sendEmail } from '../../app/actions';

export default function ContactSection() {

  async function handleAction(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.success) {
      alert("Email sent to VGM Group Limited successfully!");
    } else {
      alert("Error: " + result.error);
    }
  }

  const socialLinks = [
    { Icon: Mail, href: "mailto:info@vgmgroup.co.tz" },
    { Icon: Phone, href: "tel:+255744000900" },
    { Icon: MessageSquare, href: "https://wa.me/255744000900" },
    { Icon: User, href: "/contact" },
  ];

  // Common styles for inputs to keep the code clean
  const inputStyles = "w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-slate-50";

  return (
    <section className="bg-gray-200 py-20 px-6 lg:px-12 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side: Content & Social Icons */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Collaborate with VGM Group Limited
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-xl">
            As a diversified consulting firm focused on HR solutions and digital services, VGM Group Limited welcomes partnerships with organizations and individuals across all sectors. Leverage our expertise and expansive digital presence to co-create innovative solutions that drive sustainable business results
          </p>

          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-600 hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center lg:text-left">
              Let's Talk About Your Idea
            </h3>

            <form action={handleAction} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className={inputStyles}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className={inputStyles}
                />
              </div>

              {/* NEW FIELDS: Phone and Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={inputStyles}
                />
                <input
                  name="website"
                  type="url"
                  placeholder="Website (https://...)"
                  className={inputStyles}
                />
              </div>

              <select name="service" className={inputStyles}>
                <option value="">Select a Service</option>
                <option value="Business Process Outsourcing (BPO)">Business Process Outsourcing (BPO)</option>
                <option value="HR & Payroll Management Software">HR & Payroll Management Software</option>
                <option value="HR Solutions">HR Solutions</option>
                <option value="Web Designing">Web Designing</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="WhatsApp Business Solutions">WhatsApp Business Solutions</option>
                <option value="Promotional Video Services">Promotional Video Services</option>
              </select>

              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={4}
                className={inputStyles}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-red-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}