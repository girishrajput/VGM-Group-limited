import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Travel Website Development",
    description:
      "We design professional, responsive travel websites for agencies, tour operators, and hotels. Users can explore packages, book trips, and contact agents instantly. SEO-optimized and user-friendly, our websites increase visibility, attract global clients, and serve as a digital hub for promoting tours, destinations, and travel services efficiently.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Travel Mobile App Development",
    description:
      "Our mobile apps allow travel agencies and operators to offer on-the-go booking and itinerary management. Clients can browse packages, check availability, and make reservations instantly. Push notifications, search filters, and secure payment options enhance user experience, making trip planning convenient for tourists while boosting agency engagement and bookings.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Booking & Reservation Management System",
    description:
      "We provide a booking and reservation management system for agencies, hotels, and tour operators. Track customer bookings, manage itineraries, handle cancellations, and process payments seamlessly. This solution reduces operational errors, improves client satisfaction, and helps travel businesses deliver smooth, reliable services efficiently across destinations and clients.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Travel CRM Solutions",
    description:
      "Our travel CRM helps agencies, consultants, and tour operators manage client inquiries, leads, and bookings effectively. Track communications, schedule follow-ups, and analyze travel trends. By centralizing data, travel businesses can improve customer satisfaction, streamline operations, and enhance client retention, making tour planning more organized and result-oriented.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing for Travel Services",
    description:
      "We provide SEO, social media, and paid marketing for travel agencies, tour operators, and hotels. Promote destinations, packages, and services to targeted audiences worldwide. Digital marketing enhances visibility, attracts tourists, builds credibility, and drives bookings, helping travel businesses grow in competitive local and global markets efficiently.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop",
  },
  {
  title: "WhatsApp & Client Communication Services",
  description:
    "We integrate WhatsApp solutions for travel businesses to communicate quickly with clients. Share booking confirmations, itinerary updates, promotions, and travel alerts directly. Consultants and agencies can manage responses efficiently, improving engagement, enhancing customer experience, and ensuring tourists receive timely and personalized information for a smooth travel journey.",
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
}
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Services */}
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