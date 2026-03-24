import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "School Management System Development",
    description: "We design software that manages admissions, attendance, exams, fees, and student records. Our systems automate daily tasks, improve transparency, and reduce paperwork, making administration easier for staff and keeping parents informed through seamless communication channels.",
    image: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "E-Learning Platform Development",
    description: "We create online learning platforms featuring video classes, digital libraries, and interactive assignments. These platforms improve accessibility, allowing students to learn anytime, anywhere, while providing teachers with tools to track progress and deliver engaging digital lessons.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Mobile App Solutions for Education",
    description: "Our mobile apps connect students, teachers, and parents on one unified platform. Featuring homework updates, exam results, and real-time notifications, these apps support remote learning and attendance tracking, making education more accessible and student-friendly.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Online Admission & Fee Management",
    description: "We develop secure online admission systems where students can apply and upload documents easily. Our digital fee management ensures transparency, reduces manual errors, and simplifies financial tracking for schools and colleges through integrated payment gateways.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "CRM Solutions for Educational Institutions",
    description: "Our CRM software helps institutes manage student inquiries, follow-ups, and admissions efficiently. Colleges and coaching centers can track leads and automate reminders, converting prospects into enrollments while streamlining the entire communication lifecycle.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop"
  },
  {
  title: "Digital Marketing for Schools & Colleges",
  description: "We offer SEO, social media, and paid advertising services tailored for educational institutions. Our marketing campaigns highlight your courses, increase admissions, and build a strong online reputation to attract students from different regions effectively.",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
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