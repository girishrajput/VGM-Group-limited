import { MapPin, Phone, Mail } from 'lucide-react';


const contactData = [
    {
      title: "VGM Group Limited.",
      icon: <MapPin className="w-8 h-8 text-white" />,
      gradient: "from-blue-600 to-indigo-600",
      content: (
        <p className="text-gray-500 text-sm leading-relaxed">
          Saife Mansion, 1st Floor,
Bibi Titi Mohammed Street,
P.O.Box 8523,
Dar Es Salaam, Tanzania,
Postal Code:11104
        </p>
      ),
    },
    {
      title: "Contact Info",
      icon: <Phone className="w-8 h-8 text-white" />,
      gradient: "from-green-400 to-emerald-500",
      content: (
        <div className="text-gray-500 text-sm space-y-1">
          <p>Land line - +91-11-41428131-34</p>
          <p>Mobile - +91-9540038789</p>
          <p>Whatsapp - +91-9540038789</p>
        </div>
      ),
    },
    {
      title: "Email",
      icon: <Mail className="w-8 h-8 text-white" />,
      gradient: "from-purple-400 to-pink-500",
      content: (
        <div className="text-sm">
          <a href="mailto:info@weblink.in" className="text-blue-600 font-medium hover:underline">
            info@weblink.in
          </a>
          <p className="text-gray-500 mt-1">
            Skype ID: <span className="font-bold text-gray-700">WEBLINK.INDIA</span>
          </p>
        </div>
      ),
    },
  ];

const ContactPage = () =>  {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-red-900 py-20 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Connect With VGM Group limited.</h1>
          <p className="text-lg md:text-xl text-red-100 italic">
           Trusted by clients worldwide – we’re just a message away.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            {/* Icon Container with Shadow and Gradient */}
            <div className={`mb-8 p-5 rounded-full bg-linear-to-br ${item.gradient} shadow-xl shadow-indigo-100`}>
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* Content */}
            <div className="grow">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

      
      
    </main>
  );
};

// Helper component for core values
const ValueItem = ({ icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="flex gap-4 group">
    <div className="bg-gray-100 text-red-600 p-3 rounded-lg group-hover:bg-red-600 group-hover:text-white transition">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 leading-snug">{text}</p>
    </div>
  </div>
);

export default ContactPage;