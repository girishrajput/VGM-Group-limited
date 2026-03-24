import React from "react";
import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "PHP Web Development",
    description:
      "Our PHP Web Development Services focus on delivering robust, scalable, and high-performing web solutions built with the power of PHP — one of the most trusted server-side scripting languages. From dynamic business portals and CRM systems to e-commerce stores and custom applications, our PHP developers create solutions that are fast, secure, and SEO-friendly. We use frameworks like Laravel, CodeIgniter, and CakePHP to build structured, feature-rich websites with clean coding and optimal functionality.",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "WordPress Web Development",
    description:
      "We offer professional WordPress Web Development Services that empower businesses to manage and grow their online presence with ease. From custom theme development and plugin integration to performance optimization and security enhancement, our team builds WordPress websites that are responsive, fast, and easy to maintain. We ensure your website looks great on all devices and is effortless to update.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Magento Web Development",
    description:
      "Our Magento Web Development Services are designed for businesses that want to build powerful and scalable e-commerce platforms. Magento's flexibility allows us to create highly customized online stores with advanced product management, secure payment gateways, and streamlined checkout systems. We focus on crafting an intuitive shopping experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Custom Web Development",
    description:
      "Every business has unique requirements — and that's where our Custom Web Development Services stand out. We develop tailor-made websites from scratch using modern technologies like PHP, Python, Node.js, and .NET. Our process includes understanding your business objectives, designing a personalized structure, and coding a robust website that delivers performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "CMS Web Development",
    description:
      "Our CMS Web Development Services make website management simple and efficient. We work with leading Content Management Systems like WordPress, Joomla, and Drupal to deliver dynamic websites where you can easily update content, images, and multimedia without any technical background.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Joomla Web Development",
    description:
      "Our Joomla Web Development Services provide powerful and flexible solutions for businesses seeking a reliable CMS platform. Joomla is known for its stability, extensibility, and strong community support, making it ideal for corporate websites, portals, and online communities.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Types of <span className="text-red-600">Web Development Services</span> We Provide
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Explore a range of Web Development solutions tailored to meet every business need.
          </p>
        </div>

        {/* Services List */}
        <div className="divide-y divide-slate-200">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}